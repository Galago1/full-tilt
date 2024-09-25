import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const List = (theme: Theme) => {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          // fontSize: '1rem',
          marginRight: theme.spacing(1),
          '& .MuiSvgIcon-root': {
            fontSize: '1rem'
          }
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          // fontSize: '1rem',
          marginRight: theme.spacing(1)
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0
        }
      }
    }
  };
};

export default List;
