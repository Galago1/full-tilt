import { FormControlLabel } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import HorizontalInput from '../HorizontalInput';

// TODO: fix this type error
export type PatternInputBaseProps = any; ///NumberFormatProps & TextInputBaseProps;

/**
 * Primary UI component for user interaction
 */
const PatternInputBase = ({
  orientation,
  label,
  labelSx,
  ...props
}: PatternInputBaseProps) => {
  const { form, field, meta, children, ...rest } = props;
  const { horizontalInput, labelProps } = props.slots || {};
  // const [a, b, helpers] = useField(field.name);
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <PatternFormat
          field={field}
          meta={meta}
          form={form}
          {...rest}
          disabled={props.disabled || form.isSubmitting}
          customInput={TextInputBase}
        />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={
        <PatternFormat
          field={field}
          meta={meta}
          form={form}
          {...rest}
          disabled={props.disabled || form.isSubmitting}
          customInput={TextInputBase}
        />
      }
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default PatternInputBase;
