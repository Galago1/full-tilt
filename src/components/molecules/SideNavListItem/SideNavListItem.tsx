import {
  Box,
  BoxProps,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemProps,
  ListItemText,
  ListItemTextProps
} from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import Tooltip, { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';
import IconWithTooltip from '../IconWithTooltip';
import { IconWithTooltipProps } from '../IconWithTooltip/IconWithTooltip';

const ListItemButtonClone = forwardRef(({ children, ...props }: any, ref) => {
  return (
    <ListItemButton ref={ref} {...props}>
      {children}
    </ListItemButton>
  );
});
ListItemButtonClone.displayName = 'ListItemButtonClone';

export interface SideNavListItemProps extends ListItemProps {
  /**
   * Props for the list item text component.
   */
  listItemTextProps?: ListItemTextProps;
  /**
   * Props for the list item icon component.
   */
  listItemIconProps?: ListItemIconProps;
  /**
   * The icon to display.
   */
  listItemIcon?: React.ReactNode;
  /**
   * Props for the box component.
   */
  boxProps?: BoxProps;
  /**
   * Props for the containing box component.
   */
  containingBoxProps?: BoxProps;
  /**
   * Props for the list item button component.
   */
  listItemButtonProps?: ListItemButtonProps;
  /**
   * Props for tooltipl component
   */
  iconWithTooltipProps?: IconWithTooltipProps;
  /**
   * Props for tooltip component
   */
  tooltipProps?: TooltipProps;
  /**
   * The children to display.
   */
  children?: ReactNode;
  /**
   * The icon to display.
   */
  listItemEndIcon?: ReactNode;
  /**
   * Props for the list item end icon component.
   */
  listItemEndIconProps?: ListItemIconProps;
  /**
   * If false, the item won't be individually draggable, even if the section is draggable
   * Not used here, but usd in the DraggableSideNavListItem
   */
  draggable?: boolean;
}

const SideNavListItem = ({
  listItemTextProps,
  listItemIconProps,
  listItemIcon,
  listItemEndIcon,
  listItemEndIconProps,
  listItemButtonProps,
  tooltipProps,
  iconWithTooltipProps = {
    tooltipProps: { title: '' },
    children: <></>
  },
  containingBoxProps,
  boxProps,
  children,
  ...props // This spreads any remaining props to the ListItem
}: SideNavListItemProps) => {
  return (
    <>
      <ListItem disablePadding {...props}>
        <Tooltip {...tooltipProps} title={tooltipProps?.title || ''}>
          <Box {...containingBoxProps}>
            <ListItemButtonClone {...listItemButtonProps}>
              <Box {...boxProps}>
                {listItemIcon && (
                  <IconWithTooltip {...iconWithTooltipProps}>
                    <ListItemIcon {...listItemIconProps}>
                      {listItemIcon}
                    </ListItemIcon>
                  </IconWithTooltip>
                )}
                {listItemTextProps && <ListItemText {...listItemTextProps} />}
                {listItemEndIcon && (
                  <ListItemIcon {...listItemEndIconProps}>
                    {listItemEndIcon}
                  </ListItemIcon>
                )}
              </Box>
            </ListItemButtonClone>
          </Box>
        </Tooltip>
      </ListItem>
      {children}
    </>
  );
};

export default SideNavListItem;
