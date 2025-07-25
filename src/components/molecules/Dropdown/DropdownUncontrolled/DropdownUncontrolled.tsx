import type { GridProps, IconButtonProps } from '@mui/material';
import type { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import { Box, BoxProps, Grid } from '@mui/material';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu/DropdownMenu';
import {
  DropdownAnchor,
  DropdownAnchorProps
} from '../DropdownAnchor/DropdownAnchor';
import { DropdownListItem } from '../DropdownList/DropdownList';
import Tooltip, { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';

export interface DropdownUncontrolledProps extends BoxProps {
  /**
   * The name, icon, or avatar
   */
  label: JSX.Element | string;
  /**
   * The button props
   */
  buttonProps?: ButtonProps;
  /**
   * The IconButton props
   */
  iconButtonProps?: IconButtonProps;
  /**
   * The AvatarAndText props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * The DropdownList props
   */
  dropdownListItems: DropdownListItem[];
  /**
   * The Box props
   */
  boxProps?: BoxProps;
  /**
   * The DropdownMenu props
   */
  dropdownMenuProps?: Partial<DropdownMenuProps>;
  /**
   * The Grid menu item props
   */
  gridItemProps?: GridProps;
  /**
   * The Grid container props
   */
  gridContainerProps?: GridProps;
  // ... other props ...
  /**
   * The open state of the dropdown
   */
  isOpen?: boolean;
  /**
   * Callback fired when the open state is changed
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The on click action
   */
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * The anchor element
   */
  anchorEl?: HTMLElement | null;
  /**
   * The open status
   * @returns
   */
  handleClose?: () => void;
  open?: boolean;
  /**
   * The anchor component
   */
  anchorComponent?: React.ReactNode;
  /**
   * The tooltip props
   */
  tooltipProps?: TooltipProps;
  /**
   * The slots to render
   */
  slots?: {
    dropdownAnchorProps?: DropdownAnchorProps;
  };
}

const DropdownUncontrolled = ({
  label,
  buttonProps,
  iconButtonProps,
  avatarAndTextProps,
  dropdownListItems,
  dropdownMenuProps,
  gridItemProps,
  gridContainerProps,
  boxProps,
  handleClick,
  anchorEl,
  handleClose,
  open,
  anchorComponent,
  tooltipProps,
  slots,
  ...props
}: DropdownUncontrolledProps) => {
  const { dropdownAnchorProps } = slots || {};
  const { title, ...restTooltipProps } = tooltipProps || {};
  return (
    <Box {...boxProps} {...props}>
      <Tooltip {...restTooltipProps} title={open ? '' : title}>
        <Grid>
          <DropdownAnchor
            {...dropdownAnchorProps}
            label={label}
            onClick={handleClick}
            buttonProps={buttonProps}
            iconButtonProps={iconButtonProps}
            isOpen={open}
            anchorComponent={anchorComponent}
          />
        </Grid>
      </Tooltip>
      <DropdownMenu
        anchorEl={anchorEl}
        id="account-menu"
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={
          dropdownMenuProps?.transformOrigin || {
            horizontal: 'right',
            vertical: 'top'
          }
        }
        anchorOrigin={
          dropdownMenuProps?.anchorOrigin || {
            horizontal: 'right',
            vertical: 'bottom'
          }
        }
        avatarAndTextProps={avatarAndTextProps}
        dropdownListItems={dropdownListItems}
        gridItemProps={gridItemProps}
        gridContainerProps={gridContainerProps}
        open={open!}
        TransitionProps={{
          mountOnEnter: true,
          unmountOnExit: true,
          onExited: () => {
            // Additional cleanup if needed after animation
          }
        }}
        {...dropdownMenuProps}
      />
    </Box>
  );
};
export default DropdownUncontrolled;
