import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
const Slider = (theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiSlider: {
      defaultProps: {
        size: 'small'
      },

      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.palette.action.disabled
          }
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled
        },
        valueLabel: {
          borderRadius: 0,
          backgroundColor: theme.palette.grey[isLight ? 800 : 700]
        }
      }
    }
  };
};

export default Slider;
