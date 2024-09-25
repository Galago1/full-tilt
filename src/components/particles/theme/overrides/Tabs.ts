import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Tabs: any = (theme: Theme) => {
  return {
    MuiTabs: {
      variants: [
        {
          props: { textColor: 'primary' },
          style: {
            '& .MuiTab-root.Mui-selected': {
              color: theme.palette.primary[700]
            },
            '&.show-background .MuiTab-root.Mui-selected': {
              backgroundColor: theme.palette.primary[50]
            }
          }
        },
        {
          props: { textColor: 'secondary' },
          style: {
            '& .MuiTab-root.Mui-selected': {
              color: theme.palette.secondary[700]
            },
            '&.show-background .MuiTab-root.Mui-selected': {
              backgroundColor: theme.palette.grey[50]
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          '&.hide-indicator	.MuiTabs-indicator': {
            display: 'none'
          },
          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.primary[700]
          },
          '&.show-bottom-border': {
            borderBottom: `1px solid ${theme.palette.grey[200]}`
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1.5),
          borderRadius: theme.spacing(0),
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      defaultProps: {
        disableRipple: true
      }
    }
  };
};

export default Tabs;
