import type { GridProps, IconButtonProps } from '@mui/material';
import type { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import { Box, BoxProps } from '@mui/material';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu/DropdownMenu';
import { DropdownAnchor } from '../DropdownAnchor/DropdownAnchor';
import { DropdownListItem } from '../DropdownList/DropdownList';

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
  dropdownMenuProps: Partial<DropdownMenuProps>;
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
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * The anchor element
   */
  anchorEl: HTMLElement | null;
  /**
   * The open status
   * @returns
   */
  handleClose: () => void;
  open: boolean;
  /**
   * The anchor component
   */
  anchorComponent?: React.ReactNode;
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
  ...props
}: DropdownUncontrolledProps) => {
  return (
    <Box {...boxProps} {...props}>
      <DropdownAnchor
        label={label}
        onClick={handleClick}
        buttonProps={buttonProps}
        iconButtonProps={iconButtonProps}
        isOpen={open}
        anchorComponent={anchorComponent}
      />
      {anchorEl && (
        <DropdownMenu
          anchorEl={anchorEl}
          id="account-menu"
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          avatarAndTextProps={avatarAndTextProps}
          {...dropdownMenuProps}
          dropdownListItems={dropdownListItems}
          gridItemProps={gridItemProps}
          gridContainerProps={gridContainerProps}
          open={open}
        />
      )}
    </Box>
  );
};
export default DropdownUncontrolled;
