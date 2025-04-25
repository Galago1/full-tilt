import { Grid, GridProps, Menu } from '@mui/material';
import type { MenuProps } from '@mui/material/Menu';
import type { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import type { DropdownListItem } from '../DropdownList/DropdownList';
import { DropdownList } from '../DropdownList/DropdownList';

export interface DropdownMenuProps extends MenuProps {
  /**
   * The AvatarAndText props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * The DropdownList props
   */
  dropdownListItems: DropdownListItem[];
  /**
   * The Grid props
   */
  gridContainerProps?: GridProps;
  /**
   * The Grid item props
   */
  gridItemProps?: GridProps;
}

/**
 * Primary UI component for user interaction
 */
export const DropdownMenu = ({
  avatarAndTextProps,
  dropdownListItems,
  gridContainerProps = { flexDirection: 'column' },
  gridItemProps,
  TransitionProps,
  ...props
}: DropdownMenuProps) => {
  return (
    <Menu
      TransitionProps={{
        ...TransitionProps,
        timeout: 300
      }}
      {...props}
    >
      {avatarAndTextProps && <AvatarAndText {...avatarAndTextProps} />}
      <Grid container {...gridContainerProps}>
        <DropdownList
          dropdownListItems={dropdownListItems}
          gridItemProps={gridItemProps}
        />
      </Grid>
    </Menu>
  );
};
