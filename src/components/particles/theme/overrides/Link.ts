import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Link = (theme: Theme) => {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    }
  };
};

export default Link;
