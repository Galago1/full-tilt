import {
  Box,
  BoxProps,
  Divider,
  Drawer,
  DrawerProps,
  Grid,
  GridProps,
  List,
  ListProps,
  Slide,
  SlideProps,
  SxProps,
  Theme,
  Toolbar,
  ToolbarProps
} from '@mui/material';
import { useRef } from 'react';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';

interface ContentProps {
  sideNavListItemIcons: SideNavListItemProps[];
  sideNavListItemIconsBottom: SideNavListItemProps[];
  sideNavItemBelowAll: React.ReactNode;
  contentContainerProps?: GridProps;
  sideNavListItemIconsListProps?: ListProps;
  sideNavListItemIconsBottomListProps?: ListProps;
  sideNavListItemIconsBottomDivider: boolean;
  belowAllDivider: boolean;
}
const Content = ({
  sideNavListItemIcons,
  sideNavListItemIconsBottom,
  sideNavItemBelowAll,
  contentContainerProps,
  sideNavListItemIconsListProps = {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll'
    }
  },
  sideNavListItemIconsBottomListProps = { sx: { flex: '0 0 112px' } },
  sideNavListItemIconsBottomDivider = false,
  belowAllDivider = false
}: ContentProps) => {
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
      <Grid item flexGrow={1}>
        <List {...sideNavListItemIconsListProps}>
          {(sideNavListItemIcons || []).map((sideNavListItem, index) => (
            <SideNavListItem key={index} {...sideNavListItem} />
          ))}
        </List>
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
   * Props for the list item icons.
   */
  sideNavListItemIcons: SideNavListItemProps[];
  /**
   * Props for the list item icons.
   */
  sideNavListItemIconsBottom: SideNavListItemProps[];
  /**
   * Props for the list items.
   */
  sideNavListItems: SideNavListItemProps[];
  /**
   * The element to display below all the list items.
   */
  sideNavItemBelowAll?: React.ReactNode;
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
  boxProps?: BoxProps;
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
   * Props for the list items list.
   */
  sideNavListItemsListProps?: ListProps;
  /**
   * Props for the list items icons list.
   */
  sideNavListItemIconsListProps?: ListProps;
  /**
   * Props for the list items icons bottom list.
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
}
const SideNav = ({
  toolbarProps,
  secondaryToolbarProps,
  sideNavListItemIcons,
  sideNavListItemIconsBottom,
  sideNavListItems,
  leftGridItemProps,
  slide = false,
  boxProps,
  sideNavItemBelowAll,
  slideProps,
  contentContainerProps,
  useTopContentDivider = true,
  sideNavListItemsListProps,
  sideNavListItemIconsListProps,
  sideNavListItemIconsBottomListProps,
  sideNavListItemIconsBottomDivider,
  belowAllDivider,
  contentContainerGridItemProps,
  rightColumnSx,
  showSecondaryToolbarDivider,
  ...props
}: SideNavProps) => {
  // const containerRef = useRef(null);
  return (
    <Drawer {...props} open variant="permanent">
      <Grid
        container
        flexDirection={'column'}
        sx={{
          height: '100%',
          backgroundColor: (theme) => theme.palette.background.paper
        }}
      >
        <Grid
          item
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: (theme) => theme.palette.background.paper
          }}
        >
          <Toolbar {...toolbarProps} />
        </Grid>
        <Grid
          item
          flexGrow={1}
          sx={{
            height: 'calc(100% - 48px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
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
                <Content
                  {...{
                    sideNavListItemIcons,
                    sideNavListItemIconsBottom,
                    sideNavItemBelowAll,
                    contentContainerProps,
                    sideNavListItemIconsListProps: {
                      sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'visible'
                      },
                      ...sideNavListItemIconsListProps
                    },
                    sideNavListItemIconsBottomListProps,
                    sideNavListItemIconsBottomDivider:
                      sideNavListItemIconsBottomDivider!,
                    belowAllDivider: belowAllDivider!
                  }}
                />
              </Grid>

              <Slide
                in={slide}
                direction={'left'}
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
                  <Box
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
                    >
                      {secondaryToolbarProps && (
                        <Grid
                          item
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                            backgroundColor: (theme) =>
                              theme.palette.background.paper
                          }}
                        >
                          <Toolbar {...secondaryToolbarProps} />
                          {showSecondaryToolbarDivider && <Divider />}
                        </Grid>
                      )}
                      <Grid
                        item
                        sx={{
                          height: '100%',
                          pt: secondaryToolbarProps ? '48px' : 0,
                          overflow: 'auto'
                        }}
                      >
                        <List {...sideNavListItemsListProps}>
                          {(sideNavListItems || []).map(
                            (sideNavListItem, index) => (
                              <SideNavListItem
                                key={index}
                                {...sideNavListItem}
                              />
                            )
                          )}
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Slide>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
};
export default SideNav;
