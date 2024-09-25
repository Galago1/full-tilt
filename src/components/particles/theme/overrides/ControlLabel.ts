import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const ControlLabel: any = (theme: Theme) => {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          alignItems: 'baseline',
          width: '100%',
          '& .MuiFormControlLabel-label': {
            paddingBottom: theme.spacing(0.75),
            color: theme.palette.grey[700]
          }
        },
        label: {
          ...theme.typography.body2
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1)
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled
        }
      }
    }
  };
};

export default ControlLabel;
