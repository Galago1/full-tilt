import { FormControlLabel, SxProps, Theme } from '@mui/material';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';
import type { TimePickerInputBaseProps } from 'src/components/atoms/InputBase/TimePickerInputBase/TimePickerInputBase';
import TimePickerInputBase from 'src/components/atoms/InputBase/TimePickerInputBase/TimePickerInputBase';
import HorizontalInput from '../HorizontalInput';
import { Orientation } from 'src/types/other';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface TimePickerInputProps extends TimePickerInputBaseProps {
  label?: string;
  labelSx?: SxProps;
  form?: FormikProps<any>;
  field?: FieldAttributes<any>;
  meta?: FieldMetaProps<any>;
  required?: boolean;
  sx?: SxProps<Theme>;
  onChange?: (value: any) => void;
  orient?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const TimePickerInput = ({
  orient,
  label,
  labelSx,
  ...props
}: TimePickerInputProps) => {
  const { horizontalInput } = props.slots || {};
  if (orient === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orient}
        {...horizontalInput}
      >
        <TimePickerInputBase {...props} />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={<TimePickerInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default TimePickerInput;
