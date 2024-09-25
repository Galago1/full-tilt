import type { Theme } from '@mui/material/styles';
//
import type { ColorSchema } from '../palette';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  AlertTriangleIcon
} from './CustomIcons';

// ----------------------------------------------------------------------
const Alert = (theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color: ColorSchema) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  const filledStyle = (color: ColorSchema) => ({
    color: theme.palette[color].contrastText
  });

  const outlinedStyle = (color: ColorSchema) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    border: `1px solid ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          success: <CheckCircleIcon />,
          warning: <AlertTriangleIcon />,
          error: <AlertCircleIcon />
        }
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5)
          }
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1)
          }
        },

        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error')
      }
    }
  };
};

export default Alert;
