import { styled, SxProps, Theme } from '@mui/material';
import { ChangeEvent, forwardRef } from 'react';

const StyledInput = styled('input')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer'
});

export interface FileInputProps {
  sx?: SxProps<Theme>;
  /**
   * hide the input
   * @default
   * false
   */
  hidden?: boolean;
  /**
   * Allow multiple file upload
   * @default
   * false
   */
  multiple?: boolean;
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Input = forwardRef(
  (
    {
      accept,
      multiple = false,
      hidden = true,
      onChange,
      ...props
    }: FileInputProps,
    ref: any
  ) => {
    return (
      <StyledInput
        ref={ref}
        multiple={multiple}
        hidden={hidden}
        accept={accept}
        type="file"
        onChange={onChange}
        {...props}
      />
    );
  }
);
Input.displayName = 'FileInput';
const FileInput = Input;
export default FileInput;
