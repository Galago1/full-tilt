import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Toolbar = (theme: Theme) => {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 56,
          '&.large-toolbar': {
            minHeight: 64,
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0)
          },
          [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
            minHeight: 64,
            '&.large-toolbar': {
              minHeight: 64,
              paddingLeft: theme.spacing(0),
              paddingRight: theme.spacing(0)
            }
          },
          [theme.breakpoints.up('sm')]: {
            minHeight: 72,
            '&.large-toolbar': {
              minHeight: 64,
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1)
            }
          },
          [theme.breakpoints.up('md')]: {
            minHeight: 72,
            '&.large-toolbar': {
              minHeight: 80,
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1)
            }
          }
        }
      }
    }
  };
};

export default Toolbar;
