import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Fab = (theme: Theme) => {
  return {
    MuiFab: {
      defaultProps: {
        color: 'primary'
      },

      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.xs,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.grey[400]
          }
        },
        primary: {
          boxShadow: theme.customShadows.primary,

          backgroundColor: theme.palette.primary[900],
          '&:hover': {
            backgroundColor: theme.palette.primary[700]
          }
        },
        secondary: {
          boxShadow: theme.customShadows.secondary,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark
          }
        },
        extended: {
          '& svg': {
            marginRight: theme.spacing(1)
          }
        }
      }
    }
  };
};

export default Fab;
