import {
  Divider,
  Grid,
  GridProps,
  Grow,
  List,
  ListProps,
  Slide,
  SlideProps,
  SxProps,
  Theme,
  Toolbar,
  ToolbarProps
} from '@mui/material';
import { isEmpty } from 'lodash';
import DraggableSideNavListItem from 'src/components/molecules/DraggableSideNavListItem/DraggableSideNavListItem';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import { DragItemType } from './dragTypes';
import SideNavGroup from './SideNavGroup';

export interface SideNavSlideProps {
  /**
   * Props for the secondary toolbar component.
   */
  secondaryToolbarProps?: ToolbarProps;
  /**
   * Groups of items with their own IDs
   */
  groups?: Array<{
    id: string;
    title?: string;
    items: SideNavListItemProps[];
  }>;
  /**
   * Legacy: Props for the list items.
   */
  sideNavListItems?: SideNavListItemProps[];
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
   * Props for the list items list.
   */
  sideNavListItemsListProps?: ListProps;

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
   * Props for the other list items list props.
   */
  sideNavListItemsOtherProps?: ListProps;
  /**
   * Props for the other list items.
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
   * Function to move a group
   */
  moveGroup?: (dragIndex: number, hoverIndex: number) => void;
  /**
   * Function to move an item within a group
   */
  moveItem?: (groupId: string, dragIndex: number, hoverIndex: number) => void;
  /**
   * Legacy: Function to move an item within a section
   */
  moveItemLegacy?: (
    sectionIndex: number | string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  /**
   * If true, sections and items will be draggable
   */
  draggable?: boolean;
}

const SideNavSlide = ({
  secondaryToolbarProps,
  groups = [],
  sideNavListItems = [],
  slide = false,
  boxProps,
  slideProps,
  sideNavListItemsListProps,
  rightColumnSx,
  showSecondaryToolbarDivider,
  sideNavListItemsOtherProps,
  sideNavListOtherItems = [],
  sideNavListItemsGridItemProps,
  sideNavListItemsOtherGridItemProps,
  moveGroup,
  moveItem,
  moveItemLegacy,
  draggable = false
}: SideNavSlideProps) => {
  // If groups are provided, use them; otherwise convert legacy items to default groups
  const displayGroups =
    groups.length > 0
      ? groups
      : [
          ...(sideNavListItems.length > 0
            ? [
                {
                  id: 'slide-primary',
                  items: sideNavListItems
                }
              ]
            : []),
          ...(sideNavListOtherItems.length > 0
            ? [
                {
                  id: 'slide-secondary',
                  items: sideNavListOtherItems
                }
              ]
            : [])
        ];

  // Helper function to convert legacy moveItem to new format
  const handleMoveItem = (
    groupId: string,
    dragIndex: number,
    hoverIndex: number
  ) => {
    if (moveItem) {
      moveItem(groupId, dragIndex, hoverIndex);
    }
  };

  return (
    <Slide
      in={slide}
      direction={'right'}
      timeout={{ enter: 500, exit: 500 }}
      mountOnEnter
      unmountOnExit
      {...slideProps}
    >
      <Grid
        item
        flexGrow={slide ? 1 : 0}
        className={slide ? '' : 'hidden'}
        sx={{
          height: '100%',
          overflow: 'hidden',
          ...rightColumnSx
        }}
      >
        <Grid
          {...boxProps}
          sx={{
            height: '100%',
            overflow: 'auto'
          }}
        >
          <Grid
            container
            flexDirection="column"
            sx={{
              height: '100%',
              position: 'relative'
            }}
            flexWrap="nowrap"
          >
            {secondaryToolbarProps && (
              <Grow
                in={Boolean(secondaryToolbarProps)}
                timeout={300}
                style={{ transformOrigin: '0 0 0' }}
              >
                <Grid width={'100%'}>
                  <Toolbar {...secondaryToolbarProps} />
                  {showSecondaryToolbarDivider && <Divider />}
                </Grid>
              </Grow>
            )}

            {/* Group-based view */}
            {displayGroups.length > 0 && (
              <Grid
                item
                sx={{
                  height: '100%',
                  overflow: 'auto',
                  padding: 0
                }}
                {...sideNavListItemsGridItemProps}
              >
                {displayGroups.map((group, index) => (
                  <Grow
                    key={group.id}
                    in={true}
                    timeout={300 + index * 100}
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <div>
                      <SideNavGroup
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
                    </div>
                  </Grow>
                ))}
              </Grid>
            )}

            {/* Legacy support for direct list items - only show if groups are empty and legacy items exist */}
            {displayGroups.length === 0 && (
              <>
                {!isEmpty(sideNavListItemsListProps) &&
                  sideNavListItems.length > 0 && (
                    <Grid
                      item
                      sx={{
                        height: '100%',
                        overflow: 'auto'
                      }}
                      {...sideNavListItemsGridItemProps}
                    >
                      <List {...sideNavListItemsListProps}>
                        {sideNavListItems.map((sideNavListItem, index) => (
                          <Grow
                            key={index}
                            in={true}
                            timeout={300 + index * 100}
                            style={{ transformOrigin: '0 0 0' }}
                          >
                            <Grid>
                              {draggable && moveItemLegacy ? (
                                <DraggableSideNavListItem
                                  id={`item-${index}`}
                                  index={index}
                                  type={DragItemType.ITEM}
                                  sectionIndex={0}
                                  moveItem={moveItemLegacy}
                                  {...sideNavListItem}
                                />
                              ) : (
                                <SideNavListItem {...sideNavListItem} />
                              )}
                            </Grid>
                          </Grow>
                        ))}
                      </List>
                    </Grid>
                  )}

                {!isEmpty(sideNavListItemsOtherProps) &&
                  sideNavListOtherItems.length > 0 && (
                    <Grid
                      item
                      sx={{
                        height: '100%',
                        overflow: 'auto'
                      }}
                      {...sideNavListItemsOtherGridItemProps}
                    >
                      <List {...sideNavListItemsOtherProps}>
                        {sideNavListOtherItems.map((sideNavListItem, index) => (
                          <Grow
                            key={index}
                            in={true}
                            timeout={300 + index * 100}
                            style={{ transformOrigin: '0 0 0' }}
                          >
                            <Grid>
                              {draggable && moveItemLegacy ? (
                                <DraggableSideNavListItem
                                  id={`other-item-${index}`}
                                  index={index}
                                  type={DragItemType.ITEM}
                                  sectionIndex={1}
                                  moveItem={moveItemLegacy}
                                  {...sideNavListItem}
                                />
                              ) : (
                                <SideNavListItem {...sideNavListItem} />
                              )}
                            </Grid>
                          </Grow>
                        ))}
                      </List>
                    </Grid>
                  )}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
};
export default SideNavSlide;
