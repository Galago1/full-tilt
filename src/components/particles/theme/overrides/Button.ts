import { Theme } from '@mui/material';
import { fullBoxShadow } from '../shadows';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xs: true;
    xl: true;
    xxl: true;
  }
}

const colorContained = (theme: Theme) => {
  return {
    props: {
      color: 'secondary',
      variant: 'contained'
    },
    style: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette['grey'][700],
      border: `unset`,
      '&.Mui-disabled': {
        backgroundColor: theme.palette['grey'][25]
      },
      '&:hover': {
        backgroundColor: theme.palette['grey'][50]
      },
      '&:focus': {
        boxShadow: fullBoxShadow(theme.palette['grey'][100])
      }
    }
  };
};

const colorOutlined = (theme: Theme) => {
  return {
    props: {
      color: 'secondary',
      variant: 'outlined'
    },
    style: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette['grey'][700],
      border: `1px solid ${theme.palette['grey'][300]}`,
      '&.Mui-disabled': {
        backgroundColor: theme.palette['grey'][25]
      },
      '&:hover': {
        backgroundColor: theme.palette['grey'][50]
      },
      '&:focus': {
        boxShadow: fullBoxShadow(theme.palette['grey'][100])
      }
    }
  };
};

const colorText = (theme: Theme) => {
  return {
    props: { color: 'secondary', variant: 'text' },
    style: {
      color: theme.palette['grey'][600],
      '&.Mui-disabled': {
        color: theme.palette['grey'][300]
      },
      '&:hover': {
        backgroundColor: 'unset',
        color: theme.palette['grey'][700]
      }
    }
  };
};

// ----------------------------------------------------------------------
// // Define a separate type for the Button function
// type ButtonFunction = (theme: Theme) => Components<typeof Button>['MuiButton'];

// TODO: Fix the type of the Button function
const Button: any = (theme: Theme) => {
  return {
    MuiButton: {
      variants: [
        {
          props: { size: 'xs' },
          style: {
            lineHeight: 1,
            padding: theme.spacing(1 / 8, 1)
          }
        },
        {
          props: { size: 'small' },
          style: {
            padding: theme.spacing(1, 1.75)
          }
        },
        {
          props: { size: 'medium' },
          style: {
            padding: theme.spacing(1.25, 2)
          }
        },
        {
          props: { size: 'large' },
          style: {
            padding: theme.spacing(1.25, 2.25)
          }
        },
        {
          props: { size: 'xl' },
          style: {
            padding: theme.spacing(1.5, 2.5)
          }
        },
        {
          props: { size: 'xxl' },
          style: {
            padding: theme.spacing(2, 3.5)
          }
        },
        // colorContained(theme, 'primary'),
        // colorOutlined(theme, 'primary'),
        // colorText(theme, 'primary'),
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary[600],
            '&.Mui-disabled': {
              backgroundColor: theme.palette.primary[200]
            },
            '&:focus': {
              boxShadow: fullBoxShadow(theme.palette.primary[100])
            },
            '&:hover': {
              backgroundColor: theme.palette.primary[700]
            }
          }
        },
        colorContained(theme),
        colorOutlined(theme),
        colorText(theme),
        {
          props: { color: 'success' },
          style: {
            backgroundColor: theme.palette.success[600],
            '&.Mui-disabled': {
              backgroundColor: theme.palette.success[200]
            },
            '&:focus': {
              boxShadow: fullBoxShadow(theme.palette.success[100])
            }
          }
        },
        {
          props: { color: 'error' },
          style: {
            backgroundColor: theme.palette.error[600],
            '&.Mui-disabled': {
              backgroundColor: theme.palette.error[200]
            },
            '&:focus': {
              boxShadow: fullBoxShadow(theme.palette.error[100])
            }
          }
        },
        {
          props: { color: 'warning' },
          style: {
            backgroundColor: theme.palette.warning[600],
            '&.Mui-disabled': {
              backgroundColor: theme.palette.warning[200]
            },
            '&:focus': {
              boxShadow: fullBoxShadow(theme.palette.warning[100])
            }
          }
        },
        {
          props: { color: 'inherit' },
          style: {
            backgroundColor: theme.palette.grey[50],
            '&.Mui-disabled': {
              backgroundColor: theme.palette.grey[25]
            },
            '&:focus': {
              boxShadow: fullBoxShadow(theme.palette.grey[25])
            }
          }
        },
        {
          props: { variant: 'text' },
          style: {
            padding: 0
          }
        }
      ],
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          '& .MuiButton-startIcon': {
            marginLeft: 0
          },
          '& .MuiButton-endIcon': {
            marginRight: 0
          },
          '&.hide-boxshadow:hover': {
            boxShadow: 'none'
          },
          '&': {
            minWidth: 'auto'
          }
        },
        // Contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.xs,
          '&:hover': {
            backgroundColor: theme.palette.grey[100]
          }
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning
        },
        containedError: {
          boxShadow: theme.customShadows.error
        },
        // Outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.grey[100]
          }
        },
        // Text
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
};

export default Button;
