import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Snackbar = (theme: Theme) => {
  return {
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root-MuiSnackbarContent-root': {
            borderRadius: 0
          }
        }
      }
    }
  };
};

export default Snackbar;
