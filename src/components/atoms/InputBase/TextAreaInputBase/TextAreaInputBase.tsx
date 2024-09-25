import type { TextFieldProps } from 'formik-mui';
import { TextField } from 'formik-mui';
import textareaHelperText from 'src/utils/textareaHelperText';

export interface TextAreaInputBaseProps
  extends Omit<TextFieldProps, 'variant'> {
  /**
   * Number of rows
   */
  rows?: number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: number;
  /**
   * Type of input
   */
  type?: 'text';
  /**
   * Show the count
   */
  useHelper?: boolean;
  /**
   * helperText Min length text
   */
  minLength?: number;
  /**
   * helperText Max length text
   */
  maxLength?: number;
  /**
   * helperText prepended text
   */
  prependText?: string;
}

/**
 * Primary UI component for user interaction
 */
const TextAreaInputBase = ({
  maxRows,
  minRows,
  rows,
  minLength,
  maxLength,
  prependText,
  useHelper = false,
  type = 'text',
  ...props
}: TextAreaInputBaseProps) => {
  return (
    <TextField
      multiline
      // value={props.field.value}
      type={type}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      inputProps={{ maxLength }}
      {...textareaHelperText(
        props.form,
        props.field,
        useHelper,
        minLength,
        maxLength,
        prependText
      )}
      {...props}
    />
  );
};
export default TextAreaInputBase;
