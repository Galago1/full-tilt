import { FormControlLabel, SxProps } from '@mui/material';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';
import type { DateRangePickerInputBaseProps } from 'src/components/atoms/InputBase/DateRangePickerInputBase/DateRangePickerInputBase';
import DateRangePickerInputBase from 'src/components/atoms/InputBase/DateRangePickerInputBase/DateRangePickerInputBase';
import HorizontalInput from '../HorizontalInput';
import { Orientation } from 'src/types/other';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface DateRangePickerInputProps
  extends DateRangePickerInputBaseProps {
  label?: string;
  labelSx?: SxProps;
  form?: FormikProps<any>;
  field?: FieldAttributes<any>;
  meta?: FieldMetaProps<any>;
  required?: boolean;
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const DateRangePickerInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: DateRangePickerInputProps) => {
  const { horizontalInput } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <DateRangePickerInputBase {...props} />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={<DateRangePickerInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default DateRangePickerInput;
