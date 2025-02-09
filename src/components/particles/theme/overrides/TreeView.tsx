import type { Theme } from '@mui/material/styles';
import { MinusSquareIcon } from '../icons/General/minus-square';
import { PlusSquareIcon } from '../icons/General/plus-square';
import { XSquareIcon } from '../icons/General/x-square';
//

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
