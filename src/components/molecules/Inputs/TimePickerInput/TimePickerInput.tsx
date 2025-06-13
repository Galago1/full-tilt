import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import { FieldAttributes, FieldMetaProps, FormikProps } from 'formik';
import type { TimePickerInputBaseProps } from 'src/components/atoms/InputBase/TimePickerInputBase/TimePickerInputBase';
import TimePickerInputBase from 'src/components/atoms/InputBase/TimePickerInputBase/TimePickerInputBase';
import { Orientation } from 'src/types/other';
import HorizontalInput from '../HorizontalInput';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface TimePickerInputProps extends TimePickerInputBaseProps {
  'data-testid'?: string;
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
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const TimePickerInput = ({
  field: outerField,
  form: outerForm,
  meta: outerMeta,
  orient,
  label,
  labelSx,
  'data-testid': dataTestId,
  ...props
}: TimePickerInputProps) => {
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
        <TimePickerInputBase {...props} />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={
        <TimePickerInputBase
          field={outerField}
          form={outerForm}
          meta={outerMeta}
          {...props}
        />
      }
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
export default TimePickerInput;
