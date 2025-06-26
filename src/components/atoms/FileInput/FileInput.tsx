import { SxProps, Theme } from '@mui/material';
import { ChangeEvent, forwardRef } from 'react';
import { Accept } from 'react-dropzone';
import SimpleDropzone from '../SimpleDropzone';

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
   * undefined removes limitation on file types
   * string to specify file types e.g. ".pdf" or a combination or file types
   */
  accept?: Accept | string | undefined;
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
const Input = forwardRef<any, any>(
  (
    {
      accept,
      multiple = false,
      hidden = true,
      onChange,
      sx,
      ...props
    }: FileInputProps,
    ref: any
  ) => {
    // Convert onChange handler to onFilesUploaded format
    const handleFilesUploaded = (files: File[]) => {
      if (onChange && files.length > 0) {
        // Create a synthetic event that mimics the structure expected by the onChange handler
        const syntheticEvent = {
          target: {
            files
          }
        } as unknown as ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    return (
      <SimpleDropzone
        ref={ref}
        onFilesUploaded={handleFilesUploaded}
        disabled={hidden}
        dropzoneProps={{
          multiple,
          accept:
            typeof accept === 'string'
              ? { 'application/octet-stream': [accept] }
              : accept,
          noClick: hidden,
          noDrag: hidden
        }}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
          ...sx
        }}
        {...props}
      />
    );
  }
);
Input.displayName = 'FileInput';
const FileInput = Input;
export default FileInput;
