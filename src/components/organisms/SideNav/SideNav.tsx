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
  ...props
}: SideNavProps) => {
  const containerRef = useRef(null);
  return (
    <Drawer ref={containerRef} variant="permanent" anchor="left" {...props}>
      <Toolbar {...toolbarProps} />
      {useTopContentDivider && <Divider />}

      <Grid
        container
        flexGrow={1}
        flexWrap={'nowrap'}
        sx={{ overflow: 'hidden', height: '100%', overflowY: 'scroll' }}
        {...contentContainerGridItemProps}
      >
        <Grid
          item
          sx={{ height: '100%' }}
          flexGrow={slide ? 0 : 1}
          {...leftGridItemProps}
        >
          <Content
            {...{
              sideNavListItemIcons,
              sideNavListItemIconsBottom,
              sideNavItemBelowAll,
              contentContainerProps,
              sideNavListItemIconsListProps,
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
          <Grid item flexGrow={slide ? 1 : 0} className={slide ? '' : 'hidden'}>
            <Box {...boxProps}>
              {secondaryToolbarProps && (
                <>
                  <Toolbar {...secondaryToolbarProps} />
                  <Divider />
                </>
              )}
              <List {...sideNavListItemsListProps}>
                {(sideNavListItems || []).map((sideNavListItem, index) => (
                  <SideNavListItem key={index} {...sideNavListItem} />
                ))}
              </List>
            </Box>
          </Grid>
        </Slide>
      </Grid>
    </Drawer>
  );
};
export default SideNav;
