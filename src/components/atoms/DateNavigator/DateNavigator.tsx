import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';
import { buttonListProps } from './helpers';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material';

const defaultDateLabelFn = (date: string) => date;

// export interface DateNavigatorInterval {
//   daily: boolean;
//   weekly: boolean;
//   monthly: boolean;
//   quarterly: boolean;
//   yearly: boolean;
// }

export enum DateNavigatorInterval {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly'
}

export interface DateNavigatorProps extends Partial<FieldProps> {
  interval: DateNavigatorInterval;
  onPreviousChange: (
    interval: DateNavigatorInterval,
    form: FormikProps<any> | undefined,
    field: FieldInputProps<any> | undefined
  ) => void;
  onNextChange: (
    interval: DateNavigatorInterval,
    form: FormikProps<any> | undefined,
    field: FieldInputProps<any> | undefined
  ) => void;
  dateLabelFn?: (date: string) => string;
  sx?: SxProps<Theme>;
}

const DateNavigator = ({
  interval,
  onPreviousChange,
  onNextChange,
  dateLabelFn = defaultDateLabelFn,
  sx,
  ...props
}: DateNavigatorProps) => {
  const { field, form } = props;
  const date = dateLabelFn(field?.value || '');
  return (
    <ButtonGroup
      {...buttonListProps(
        date,
        interval,
        onPreviousChange,
        onNextChange,
        form,
        field,
        sx
      )}
      {...props}
    />
  );
};

export default DateNavigator;
