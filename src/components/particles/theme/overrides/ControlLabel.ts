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
          },
          fontWeight: '500 !important',
          '&': {
            fontWeight: '500 !important'
          }
        },
        label: {
          ...theme.typography.body2,
          fontWeight: '500 !important'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
          fontWeight: '500 !important'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
          fontWeight: '500 !important'
        }
      }
    }
  };
};

export default ControlLabel;
