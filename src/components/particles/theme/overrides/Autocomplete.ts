import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Autocomplete = (theme: Theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows['2xl']
        },
        listbox: {
          padding: theme.spacing(0, 1),
          '& .MuiAutocomplete-option': {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.borderRadius.md
          }
        }
      }
    }
  };
};

export default Autocomplete;
