import type { GridProps, MenuItemProps } from '@mui/material';
import { Grid, MenuItem } from '@mui/material';
import type { DividerProps } from 'src/components/atoms/Divider/Divider';
import Divider from 'src/components/atoms/Divider/Divider';

export interface DropdownListItem {
  menuItemProps?: MenuItemProps;
  dividerProps?: DividerProps;
}

export interface DropdownListProps {
  /**
   * The list items
   */
  dropdownListItems: DropdownListItem[];
  /**
   * The Grid item props
   */
  gridItemProps?: GridProps;
}

/**
 * Primary UI component for user interaction
 */
export const DropdownList = ({
  gridItemProps,
  dropdownListItems
}: DropdownListProps) => {
  if (!dropdownListItems.length) return <MenuItem>Empty</MenuItem>;
  return (
    <>
      {dropdownListItems.map((dropdownListItem, index) => {
        if (dropdownListItem.menuItemProps)
          return (
            <Grid item key={`menu-item-item-[${index}]`} {...gridItemProps}>
              <MenuItem {...dropdownListItem.menuItemProps} />
            </Grid>
          );
        return (
          <Grid item key={`divider-item-[${index}]`} {...gridItemProps}>
            <Divider {...dropdownListItem.dividerProps} />
          </Grid>
        );
      })}
    </>
  );
};
