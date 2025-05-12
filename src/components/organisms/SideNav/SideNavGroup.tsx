import { Grid, List, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DraggableSideNavListItem from 'src/components/molecules/DraggableSideNavListItem/DraggableSideNavListItem';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import DropdownSideNavListItem from 'src/components/molecules/DropdownSideNavListItem/DropdownSideNavListItem';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import { DRAG_TYPE, DragItemType } from './dragTypes';
import DragDropLine from 'src/components/utilities/DragDropLine/DragDropLine';

// Extended props for items that can have dropdown menus
export interface SideNavItemWithDropdownProps extends SideNavListItemProps {
  dropdownProps?: Partial<Omit<DropdownProps, 'dropdownListItems' | 'label'>>;
  dropdownListItems?: DropdownListItem[];
  draggable?: boolean;
}

interface SideNavGroupProps {
  /**
   * Unique identifier for the group
   */
  id: string;
  /**
   * Optional title for the group
   */
  title?: string;
  /**
   * Index of the group in the list
   */
  index: number;
  /**
   * Items in the group
   */
  items: SideNavItemWithDropdownProps[];
  /**
   * Function to move a group
   */
  moveGroup: (dragIndex: number, hoverIndex: number) => void;
  /**
   * Function to move an item within a group
   */
  moveItem: (groupId: string, dragIndex: number, hoverIndex: number) => void;
  /**
   * If true, the group and its items will be draggable
   */
  draggable?: boolean;
  /**
   * Props for the list component
   */
  listProps?: any;
}

/**
 * A group of navigation items that can be dragged as a unit
 * Individual items within the group can also be dragged
 */
const SideNavGroup = ({
  id,
  title,
  index,
  items,
  moveGroup,
  moveItem,
  draggable = false,
  listProps = {}
}: SideNavGroupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Track drop position for visual indicator
  const [dropPosition, setDropPosition] =
    useState<'top' | 'bottom' | null>(null);

  // Group drag functionality
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE.GROUP,
    item: () => ({ type: DragItemType.GROUP, id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    canDrag: draggable
  });

  // Group drop functionality
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DRAG_TYPE.GROUP,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    hover(item: any, monitor) {
      if (!ref.current) return;
      if (item.id === id) return;

      // Update isOver state for immediate visual feedback
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Update drop position indicator
      setDropPosition(hoverClientY < hoverMiddleY ? 'top' : 'bottom');

      // Only perform the move when the mouse has crossed half of the items height
      if (hoverIndex === 0) {
        // Special case for first position
        // For the first item, allow drop if cursor is anywhere in the top 40%
        if (
          dragIndex > hoverIndex &&
          hoverClientY > hoverBoundingRect.height * 0.4
        )
          return;
      } else {
        // Normal case for other positions
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      }

      // Call moveGroup with both indices to update the state
      moveGroup(dragIndex, hoverIndex);

      // Update the item's index to match where it was dropped
      item.index = hoverIndex;
    },
    drop: () => {
      // Reset drop position when drop is complete
      setDropPosition(null);
    }
  });

  // Connect drag and drop refs
  drag(drop(ref));

  // Determine background color based on hover state
  const backgroundColor =
    isOver && canDrop
      ? 'rgba(0, 0, 0, 0.04)'
      : draggable
      ? 'rgba(0, 0, 0, 0.02)'
      : 'transparent';

  return (
    <Grid
      ref={ref}
      container
      flexDirection="column"
      sx={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor,
        borderRadius: 1,
        mb: 1,
        transition: 'all 0.2s ease',
        position: 'relative',
        cursor: draggable ? 'move' : 'default',
        ...(isOver &&
          canDrop && {
            boxShadow: '0 0 0 1px rgba(25, 118, 210, 0.2)'
          })
      }}
    >
      {/* Drop line indicator for top position */}
      <DragDropLine
        show={isOver && canDrop && dropPosition === 'top'}
        position="top"
      />

      {title && (
        <Grid item sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
      )}
      <Grid item>
        <List {...listProps}>
          {items.map((item, itemIndex) => {
            const isItemDraggable =
              item.draggable !== undefined ? item.draggable : draggable;

            return (
              <React.Fragment key={`${id}-item-${itemIndex}`}>
                {isItemDraggable && item.id && !item.dropdownListItems ? (
                  <DraggableSideNavListItem
                    id={`${id}-item-${itemIndex}`}
                    index={itemIndex}
                    type={DragItemType.ITEM}
                    groupId={id}
                    moveItem={(_, dragIndex, hoverIndex) =>
                      moveItem(id, dragIndex, hoverIndex)
                    }
                    {...item}
                  />
                ) : // Render dropdown items differently
                item.dropdownListItems ? (
                  <DropdownSideNavListItem
                    {...item}
                    dropdownListItems={item.dropdownListItems}
                  />
                ) : (
                  <SideNavListItem {...item} />
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Grid>

      {/* Drop line indicator for bottom position */}
      <DragDropLine
        show={isOver && canDrop && dropPosition === 'bottom'}
        position="bottom"
      />
    </Grid>
  );
};

export default SideNavGroup;
