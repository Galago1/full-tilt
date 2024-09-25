import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Breadcrumbs = (theme: Theme) => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          '& .MuiSvgIcon-root': {
            color: theme.palette.grey[300],
            width: theme.spacing(2),
            height: theme.spacing(2)
          }
        }
      }
    }
  };
};

export default Breadcrumbs;
