import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const DataGrid = (theme: Theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        // root: {
        //   borderRadius: 0,
        //   border: `1px solid transparent`,
        //   '& .MuiTablePagination-root': {
        //     borderTop: 0
        //   }
        // },
        // cell: {
        //   borderBottom: theme.border.divider
        // },
        // columnSeparator: {
        //   color: theme.palette.divider
        // },
        // toolbarContainer: {
        //   padding: theme.spacing(2),
        //   backgroundColor: theme.palette.background.neutral,
        //   '& .MuiButton-root': {
        //     marginRight: theme.spacing(1.5),
        //     color: theme.palette.text.primary,
        //     '&:hover': {
        //       backgroundColor: theme.palette.action.hover
        //     }
        //   }
        // },
        // paper: {
        //   boxShadow: theme.customShadows['2xl']
        // },
        // menu: {
        //   '& .MuiPaper-root': {
        //     boxShadow: theme.customShadows['2xl']
        //   },
        //   '& .MuiMenuItem-root': {
        //     ...theme.typography.body2,
        //     '& .MuiListItemIcon-root': {
        //       minWidth: 'auto'
        //     }
        //   }
        // },
        // panelFooter: {
        //   padding: theme.spacing(2),
        //   justifyContent: 'flex-end',
        //   borderTop: theme.border.divider,
        //   '& .MuiButton-root': {
        //     '&:first-of-type': {
        //       marginRight: theme.spacing(1.5),
        //       color: theme.palette.text.primary,
        //       '&:hover': {
        //         backgroundColor: theme.palette.action.hover
        //       }
        //     },
        //     '&:last-of-type': {
        //       color: theme.palette.common.white,
        //       backgroundColor: theme.palette.primary.main,
        //       '&:hover': {
        //         backgroundColor: theme.palette.primary.dark
        //       }
        //     }
        //   }
        // },
        // filterForm: {
        //   padding: theme.spacing(1.5, 0),
        //   '& .MuiFormControl-root': {
        //     margin: theme.spacing(0, 0.5)
        //   },
        //   '& .MuiInput-root': {
        //     marginTop: theme.spacing(3),
        //     '&::before, &::after': {
        //       display: 'none'
        //     },
        //     '& .MuiNativeSelect-select, .MuiInput-input': {
        //       ...theme.typography.body2,
        //       padding: theme.spacing(0.75, 1),
        //       borderRadius: theme.borderRadius.md,
        //       backgroundColor: theme.palette.background.neutral
        //     },
        //     '& .MuiSvgIcon-root': {
        //       right: 4
        //     }
        //   }
        // }
      }
    }
  };
};

export default DataGrid;
