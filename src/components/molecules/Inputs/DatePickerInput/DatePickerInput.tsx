import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';
import type { DatePickerInputBaseProps } from 'src/components/atoms/InputBase/DatePickerInputBase/DatePickerInputBase';
import DatePickerInputBase from 'src/components/atoms/InputBase/DatePickerInputBase/DatePickerInputBase';
import HorizontalInput from '../HorizontalInput';
import { Orientation } from 'src/types/other';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface DatePickerInputProps extends DatePickerInputBaseProps {
  label?: string;
  labelSx?: SxProps;
  form?: FormikProps<any>;
  field?: FieldAttributes<any>;
  meta?: FieldMetaProps<any>;
  required?: boolean;
  sx?: SxProps<Theme>;
  onChange?: (value: any) => void;
  orient?: Orientation;
  'data-testid'?: string;
  slots?: {
    horizontalInput?: HorizontalInputProps;
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const DatePickerInput = ({
  orient,
  label,
  labelSx,
  'data-testid': dataTestId,
  ...props
}: DatePickerInputProps) => {
  const { horizontalInput, labelProps } = props.slots || {};
  if (orient === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orient}
        data-testid={dataTestId}
        {...horizontalInput}
      >
        <DatePickerInputBase {...props} />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={<DatePickerInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      data-testid={dataTestId}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default DatePickerInput;
