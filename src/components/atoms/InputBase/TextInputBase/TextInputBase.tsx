import { Grid, GridProps } from '@mui/material';
import type { TextFieldProps } from 'formik-mui';
import { TextField } from 'formik-mui';
import Dropdown from 'src/components/molecules/Dropdown/Dropdown';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
import textareaHelperText from 'src/utils/textareaHelperText';
import Button from '../../Button/Button';
import { ButtonProps } from '../../Button/Button';

export interface TextInputBaseProps extends TextFieldProps {
  /**
   * Regex for allowed character input
   */
  pattern?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional paste handler
   */
  onPaste?: (event: React.ClipboardEvent) => void;
  /**
   * Optional start icon
   */
  startAdornment?: React.ReactNode;
  /**
   * Optional end icon
   */
  endAdornment?: React.ReactNode;
  /**
   * Optional start button
   */
  startButtonProps?: ButtonProps;
  /**
   * Optional end button
   */
  endButtonProps?: ButtonProps;

  // TODO: remove these and fix the old stories still dependent on them
  name?: string;
  error?: boolean;
  value?: any;
  boxProps?: GridProps;
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
  /**
   * Optional start dropdown
   */
  startDropdownProps?: DropdownProps;
  /**
   * Optional end dropdown
   */
  endDropdownProps?: DropdownProps;
  /**
   * Optional start component
   */
  startComponent?: JSX.Element;
  /**
   * Optional end component
   */
  endComponent?: JSX.Element;
}

/**
 * Primary UI component for user interaction
 */
const TextInputBase = ({
  startButtonProps,
  endButtonProps,
  startDropdownProps,
  endDropdownProps,
  boxProps,
  minLength,
  maxLength,
  prependText,
  startComponent,
  endComponent,
  useHelper = false,
  // onFocus,
  // onBlur,
  // onMouseEnter,
  // onMouseLeave,
  sx,
  ...props
}: TextInputBaseProps) => {
  return (
    <Grid sx={{ width: '100%' }} {...boxProps}>
      {startButtonProps && <Button {...startButtonProps} />}
      {startDropdownProps && <Dropdown {...startDropdownProps} />}
      {startComponent}
      <TextField
        {...textareaHelperText(
          props.form,
          props.field,
          useHelper,
          minLength,
          maxLength,
          prependText
        )}
        {...props}
        sx={sx}
      />
      {endComponent}
      {endDropdownProps && <Dropdown {...endDropdownProps} />}
      {endButtonProps && <Button {...endButtonProps} />}
    </Grid>
  );
};

export default TextInputBase;
