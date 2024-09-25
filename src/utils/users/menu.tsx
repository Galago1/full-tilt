import { ListItemIcon, Typography } from '@mui/material';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import {
  LoginIcon,
  SignUpIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

interface LoggedOutListItemsProps {
  login: () => void;
  signup: () => void;
}
export const LoggedOutListItems = ({
  login,
  signup
}: LoggedOutListItemsProps): DropdownListItem[] => {
  const loginItem = {
    menuItemProps: {
      sx: { padding: (theme: any) => theme.spacing(1.375, 2) },
      onClick: login,
      children: (
        <>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <Typography variant="textSmMedium">Log in</Typography>
        </>
      )
    }
  };

  const signupItem = {
    menuItemProps: {
      sx: { padding: (theme: any) => theme.spacing(1.375, 2) },
      onClick: signup,
      children: (
        <>
          <ListItemIcon>
            <SignUpIcon />
          </ListItemIcon>
          <Typography variant="textSmMedium">Sign up</Typography>
        </>
      )
    }
  };

  return [loginItem, signupItem];
};
