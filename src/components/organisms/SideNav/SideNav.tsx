import {
  Divider,
  Drawer,
  DrawerProps,
  Grid,
  GridProps,
  ListProps,
  SlideProps,
  SxProps,
  Theme,
  Toolbar,
  ToolbarProps
} from '@mui/material';
import { ReactNode, useCallback } from 'react';
import { SideNavListItemProps } from 'src/components/molecules/SideNavListItem/SideNavListItem';
import SideNavContent from './SideNavContent';
import SideNavSlide from './SideNavSlide';
import { DndProvider } from 'react-dnd';
import CustomDragLayer from './CustomDragLayer';
import { HTML5Backend } from 'react-dnd-html5-backend';

export interface SideNavProps extends DrawerProps {
  /**
   * Props for the toolbar component.
   */
  toolbarProps: ToolbarProps;
  /**
   * Props for the secondary toolbar component.
   */
  secondaryToolbarProps?: ToolbarProps;
  /**
   * Groups of items with their own IDs for the side navigation
   */
  groups?: Array<{
    id: string;
    title?: string;
    items: SideNavListItemProps[];
  }>;
  /**
   * Groups of items with their own IDs for the slide content
   */
  slideGroups?: Array<{
    id: string;
    title?: string;
    items: SideNavListItemProps[];
  }>;
  /**
   * Props for the list item icons.
   */
  sideNavListItemIcons?: SideNavListItemProps[];
  /**
   * Props for the list item icons at bottom.
   */
  sideNavListItemIconsBottom?: SideNavListItemProps[];
  /**
   * Props for the list items.
   */
  sideNavListItems?: SideNavListItemProps[];
  /**
   * The element to display below all the list items.
   */
  sideNavItemBelowAll?: ReactNode;
  /**
   * Props for the left grid item.
   */
  leftGridItemProps?: GridProps;
  /**
   * If true, the nested elements will slide in
   */
  slide?: boolean;
  /**
   * Props for the box component.
   */
  boxProps?: GridProps;
  /**
   * Props for the slide component.
   */
  slideProps?: SlideProps;
  /**
   * Props for the content container.
   */
  contentContainerProps?: GridProps;
  /**
   * If true, a divider will be used above the content.
   */
  useTopContentDivider?: boolean;
  /**
   * Props for the group lists
   */
  groupListProps?: ListProps;
  /**
   * Legacy: Props for the list items list.
   */
  sideNavListItemsListProps?: ListProps;
  /**
   * Legacy: Props for the list items icons list.
   */
  sideNavListItemIconsListProps?: ListProps;
  /**
   * Legacy: Props for the list items icons bottom list.
   */
  sideNavListItemIconsBottomListProps?: ListProps;
  /**
   * If true, a divider will be used below the bottom icons.
   */
  sideNavListItemIconsBottomDivider?: boolean;
  /**
   * If true, a divider will be used below all the list items.
   */
  belowAllDivider?: boolean;
  /**
   * Props for the content container grid item.
   */
  contentContainerGridItemProps?: GridProps;
  /**
   * The sx prop for the right column grid item.
   */
  rightColumnSx?: SxProps<Theme>;
  /**
   * If true, a divider will be used below the secondary toolbar
   * @default
   * true
   */
  showSecondaryToolbarDivider?: boolean;
  /**
   * The sx prop for the sidebar container.
   */
  sidebarContainerSx?: SxProps<Theme>;
  /**
   * Legacy: Props for the other list items list props.
   */
  sideNavListItemsOtherProps?: ListProps;
  /**
   * Legacy: Props for the other list items.
   */
  sideNavListOtherItems?: SideNavListItemProps[];
  /**
   * Props for the other list items grid item.
   */
  sideNavListItemsGridItemProps?: GridProps;
  /**
   * Props for the other list items grid item.
   */
  sideNavListItemsOtherGridItemProps?: GridProps;
  /**
   * Props for the toolbar grid item.
   */
  toolbarGridItemProps?: GridProps;
  /**
   * Function to move a group or section
   */
  moveSection?: (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * Function to move an item within a group or section
   */
  moveItem?: (
    sectionIndex: number | string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * If true, sections and items will be draggable
   */
  draggable?: boolean;
  /**
   * If provided, overrides the global draggable prop for top section items
   * When undefined, uses the global draggable prop value
   */
  topSectionDraggable?: boolean;
}

const SideNav = ({
  toolbarProps,
  secondaryToolbarProps,
  groups = [],
  slideGroups = [],
  sideNavListItemIcons = [],
  sideNavListItemIconsBottom = [],
  sideNavListItems = [],
  sideNavListOtherItems = [],
  leftGridItemProps,
  slide = false,
  boxProps,
  sideNavItemBelowAll,
  slideProps,
  contentContainerProps,
  useTopContentDivider = true,
  groupListProps,
  sideNavListItemsListProps,
  sideNavListItemIconsListProps,
  sideNavListItemIconsBottomListProps,
  sideNavListItemIconsBottomDivider,
  belowAllDivider,
  contentContainerGridItemProps,
  rightColumnSx,
  showSecondaryToolbarDivider,
  sidebarContainerSx,
  sideNavListItemsOtherProps,
  sideNavListItemsGridItemProps,
  sideNavListItemsOtherGridItemProps,
  toolbarGridItemProps,
  moveSection,
  moveItem,
  draggable = false,
  topSectionDraggable,
  ...props
}: SideNavProps) => {
  const { position } = (toolbarProps?.sx as any) || {};

  // Callback to move groups/sections - now just passes through to the provided moveSection
  const moveGroup = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (moveSection) {
        moveSection('', dragIndex, hoverIndex);
      }
    },
    [moveSection]
  );

