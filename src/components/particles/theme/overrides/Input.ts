import { Theme } from '@mui/material/styles';
import { ColorSchema } from '../palette';
import { fullBoxShadow } from '../shadows';
declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}
const inputPallet = (color: ColorSchema, theme: Theme) => {
  return {
    props: { color, variant: 'outlined' },
    style: {
      '& .Mui-focused fieldset': {
        boxShadow: fullBoxShadow(theme.palette[color][100])
      }
    }
  };
};

// ----------------------------------------------------------------------
const Input = (theme: Theme) => {
  return {
    // lineHeight: 1.1875
    // MuiOutlinedInput-input
    MuiInputBase: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            '&.mega-input': {
              padding: 0,
              width: theme.spacing(8),
              height: theme.spacing(8),
              fontWeight: '500',
              fontSize: theme.spacing(6),
              lineHeight: theme.spacing(7.5),
              '& input': {
                textAlign: 'center',
                padding: 0,
                letterSpacing: '-0.02em'
              }
            }
          }
        },
        {
          props: { size: 'medium' },
          style: {
            '&.mega-input': {
              padding: 0,
              width: theme.spacing(10),
              height: theme.spacing(10),
              fontWeight: '500',
              fontSize: theme.spacing(6),
              lineHeight: theme.spacing(7.5),
              '& input': {
                textAlign: 'center',
                padding: 0,
                letterSpacing: '-0.02em'
              }
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            '&.mega-input': {
              padding: 0,
              width: theme.spacing(12),
              height: theme.spacing(12),
              fontWeight: '500',
              fontSize: theme.spacing(7.5),
              lineHeight: theme.spacing(9),
              '& input': {
                textAlign: 'center',
                padding: 0,
                letterSpacing: '-0.02em'
              }
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled }
          },
          '&.MuiInputBase-adornedStart': {
            paddingLeft: 0,
            '& .MuiInputAdornment-root': {
              marginRight: theme.spacing(1),
              marginLeft: theme.spacing(1.75)
            }
          },
          '& .MuiSelect-icon': {
            right: theme.spacing(1.75)
          },
          fontWeight: '500 !important'
        },
        input: {
          color: theme.palette.grey[900],
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.grey[500]
          },
          '& .MuiInputBase-input': {
            fontWeight: '500 !important'
          }
          // fontWeight: 500
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        variants: [
          { ...inputPallet('primary', theme) },
          { ...inputPallet('secondary', theme) },
          { ...inputPallet('error', theme) },
          { ...inputPallet('warning', theme) },
          { ...inputPallet('success', theme) }
        ],
        root: {
          // '> label:not(.Mui-focused)': {
          //   transform: 'translate(14px, 8px) scale(1)'
          // },
          // '> label.Mui-focused, > label.MuiFormLabel-filled': {
          //   transform: 'translate(14px, -9px) scale(0.75)'
          // },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginTop: theme.spacing(0.75)
          },
          '& .MuiInputBase-input': {
            fontWeight: '500 !important'
          }
        },
        label: {
          color: theme.palette.grey[700],
          fontWeight: '500 !important'
        }
      }
    },
    MuiOutlinedInput: {
      variants: [
        {
          props: {},
          style: {
            '& input': {
              padding: theme.spacing(1, 1.5)
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          fontWeight: 500,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[300]
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground
            }
          },
          '& .MuiInputBase-input': {
            fontWeight: '500 !important'
          }

          // fontWeight: 500
        },
        input: {
          fontWeight: '500 !important'
        }
      }
    }
  };
};

export default Input;
