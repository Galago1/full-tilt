import { Stack, SxProps } from '@mui/material';
import {
  DateRangePicker,
  DateRangePickerProps,
  LocalizationProvider
} from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';

export interface DateRangePickerInputBaseProps
  extends DateRangePickerProps<any> {
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
const DateRangePickerInputBase = ({
  ...props
}: DateRangePickerInputBaseProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={1}>
        <DateRangePicker
          {...props}
          onChange={(value) => {
            props.field.onChange(value);
            // props?.form?.setFieldValue?.(props?.field?.name, value as any);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateRangePickerInputBase;
