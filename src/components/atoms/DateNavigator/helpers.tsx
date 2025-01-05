import { SxProps, Theme } from '@mui/material';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { ButtonGroupProps } from '../../molecules/ButtonGroup/ButtonGroup';
import { DateNavigatorInterval } from './DateNavigator';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';

export const buttonListProps = (
  date: string,
  interval: DateNavigatorInterval,
  onPreviousChange: (
    interval: DateNavigatorInterval,
    form: FormikProps<any> | undefined,
    field: FieldInputProps<any> | undefined
  ) => void,
  onNextChange: (
    interval: DateNavigatorInterval,
    form: FormikProps<any> | undefined,
    field: FieldInputProps<any> | undefined
  ) => void,
  form: FormikProps<any> | undefined,
  field: FieldInputProps<any> | undefined,
  sx?: SxProps<Theme>
): ButtonGroupProps => {
  return {
    sx: { '&': { display: 'flex' }, ...sx },
    buttons: [
      {
        label: <ChevronLeftIcon sx={{ width: 20, height: 20 }} />,
        sx: {
          '&': {
            px: 1,
            py: 1.125
          }
        },
        onClick: () => onPreviousChange(interval, form, field)
      },
      {
        label: date,
        fullWidth: true,
        sx: {
          '&': {
            px: 1,
            py: 1.125,
            fontWeight: 500
          },
          flex: 1,
          whiteSpace: 'nowrap'
        },
        disabled: true
      },
      {
        label: <ChevronRightIcon sx={{ width: 20, height: 20 }} />,
        sx: {
          '&': {
            px: 1,
            py: 1.125
          }
        },
        onClick: () => onNextChange(interval, form, field)
      }
    ]
  };
};