  // Callback to move items within a group - now just passes through to the provided moveItem
  const moveItemInGroup = useCallback(
    (groupId: string, dragIndex: number, hoverIndex: number) => {
      if (moveItem) {
        moveItem(groupId, dragIndex, hoverIndex);
      }
    },
    [moveItem]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      {/* Add the CustomDragLayer for better drag preview */}
      <CustomDragLayer />

      <Drawer {...props} open variant="permanent">
        <Grid
          container
          flexDirection={'column'}
          sx={{
            height: '100%',
            flexWrap: 'nowrap',
            ...sidebarContainerSx
          }}
        >
          <Grid
            item
            {...toolbarGridItemProps}
            sx={{
              position: 'relative',
              zIndex: 1,
              height: position === 'fixed' ? 0 : 'auto',
              minHeight: position === 'fixed' ? 0 : 'auto',
              '& .MuiToolbar-root': {
                position: position || 'relative'
              },
              ...toolbarGridItemProps?.sx
            }}
          >
            <Toolbar {...toolbarProps} />
          </Grid>
          <Grid
            item
            flexGrow={1}
            sx={{
              height: position === 'fixed' ? '100%' : 'calc(100% - 48px)',
              position: 'relative',
              overflow: 'hidden',
              marginTop: position === 'fixed' ? 0 : 'auto'
            }}
          >
            <Grid
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {useTopContentDivider && <Divider />}
              <Grid
                container
                flexGrow={1}
                flexWrap={'nowrap'}
                sx={{ height: '100%', overflow: 'hidden' }}
                {...contentContainerGridItemProps}
              >
                <Grid
                  item
                  sx={{ height: '100%', overflow: 'auto' }}
                  flexGrow={slide ? 0 : 1}
                  {...leftGridItemProps}
                >
                  <SideNavContent
                    groups={groups}
                    sideNavListItemIcons={sideNavListItemIcons}
                    sideNavListItemIconsBottom={
                      sideNavListItemIconsBottom || []
                    }
                    sideNavItemBelowAll={sideNavItemBelowAll}
                    contentContainerProps={contentContainerProps}
                    sideNavListItemIconsBottomDivider={
                      sideNavListItemIconsBottomDivider
                    }
                    belowAllDivider={belowAllDivider}
                    moveGroup={moveGroup}
                    moveSection={moveSection}
                    moveItem={moveItemInGroup}
                    topSectionDraggable={topSectionDraggable}
                    draggable={draggable}
                    groupListProps={groupListProps}
                    sideNavListItemIconsListProps={
                      sideNavListItemIconsListProps
                    }
                    sideNavListItemIconsBottomListProps={
                      sideNavListItemIconsBottomListProps
                    }
                  />
                </Grid>

                <SideNavSlide
                  secondaryToolbarProps={secondaryToolbarProps}
                  groups={slideGroups}
                  sideNavListItems={sideNavListItems}
                  slide={slide}
                  boxProps={boxProps}
                  slideProps={slideProps}
                  sideNavListItemsListProps={sideNavListItemsListProps}
                  rightColumnSx={rightColumnSx}
                  showSecondaryToolbarDivider={showSecondaryToolbarDivider}
                  sideNavListItemsOtherProps={sideNavListItemsOtherProps}
                  sideNavListOtherItems={sideNavListOtherItems}
                  sideNavListItemsGridItemProps={sideNavListItemsGridItemProps}
                  sideNavListItemsOtherGridItemProps={
                    sideNavListItemsOtherGridItemProps
                  }
                  moveGroup={moveGroup}
                  moveItem={moveItemInGroup}
                  moveItemLegacy={moveItem}
                  draggable={draggable}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </DndProvider>
  );
};
export default SideNav;
