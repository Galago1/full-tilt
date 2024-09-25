import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Popover = (theme: Theme) => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows['2xl'],
          borderRadius: theme.borderRadius.md
        }
      }
    }
  };
};

export default Popover;
