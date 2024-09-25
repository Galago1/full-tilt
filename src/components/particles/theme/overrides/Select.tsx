import type { Theme } from '@mui/material/styles';
//
import { ChevronDownIcon } from './CustomIcons';

// ----------------------------------------------------------------------
const Select = (theme: Theme) => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevronDownIcon
        // IconComponent: () => (
        //   <ChevronDownIcon
        //     sx={{
        //       right: 12,
        //       fontSize: 16,
        //       position: 'absolute',
        //       pointerEvents: 'none'
        //     }}
        //   />
        // )
      },
      styleOverrides: {
        select: {
          minWidth: 120
        }
      }
    }
  };
};

export default Select;
