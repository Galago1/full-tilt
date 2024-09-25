import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Paper = (theme: Theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },

      variants: [
        {
          props: { variant: 'outlined' },
          style: { borderColor: theme.palette.grey[500_12] }
        }
      ],

      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
            borderRadius: 0
          }
        }
      }
    }
  };
};

export default Paper;
