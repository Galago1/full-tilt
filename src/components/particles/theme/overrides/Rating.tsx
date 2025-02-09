import type { Theme } from '@mui/material/styles';
import { Star01Icon } from '../icons/Shapes/star-01';
//

// ----------------------------------------------------------------------

const ICON_SMALL = { width: 20, height: 20 };
const ICON_LARGE = { width: 28, height: 28 };
const Rating = (theme: Theme) => {
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: <Star01Icon />
        // icon: <StarIcon />
      },

      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48
          }
        },
        iconEmpty: { color: theme.palette.grey[500_48] },
        sizeSmall: { '& svg': { ...ICON_SMALL } },
        sizeLarge: { '& svg': { ...ICON_LARGE } }
      }
    }
  };
};

export default Rating;
