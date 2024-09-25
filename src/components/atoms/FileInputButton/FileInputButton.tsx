import { IconButton as MuiIconButton, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { ColorSchema } from 'src/components/particles/theme/palette';
import Button from '../Button/Button';
import FileInput from '../FileInput/FileInput';

export interface FileInputButtonProps {
  children?: ReactNode;
  /**
   * Type of upload button, required.
   * button must include children as a string
   * buttonIcon must include children as a React Node
   */
  inputButtonType?: 'button' | 'buttonIcon';
  /**
   * The variant to use for button type
   * @default for inputButtonType button
   * 'text'
   */
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * The color of the component. It supports those
   * theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?: ColorSchema | 'inherit';
  /**
   * The start icon for button type.
   */
  startIcon?: ReactNode;
  /**
   * The end icon for button type.
   */
  endIcon?: ReactNode;
  /**
   * Css style overrides
   */
  styles?: SxProps<Theme>;
  /**
   * The disabled state
   */
  disabled?: boolean;
  /**
   * If true, no elevation is used
   */
  disableElevation?: boolean;
  /**
   * If true, the keyboard focus ripple is disabled.
   */
  disableFocusRipple?: boolean;
  /**
   * If true, the ripple effect is disabled.
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with
   */
  disableRipple?: boolean;
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The size of the component. small is equivalent to the dense button styling.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * type of file accepted by input by default
   * will be set to undefined
   * undined reomves limitation on file types
   * string to specify file types e.g. ".pdf" or a combination or file types
   */
  accept?: 'video/*' | 'image/*' | 'audio/*' | string | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Handle uploaded files
   */
  onChangeUploadHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right side of
   * the icon with content above or below, without ruining the border
   * size and shape). Used for icon button.
   */
  edge?: 'end' | 'start';
  /**
   * Button label
   */
  label?: string;
  /**
   * Accept multiple files
   */
  multiple?: boolean;
  /**
   * Styles
   */
  sx?: SxProps<Theme>;
}

const FileInputButton = ({
  children,
  inputButtonType = 'button',
  multiple = true,
  accept = '',
  onChangeUploadHandler,
  ...props
}: FileInputButtonProps) => {
  return inputButtonType === 'button' ? (
    <Button component={'label' as any} {...props}>
      {children}
      <FileInput
        multiple={multiple}
        accept={accept}
        onChange={onChangeUploadHandler}
      />
    </Button>
  ) : (
    <MuiIconButton component={'label'} {...props}>
      <FileInput
        multiple={multiple}
        accept={accept}
        onChange={onChangeUploadHandler}
      />
      {children}
    </MuiIconButton>
  );
};
export default FileInputButton;
