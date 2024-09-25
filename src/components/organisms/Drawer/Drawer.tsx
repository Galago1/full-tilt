import { Box, BoxProps, Drawer as MuiDrawer } from '@mui/material';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { JSXElementConstructor, ReactElement } from 'react';
import { ButtonListButton } from 'src/components/molecules/ButtonList/ButtonList';
import DrawerActions, {
  DrawerActionsProps
} from 'src/components/molecules/Drawer/DrawerActions/DrawerActions';
import DrawerContent, {
  DrawerContentProps
} from 'src/components/molecules/Drawer/DrawerContent/DrawerContent';
import DrawerHeader, {
  DrawerHeaderProps
} from 'src/components/molecules/Drawer/DrawerHeader/DrawerHeader';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const style = {
  drawerBoxSx: {
    // width: { xs: '100%', sm: 320 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
};

export interface DrawerProps extends Omit<MuiDrawerProps, 'slots'> {
  /**
   * Option to show or hide the header
   */
  showHeader?: boolean;
  /**
   * Option to show or hide the actions
   */
  showActions: boolean;
  /**
   * Component to display
   */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  /**
   * Click the backdrop to close
   * @default
   * true
   */
  useBackdropClick?: boolean;
  /**
   * close the drawer
   */
  onClose: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  /**
   * Option to show or hide the close button
   * @default
   * true
   */
  showClose?: boolean;
  slots?: {
    /**
     * The container styles
     */
    drawerHeaderProps?: DrawerHeaderProps;
    /**
     * The container styles
     */
    boxProps?: BoxProps;
    /**
     * The Drawer content props
     */
    drawerContentProps?: DrawerContentProps;
    /**
     * The Drawer actions props
     */
    drawerActionsProps?: DrawerActionsProps;
    /**
     * The hide actions box props
     */
    hideActionsBoxProps?: BoxProps;
    /**
     * The hide header box props
     */
    hideHeaderBoxProps?: BoxProps;
  };
  buttons?: ButtonListButton[];
}
const Drawer = ({
  showHeader = true,
  showActions = true,
  children,
  showClose = true,
  useBackdropClick = true,
  onClose,
  slots,
  buttons,
  ...props
}: DrawerProps) => {
  const {
    drawerHeaderProps,
    drawerContentProps,
    drawerActionsProps,
    hideActionsBoxProps,
    hideHeaderBoxProps,
    boxProps
  } = slots || {};

  const finalDrawerContentProps = {
    ...drawerContentProps,
    children
  };

  return (
    <MuiDrawer
      {...props}
      onClose={(event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (useBackdropClick) {
          onClose(event, reason);
        }
      }}
    >
      <Box sx={style.drawerBoxSx} {...boxProps}>
        {showHeader ? (
          <DrawerHeader
            onHide={onClose}
            showClose={showClose ?? drawerHeaderProps?.showClose}
            {...drawerHeaderProps}
          />
        ) : (
          <Box sx={{ pt: responsiveSpacing }} {...hideHeaderBoxProps} />
        )}
        <DrawerContent {...finalDrawerContentProps} />

        {showActions ? (
          <DrawerActions buttons={buttons} {...drawerActionsProps} />
        ) : (
          <Box
            sx={{ pt: children ? responsiveSpacing : null }}
            {...hideActionsBoxProps}
          />
        )}
      </Box>
    </MuiDrawer>
  );
};
export default Drawer;
