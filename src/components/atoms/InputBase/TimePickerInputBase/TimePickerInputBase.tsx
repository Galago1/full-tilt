import type { SxProps } from '@mui/material';
import {
  TimePicker,
  TimePickerProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';

export interface TimePickerInputBaseProps extends TimePickerProps<any> {
  'data-testid'?: string;
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
const TimePickerInputBase = ({ ...props }: TimePickerInputBaseProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker {...props} value={props?.field?.value || null} />
    </LocalizationProvider>
  );
};

export default TimePickerInputBase;
