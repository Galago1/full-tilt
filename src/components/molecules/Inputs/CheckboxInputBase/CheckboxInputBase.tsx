import { FormControlLabel, FormControlLabelProps } from '@mui/material';
import Checkbox, {
  CheckboxProps
} from 'src/components/atoms/Checkbox/Checkbox';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';
// import type { CheckboxProps } from 'formik-mui';

export interface CheckboxInputBaseProps extends CheckboxProps {
  /**
   * The label props
   */
  labelProps: Omit<FormControlLabelProps, 'control'>;
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CheckboxInputBase = ({
  orientation,
  labelProps,
  ...props
}: CheckboxInputBaseProps) => {
  const { horizontalInput } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={labelProps.label}
        labelSx={labelProps.sx}
        orientation={orientation}
        {...horizontalInput}
      >
        <Checkbox {...props} />
      </HorizontalInput>
    );
  return <FormControlLabel {...labelProps} control={<Checkbox {...props} />} />;
};
export default CheckboxInputBase;
