import type { Theme } from '@mui/material/styles';
import type { ColorSchema } from '../palette';
import { elementBoxShadow } from '../shadows';
//
import { SquareIcon, CheckSquareIcon, MinusSquareIcon } from './CustomIcons';

const checkboxPallet = (color: ColorSchema, theme: Theme) => {
  return {
    props: { color },
    style: {
      '&.Mui-checked .MuiSvgIcon-root': {
        backgroundColor: theme.palette[color][50]
        // color: theme.palette[color][600]
      },
      '&:hover .MuiSvgIcon-root': {
        backgroundColor: theme.palette[color][100],
        color: theme.palette[color][600]
      },
      '&.Mui-focused .MuiSvgIcon-root': {
        boxShadow: elementBoxShadow(theme.palette[color][100]),
        borderRadius: 0
      }
    }
  };
};

// ----------------------------------------------------------------------
const Checkbox = (theme: Theme) => {
  return {
    MuiCheckbox: {
      variants: [
        { ...checkboxPallet('primary', theme) },
        { ...checkboxPallet('secondary', theme) },
        { ...checkboxPallet('success', theme) },
        { ...checkboxPallet('error', theme) },
        { ...checkboxPallet('warning', theme) },
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
        icon: <SquareIcon viewBox={'2 2 20 20'} />,
        checkedIcon: <CheckSquareIcon viewBox={'2 2 20 20'} />,
        indeterminateIcon: <MinusSquareIcon viewBox={'2 2 20 20'} />,
        disableRipple: true
      }
    }
  };
};

export default Checkbox;
