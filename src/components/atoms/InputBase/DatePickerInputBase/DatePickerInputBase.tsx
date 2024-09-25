import type { SxProps } from '@mui/material';
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';

export interface DatePickerInputBaseProps extends DatePickerProps<any> {
  /**
   * Input label styles
   */
  labelSx?: SxProps;

  // TODO: remove these and fix the old stories still dependent on them
  /**
   * Field name
   */
  name?: string;
  /**
   * Has error
   */
  error?: boolean;
  /**
   * Field value
   */
  value?: any;
  form?: FormikProps<any>;
  field?: FieldAttributes<any>;
  meta?: FieldMetaProps<any>;
}

/**
 * Primary UI component for user interaction
 */
const DatePickerInputBase = ({ ...props }: DatePickerInputBaseProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...props} value={props.field.value} />
    </LocalizationProvider>
  );
};

export default DatePickerInputBase;
