import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const AppBar = (theme: Theme) => {
  return {
    MuiAppBar: {
      variants: [
        {
          props: { color: 'secondary' },
          style: { backgroundColor: theme.palette.grey[900] }
        }
      ],
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  };
};

export default AppBar;
