import type { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
//
import type { ColorSchema } from '../palette';

// ----------------------------------------------------------------------
const ToggleButton = (theme: Theme) => {
  const style = (color: ColorSchema) => ({
    props: { color },
    style: {
      '&:hover': {
        borderColor: alpha(theme.palette[color].main, 0.48),
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        )
      },
      '&.Mui-selected': {
        borderColor: alpha(theme.palette[color].main, 0.48)
      }
    }
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected
            }
          }
        },
        style('primary'),
        style('secondary'),
        style('success'),
        style('warning'),
        style('error')
      ]
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius.md,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${theme.palette.grey[500_12]}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            borderColor: 'transparent !important',
            borderRadius: `${theme.borderRadius.md}px !important`
          }
        }
      }
    }
  };
};

export default ToggleButton;
