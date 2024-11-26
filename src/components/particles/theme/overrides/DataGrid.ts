import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const DataGrid = (theme: Theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {}
      }
    }
  };
};

export default DataGrid;
