import type { GridProps, IconButtonProps } from '@mui/material';
import { BoxProps } from '@mui/material';
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import type { AvatarAndTextProps } from '../AvatarAndText/AvatarAndText';
import type { DropdownListItem } from './DropdownList/DropdownList';
import { DropdownMenuProps } from './DropdownMenu/DropdownMenu';
import DropdownUncontrolled from './DropdownUncontrolled';
import { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';
import { DropdownUncontrolledProps } from './DropdownUncontrolled/DropdownUncontrolled';

const useDropdown = (
  controlledOpen?: boolean,
  onOpenChange?: (open: boolean, event?: React.MouseEvent<HTMLElement>) => void
) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    // Always update anchor element on click
    setAnchorEl(event.currentTarget);

    if (!isControlled) {
      setUncontrolledOpen(true);
    }

    // Notify parent of open state change with event
    onOpenChange?.(true, event);
  };

  const handleClose = () => {
    // Always clear anchor element on close
    setAnchorEl(null);

    if (!isControlled) {
      setUncontrolledOpen(false);
    }

    // Notify parent of close
    onOpenChange?.(false);
  };

  // Effect to sync anchorEl with controlled open state
  useEffect(() => {
    if (isControlled && !controlledOpen) {
      setAnchorEl(null);
    }
  }, [isControlled, controlledOpen]);

  return {
    anchorEl,
    open: isOpen,
    handleClick,
    handleClose
  };
};

export interface DropdownProps extends DropdownUncontrolledProps {
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
  /**
   * The anchor component
   */
  anchorComponent?: React.ReactNode;
  /**
   * The open state of the dropdown. If provided, the component becomes controlled.
   */
  isOpen?: boolean;
  /**
   * Callback fired when the open state is changed.
   * @param open - The new open state
   * @param event - The triggering event (only provided when opening)
   */
  onOpenChange?: (open: boolean, event?: React.MouseEvent<HTMLElement>) => void;
  /**
   * The tooltip props
   */
  tooltipProps?: TooltipProps;
}

const Dropdown = forwardRef(
  (
    {
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
      anchorComponent,
      tooltipProps,
      ...props
    }: DropdownProps,
    ref
  ) => {
    const { anchorEl, open, handleClick, handleClose } = useDropdown(
      controlledOpen,
      onOpenChange
    );
    useImperativeHandle(ref, () => ({
      handleClose
    }));

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
        anchorComponent={anchorComponent}
        ref={ref}
        tooltipProps={tooltipProps}
        {...props}
      />
    );
  }
);
Dropdown.displayName = 'Dropdown';
export default Dropdown;
