import type { Theme } from '@mui/material/styles';
import type { ColorSchema } from '../palette';
import { elementBoxShadow } from '../shadows';

const radioPallet = (color: ColorSchema, theme: Theme) => {
  return {
    props: { color },
    style: {
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '&:hover .MuiSvgIcon-root:first-of-type': {
        backgroundColor: theme.palette[color][100],
        borderRadius: '50%',
        // borderRadius: 0,
        color: theme.palette[color][600]
      },
      '&.Mui-focused .MuiSvgIcon-root': {
        boxShadow: elementBoxShadow(theme.palette[color][100])
        // borderRadius: 0
      }
    }
  };
};

// ----------------------------------------------------------------------
const Radio = (theme: Theme) => {
  return {
    MuiRadio: {
      variants: [
        { ...radioPallet('primary', theme) },
        { ...radioPallet('secondary', theme) },
        { ...radioPallet('success', theme) },
        { ...radioPallet('error', theme) },
        { ...radioPallet('warning', theme) },
        {
          props: { size: 'medium' },
          style: {
            '& .MuiSvgIcon-root': {
              width: 20,
              height: 20
            }
          }
        },
        {
          props: { size: 'small' },
          style: {
            '& .MuiSvgIcon-root': {
              width: 16,
              height: 16
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

export default Radio;
