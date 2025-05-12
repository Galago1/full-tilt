import { Divider, Grid, GridProps, List, ListProps } from '@mui/material';
import React from 'react';
import SideNavGroup from './SideNavGroup';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import { DragItemType } from './dragTypes';
import DraggableSideNavListItem from 'src/components/molecules/DraggableSideNavListItem/DraggableSideNavListItem';

interface SideNavContentProps {
  /**
   * Groups of items with their own IDs
   */
  groups?: Array<{
    id: string;
    title?: string;
    items: SideNavListItemProps[];
  }>;
  /**
   * Legacy: Items for the side nav icons (will be converted to a group)
   */
  sideNavListItemIcons?: SideNavListItemProps[];
  /**
   * Bottom items for the side nav (not draggable)
   */
  sideNavListItemIconsBottom: SideNavListItemProps[];
  /**
   * Element to display below all items
   */
  sideNavItemBelowAll?: React.ReactNode;
  /**
   * Props for the content container
   */
  contentContainerProps?: GridProps;
  /**
   * Props for the group list
   */
  groupListProps?: ListProps;
  /**
   * Legacy: Props for the icons list
   */
  sideNavListItemIconsListProps?: ListProps;
  /**
   * Props for the bottom icons list
   */
  sideNavListItemIconsBottomListProps?: ListProps;
  /**
   * Whether to show a divider below the bottom icons
   */
  sideNavListItemIconsBottomDivider?: boolean;
  /**
   * Whether to show a divider below all items
   */
  belowAllDivider?: boolean;
  /**
   * Function to move a group
   */
  moveGroup?: (dragIndex: number, hoverIndex: number) => void;
  /**
   * Legacy: Function to move a section
   */
  moveSection?: (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * Function to move an item within a group
   */
  moveItem?: (groupId: string, dragIndex: number, hoverIndex: number) => void;
  /**
   * If true, groups and items will be draggable
   */
  draggable?: boolean;
  /**
   * If provided, overrides the global draggable prop for top section items
   * When undefined, uses the global draggable prop value
   */
  topSectionDraggable?: boolean;
  /**
   * Props for the content container grid item
   */
  contentContainerGridItemProps?: GridProps;
}

const SideNavContent = ({
  groups = [],
  sideNavListItemIcons = [],
  sideNavListItemIconsBottom = [],
  sideNavItemBelowAll,
  contentContainerProps,
  groupListProps = {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible',
      padding: 0
    }
  },
  sideNavListItemIconsListProps = {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible'
    }
  },
  sideNavListItemIconsBottomListProps = { sx: { flex: '0 0 112px' } },
  sideNavListItemIconsBottomDivider = false,
  belowAllDivider = false,
  contentContainerGridItemProps,
  moveGroup,
  moveSection,
  moveItem,
  draggable = false,
  topSectionDraggable
}: SideNavContentProps) => {
  // Determine whether to render sideNavListItemIcons directly or as part of groups
  const hasCustomGroups = groups.length > 0;

  // If groups are provided, use them; otherwise convert sideNavListItemIcons to a default group
  const displayGroups = hasCustomGroups
    ? groups
    : sideNavListItemIcons.length > 0
    ? [
        {
          id: 'main-navigation',
          items: sideNavListItemIcons
        }
      ]
    : [];

  // Helper function to convert legacy moveSection to moveItem
  const handleMoveItem = (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => {
    if (moveItem) {
      moveItem(groupId, dragIndex, hoverIndex);
    }
  };
  console.log(
    'moveItem.hasCustomGroups',
    hasCustomGroups,
    sideNavListItemIcons.length,
    moveSection
  );

  return (
    <Grid
      container
      flexDirection={'column'}
      flexWrap={'nowrap'}
      flexGrow={1}
      sx={{
        height: '100%'
      }}
      {...contentContainerProps}
    >
      <Grid item flexGrow={1} {...contentContainerGridItemProps}>
        {/* 
          Only render sideNavListItemIcons directly if:
          1. Custom groups are being used (hasCustomGroups is true) AND
          2. sideNavListItemIcons has items 
        */}
        {hasCustomGroups && sideNavListItemIcons.length > 0 && (
          <List {...sideNavListItemIconsListProps}>
            {sideNavListItemIcons.map((sideNavListItem, index) =>
              (topSectionDraggable !== undefined
                ? topSectionDraggable
                : draggable) && moveSection ? (
                <DraggableSideNavListItem
                  key={`section-${index}`}
                  id={`section-${index}`}
                  index={index}
                  type={DragItemType.SECTION}
                  moveSection={moveSection}
                  {...sideNavListItem}
                />
              ) : (
                <SideNavListItem key={index} {...sideNavListItem} />
              )
            )}
          </List>
        )}

        {/* Render groups if available */}
        {displayGroups.length > 0 && (
          <List
            {...groupListProps}
            sx={{
              ...groupListProps?.sx,
              '& > .MuiListItem-root': {
                padding: 0
              }
            }}
          >
            {displayGroups.map((group, index) => (
              <SideNavGroup
                key={group.id}
                id={group.id}
                title={group.title}
                index={index}
                items={group.items}
                moveGroup={moveGroup || (() => {})}
                moveItem={handleMoveItem}
                draggable={draggable}
                listProps={{
                  sx: {
                    padding: 0
                  }
                }}
              />
            ))}
          </List>
        )}
      </Grid>
      {sideNavListItemIconsBottomDivider && (
        <Grid item>
          <Divider />
        </Grid>
      )}
      <Grid item flexShrink={0}>
        <List {...sideNavListItemIconsBottomListProps}>
          {(sideNavListItemIconsBottom || []).map((sideNavListItem, index) => (
            <SideNavListItem key={index} {...sideNavListItem} />
          ))}
        </List>
      </Grid>
      {belowAllDivider && (
        <Grid item>
          <Divider />
        </Grid>
      )}
      {sideNavItemBelowAll && <Grid item>{sideNavItemBelowAll}</Grid>}
    </Grid>
  );
};

export default SideNavContent;
