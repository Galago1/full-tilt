import type { FieldAttributes } from 'formik';
import type { NumberInputBaseProps } from '../NumberInputBase/NumberInputBase';
import PatternInputBase from '../PatternInputBase';

export interface PhoneInputProps extends NumberInputBaseProps {
  fieldProps?: FieldAttributes<any>;
}

/**
 * Primary UI component for user interaction
 */
const PhoneInput = ({
  orientation,
  label,
  fieldProps,
  ...props
}: PhoneInputProps) => {
  const { form, field, meta, children, ...rest } = props;

  return (
    <PatternInputBase
      orientation={orientation}
      placeholder="Mobile number"
      field={field}
      form={form}
      label={label}
      {...rest}
      mask={'_'}
      format={'(###) ###-####'}
      displayType={'input'}
      allowEmptyFormatting={false}
      type={'tel'}
    />
  );
};
export default PhoneInput;
