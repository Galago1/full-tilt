import { Grid } from '@mui/material';
import DragDropLine from 'src/components/utilities/DragDropLine';
import SideNavListItem, {
  SideNavListItemProps
} from '../SideNavListItem/SideNavListItem';
import { useDraggableSideNavListItem } from './hooks';
import { DragItemType } from 'src/components/organisms/SideNav';

// Create a transparent 1x1 pixel image to use as an empty preview

export interface DraggableSideNavListItemProps extends SideNavListItemProps {
  /**
   * The index of the item in the list
   */
  index: number;
  /**
   * The index of the section that contains this item (only for ITEM type)
   */
  sectionIndex?: number;
  /**
   * The ID of the group this item belongs to
   */
  groupId?: string;
  /**
   * The type of draggable item
   */
  type: DragItemType;
  /**
   * Function to move a section
   */
  moveSection?: (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * Function to move an item within a section
   */
  moveItem?: (
    sectionIndex: number | string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * ID of the item (used for drag identification)
   */
  id: string;
  /**
   * Whether to show drop indicators
   */
  showDropLine?: boolean;
}

const DraggableSideNavListItem = ({
  index,
  sectionIndex,
  groupId,
  type,
  moveSection,
  moveItem,
  id,
  showDropLine = true,
  ...listItemProps
}: DraggableSideNavListItemProps) => {
  const {
    ref,
    handlerId,
    isOver,
    dropPosition,
    isDragging,
    backgroundColor,
    canDrop
  } = useDraggableSideNavListItem({
    index,
    sectionIndex,
    groupId,
    type,
    moveSection,
    moveItem,
    id,
    showDropLine,
    listItemTextProps: listItemProps.listItemTextProps
  });

  return (
    <Grid
      ref={ref}
      data-handler-id={handlerId}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        position: 'relative',
        transition: 'background-color 0.2s',
        backgroundColor
      }}
    >
      <DragDropLine
        show={canDrop && isOver && showDropLine && dropPosition === 'top'}
        position="top"
      />
      <SideNavListItem {...listItemProps} />
      <DragDropLine
        show={canDrop && isOver && showDropLine && dropPosition === 'bottom'}
        position="bottom"
      />
    </Grid>
  );
};

export default DraggableSideNavListItem;
