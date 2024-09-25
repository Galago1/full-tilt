import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Menu = (theme: Theme) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 0.75),
          '&.Mui-selected': {
            backgroundColor: theme.palette.grey[50],
            '&:hover': {
              backgroundColor: theme.palette.grey[50]
            }
          },
          '& .MuiListItemIcon-root': {
            minWidth: 'auto'
          }
        }
      }
    }
  };
};

export default Menu;
