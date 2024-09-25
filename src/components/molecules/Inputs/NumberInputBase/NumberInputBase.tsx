import { FormControlLabel } from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import HorizontalInput from '../HorizontalInput';

// TODO: fix this type error
export type NumberInputBaseProps = any; ///NumberFormatProps & TextInputBaseProps;

/**
 * Primary UI component for user interaction
 */
const NumberInputBase = ({
  orientation,
  label,
  labelSx,
  ...props
}: NumberInputBaseProps) => {
  const { form, field, meta, children, ...rest } = props;
  const { horizontalInput } = props.slots || {};

  const [focused, setFocused] = useState(false);
  const [a, b, helpers] = useField(field.name);

  const handleChange = (value: any) => {
    helpers.setValue(value);
  };
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <NumericFormat
          field={field}
          meta={meta}
          form={form}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          disabled={props.disabled || form.isSubmitting}
          onValueChange={(values) => handleChange(values.value)}
          customInput={TextInputBase}
        />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={
        <NumericFormat
          field={field}
          meta={meta}
          form={form}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          disabled={props.disabled || form.isSubmitting}
          onValueChange={(values) => handleChange(values.value)}
          customInput={TextInputBase}
        />
      }
      className={focused ? 'focused' : ''}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default NumberInputBase;
