import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Avatar = (theme: Theme) => {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey[100]
        }
      }
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          '&:first-of-type': {
            fontSize: 14,
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
};

export default Avatar;
