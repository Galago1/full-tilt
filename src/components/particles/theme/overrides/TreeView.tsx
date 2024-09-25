import type { Theme } from '@mui/material/styles';
//
import { PlusSquareIcon, MinusSquareIcon, XSquareIcon } from './CustomIcons';

// ----------------------------------------------------------------------
const TreeView: any = (theme: Theme) => {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: <PlusSquareIcon sx={{ width: 20, height: 20 }} />,
        defaultExpandIcon: <MinusSquareIcon sx={{ width: 20, height: 20 }} />,
        defaultEndIcon: (
          <XSquareIcon
            sx={{ color: 'text.secondary', width: 20, height: 20 }}
          />
        )
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: 'auto' }
      }
    }
  };
};

export default TreeView;
