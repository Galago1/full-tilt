import type { SxProps } from '@mui/material';
import {
  DateField,
  DateFieldProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';

export interface DateInputBaseProps extends DateFieldProps<any> {
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
const DateInputBase = ({ ...props }: DateInputBaseProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateField {...props} value={props.field.value} />
    </LocalizationProvider>
  );
};

export default DateInputBase;
