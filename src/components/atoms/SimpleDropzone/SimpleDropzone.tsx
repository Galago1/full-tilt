import { Grid, SxProps, Theme } from '@mui/material';
import { ReactNode, forwardRef, ForwardedRef } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export interface SimpleDropzoneProps {
  /**
   * Function to handle uploaded array of files
   */
  onFilesUploaded: (files: File[]) => void;
  
  /**
   * Disable upload functionality
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional props for the dropzone
   */
  dropzoneProps?: DropzoneOptions;
  
  /**
   * Custom styles for the container
   */
  sx?: SxProps<Theme>;
  
  /**
   * Children to render inside the dropzone
   */
  children?: ReactNode;
  
  /**
   * Maximum file size in bytes
   * @default 6MB
   */
  maxSize?: number;
}

/**
 * SimpleDropzone component provides basic file upload functionality using react-dropzone
 */
const SimpleDropzone = forwardRef((
  {
    onFilesUploaded,
    disabled = false,
    dropzoneProps,
    sx,
    children,
    maxSize = 6 * 1024 * 1024,
    ...props
  }: SimpleDropzoneProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onFilesUploaded,
    noClick: disabled,
    noDrag: disabled,
    maxSize,
    ...dropzoneProps
  });

  return (
    <Grid 
      container
      sx={sx}
      {...getRootProps({ ref })}
      {...props}
    >
      <input {...getInputProps()} type="file" style={{ display: 'none' }} />
      {children}
    </Grid>
  );
});

SimpleDropzone.displayName = 'SimpleDropzone';

export default SimpleDropzone;
