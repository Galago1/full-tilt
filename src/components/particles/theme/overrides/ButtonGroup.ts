import { Theme } from '@mui/material';

// ----------------------------------------------------------------------
const ButtonGroup = (theme: Theme) => {
  return {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          // border: theme.border.divider,
          // '& .MuiButtonGroup-grouped:not(:last-of-type)': {
          //   borderColor: theme.palette.divider
          // },
          // '& .MuiButtonGroup-grouped:not(:last-of-type).Mui-disabled': {
          //   borderRight: theme.border.divider,
          //   paddingLeft: theme.spacing(6 / 8),
          //   paddingRight: theme.spacing(9 / 8)
          // }
          border: 'none'
        }
      }
    }
  };
};

export default ButtonGroup;
