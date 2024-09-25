import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Stepper = (theme: Theme) => {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider
        }
      }
    }
  };
};

export default Stepper;
