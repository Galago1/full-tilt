import type { Theme } from '@mui/material/styles';
import type { ColorSchema } from '../palette';
import { elementBoxShadow } from '../shadows';

const switchPallet = (color: ColorSchema, theme: Theme) => {
  return {
    props: { color },
    style: {
      '& .PrivateSwitchBase-input:focus': {
        boxShadow: elementBoxShadow(theme.palette[color][100])
      }
    }
  };
};
// ----------------------------------------------------------------------
const Switch = (theme: Theme) => {
  return {
    MuiSwitch: {
      variants: [
        { ...switchPallet('primary', theme) },
        { ...switchPallet('secondary', theme) },
        { ...switchPallet('success', theme) },
        { ...switchPallet('error', theme) },
        { ...switchPallet('warning', theme) },
        {
          props: { size: 'small' },
          style: {
            '&': {
              width: 36,
              height: 20,
              padding: 0
            },
            '& .MuiButtonBase-root': {
              padding: theme.spacing(0.25)
            },
            '& .MuiSwitch-thumb': {
              width: 16,
              height: 16
            },
            '& .MuiSwitch-track': {
              borderRadius: 16 / 1.25
            }
          }
        },
        {
          props: { size: 'medium' },
          style: {
            '&': {
              width: 44,
              height: 24,
              padding: 0
            },
            '& .MuiButtonBase-root': {
              padding: theme.spacing(0.25)
            },
            '& .MuiSwitch-thumb': {
              width: 20,
              height: 20
            },
            '& .MuiSwitch-track': {
              borderRadius: 20 / 1.25
            }
          }
        }
      ],
      defaultProps: {
        disableRipple: true
      }
    }
  };
};

export default Switch;
