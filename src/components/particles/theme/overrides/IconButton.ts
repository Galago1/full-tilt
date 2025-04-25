import { Theme } from '@mui/material/styles';

// TODO: Fix the type of the Button function
const IconButton: any = (theme: Theme) => {
  return {
    MuiIconButton: {
      // defaultProps: {
      //   disableRipple: true
      // },
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius.md,
          padding: theme.spacing(4 / 8),
          '&:hover': { color: theme.palette.text.primary }
        }
      }
    }
  };
};

export default IconButton;
