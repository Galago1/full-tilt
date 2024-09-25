import { FormControlLabel } from '@mui/material';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';
import type { DateInputBaseProps } from 'src/components/atoms/InputBase/DateInputBase/DateInputBase';
import DateInputBase from 'src/components/atoms/InputBase/DateInputBase/DateInputBase';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';

export interface DateInputProps extends DateInputBaseProps {
  form?: FormikProps<any>;
  field?: FieldAttributes<any>;
  meta?: FieldMetaProps<any>;
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const DateInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: DateInputProps) => {
  const { horizontalInput } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <DateInputBase {...props} />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={<DateInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default DateInput;
