import { useRef, useState } from 'react';
import Dropdown, {
  DropdownProps
} from 'src/components/molecules/Dropdown/Dropdown';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import { DropdownListItem } from '../Dropdown/DropdownList/DropdownList';

export interface DropdownSideNavListItemProps extends SideNavListItemProps {
  /**
   * The test id for the list item
   */
  'data-testid'?: string;

  /**
   * The items to display in the dropdown menu
   */
  dropdownListItems: DropdownListItem[];

  /**
   * Custom props for the dropdown
   */
  dropdownProps?: Partial<Omit<DropdownProps, 'dropdownListItems' | 'label'>>;
}

/**
 * SideNavListItem that shows a dropdown menu when the entire item is clicked
 * This component is designed to be the last item in a SideNav group
 * and is not draggable
 */
const DropdownSideNavListItem = ({
  'data-testid': testId,
  dropdownListItems,
  dropdownProps,
  ...listItemProps
}: DropdownSideNavListItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const listItemRef = useRef<HTMLDivElement>(null);

  // Handle the entire list item click to show dropdown
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setAnchorEl(listItemRef.current);
  };

  return (
    <div ref={listItemRef} data-testid={testId}>
      <SideNavListItem
        {...listItemProps}
        // Add the plus icon as an end icon to indicate dropdown functionality
        // listItemEndIcon={<PlusIcon fontSize="small" />}
        // Make the entire list item clickable
        // Ensure consistent styling with rest of SideNav
        listItemButtonProps={{
          ...listItemProps.listItemButtonProps,
          onClick: handleClick
        }}
      />
      <Dropdown
        label=""
        dropdownListItems={dropdownListItems}
        isOpen={isDropdownOpen}
        onOpenChange={(open) => setIsDropdownOpen(open)}
        // Configure the dropdown to anchor to the list item and position correctly
        {...dropdownProps}
        dropdownMenuProps={{
          anchorEl: anchorEl,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          ...dropdownProps?.dropdownMenuProps
        }}
        // Hide the button since we're using the list item as the trigger
        buttonProps={{
          sx: { display: 'none' },
          ...dropdownProps?.buttonProps
        }}
      />
    </div>
  );
};

export default DropdownSideNavListItem;
