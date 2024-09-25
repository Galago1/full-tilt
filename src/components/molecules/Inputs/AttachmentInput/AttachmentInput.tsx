import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
  useTheme
} from '@mui/material';
import AttachmentContainer, {
  AttachmentContainerProps
} from 'src/components/organisms/AttachmentContainer/AttachmentContainer';

export interface AttachmentInputProps extends AttachmentContainerProps {
  /**
   * The label props
   */
  labelProps: Omit<FormControlLabelProps, 'control'>;
  /**
   * The label required indicator
   */
  required?: boolean;
  /**
   * The label sx props
   */
  labelSx: SxProps<Theme>;
  /**
   * error message
   */
  error?: string;
  /**
   * Error message typography
   */
  errorTypography?: TypographyProps;
}

/**
 * Primary UI component for user interaction
 */
const AttachmentInput = ({
  labelProps,
  labelSx,
  required,
  error,
  errorTypography = { variant: 'textXsRegular' },
  ...props
}: AttachmentInputProps) => {
  const theme = useTheme();
  return (
    <>
      <FormControlLabel
        control={<AttachmentContainer {...props} />}
        labelPlacement={'top'}
        sx={{
          '& .MuiFormControlLabel-label::after': {
            content: required ? '"*"' : '""'
          },
          ...labelSx
        }}
        {...labelProps}
      />

      {error && (
        <Typography
          sx={{ color: theme.palette.error.main }}
          {...errorTypography}
        >
          {error}
        </Typography>
      )}
    </>
  );
};
export default AttachmentInput;
