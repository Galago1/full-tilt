import type { GridProps, IconButtonProps } from '@mui/material';
import { BoxProps } from '@mui/material';
import { useState } from 'react';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import type { AvatarAndTextProps } from '../AvatarAndText/AvatarAndText';
import type { DropdownListItem } from './DropdownList/DropdownList';
import { DropdownMenuProps } from './DropdownMenu/DropdownMenu';
import DropdownUncontrolled from './DropdownUncontrolled';

const useDropdown = (
  controlledOpen?: boolean,
  onOpenChange?: (open: boolean) => void
) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openInternal, setOpenInternal] = useState(false);

  // Define 'isOpen' to determine the state of the dropdown
  const isOpen = controlledOpen !== undefined ? controlledOpen : openInternal;

  // Function to manage the opening and closing of the dropdown
  const setDropdownOpen = (
    open: boolean,
    event?: React.MouseEvent<HTMLElement>
  ) => {
    if (controlledOpen === undefined) {
      setOpenInternal(open); // Manage internal state if not controlled externally
      if (!open) {
        setAnchorEl(null); // Reset anchor element when closing
      } else if (event) {
        setAnchorEl(event.currentTarget); // Set anchor element when opening
      }
    }
    onOpenChange?.(open);
  };

  // Event handler for when the dropdown trigger is clicked
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setDropdownOpen(true, event);
  };

  // Event handler for closing the dropdown
  const handleClose = () => {
    setDropdownOpen(false);
  };

  return {
    anchorEl,
    open: isOpen,
    handleClick,
    handleClose
  };
};

export interface DropdownProps extends BoxProps {
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
}
const Dropdown = ({
  label,
  buttonProps,
  iconButtonProps,
  avatarAndTextProps,
  dropdownListItems,
  dropdownMenuProps,
  gridItemProps,
  boxProps,
  gridContainerProps,
  isOpen: controlledOpen,
  onOpenChange,
  ...props
}: DropdownProps) => {
  const { anchorEl, open, handleClick, handleClose } = useDropdown(
    controlledOpen,
    onOpenChange
  );

  return (
    <DropdownUncontrolled
      label={label}
      buttonProps={buttonProps}
      iconButtonProps={iconButtonProps}
      avatarAndTextProps={avatarAndTextProps}
      dropdownListItems={dropdownListItems}
      dropdownMenuProps={dropdownMenuProps}
      gridItemProps={gridItemProps}
      gridContainerProps={gridContainerProps}
      boxProps={boxProps}
      handleClick={handleClick}
      anchorEl={anchorEl}
      handleClose={handleClose}
      open={open}
      {...props}
    />
  );
};
export default Dropdown;
