import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Card = (theme: Theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          boxShadow: theme.customShadows.sm,
          borderRadius: theme.spacing(1.5),
          zIndex: 0 // Fix Safari overflow: hidden with border radius
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'displayXsRegular' },
        subheaderTypographyProps: {
          variant: 'textSmRegular',
          marginTop: theme.spacing(0.5)
        }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0)
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            // Override the mui default
            paddingBottom: theme.spacing(2)
          }
        }
      }
    }
  };
};

export default Card;
