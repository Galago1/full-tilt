import { FormControl, FormControlLabel } from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import HorizontalInput from '../HorizontalInput';

export type NumberInputBaseProps = any; // TODO: fix this type

const NumberInputBase = ({
  orientation,
  label,
  labelSx,
  ...props
}: NumberInputBaseProps) => {
  // Use Formik's useField hook
  const { meta: ogMeta } = props;
  const [field, meta, helpers] = useField(props.name || props.field.name);

  const { horizontalInput, labelProps } = props.slots || {};

  const [focused, setFocused] = useState(false);

  const handleChange = (value: any) => {
    helpers.setValue(value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: any) => {
    setFocused(false);
    field.onBlur(e);
    helpers.setTouched(true);
  };

  // Extract error information
  const hasError = Boolean(meta.touched && meta.error);

  const numericFormatComponent = (
    <NumericFormat
      field={field}
      meta={meta}
      form={helpers}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={props.disabled || props.form?.isSubmitting}
      onValueChange={(values) => handleChange(values.value)}
      customInput={TextInputBase}
      error={hasError}
      {...props}
    />
  );
  console.log('methasErrorhasErrora', hasError, ogMeta);
  const renderWithError = (component: React.ReactNode) => (
    <FormControl error={hasError} fullWidth>
      {component}
    </FormControl>
  );

  if (orientation === 'horizontal') {
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        {renderWithError(numericFormatComponent)}
      </HorizontalInput>
    );
  }

  return renderWithError(
    <FormControlLabel
      control={numericFormatComponent}
      className={focused ? 'focused' : ''}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};

export default NumberInputBase;
