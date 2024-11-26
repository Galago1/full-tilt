import {
  Box,
  BoxProps,
  SxProps,
  Theme,
  Typography,
  TypographyProps
} from '@mui/material';
import CircularProgress, {
  CircularProgressProps
} from 'src/components/atoms/CircularProgress/CircularProgress';

export enum CircularProgressIndicatorSize {
  XSMALL = 48,
  SMALL = 64,
  MEDIUM = 160,
  LARGE = 200,
  XLARGE = 216,
  DOSXLARGE = 280
}
const CircularProgressIndicatorFontSize = {
  [CircularProgressIndicatorSize.XSMALL]: 'textSmRegular',
  [CircularProgressIndicatorSize.SMALL]: 'textSmRegular',
  [CircularProgressIndicatorSize.MEDIUM]: 'displayXsSemibold',
  [CircularProgressIndicatorSize.LARGE]: 'displaySmSemibold',
  [CircularProgressIndicatorSize.XLARGE]: 'displayMdSemibold',
  [CircularProgressIndicatorSize.DOSXLARGE]: 'displayLgSemibold'
} as const;
const CircularProgressIndicatorLabelFontSize = {
  [CircularProgressIndicatorSize.XSMALL]: 'textXsRegular',
  [CircularProgressIndicatorSize.SMALL]: 'textXsRegular',
  [CircularProgressIndicatorSize.MEDIUM]: 'textXsRegular',
  [CircularProgressIndicatorSize.LARGE]: 'textXsRegular',
  [CircularProgressIndicatorSize.XLARGE]: 'textSmRegular',
  [CircularProgressIndicatorSize.DOSXLARGE]: 'textSmRegular'
} as const;

export interface CircularProgressIndicatorProps
  extends Omit<CircularProgressProps, 'sx'> {
  /**
   * The progress of the component.
   */
  value?: number;
  /**
   * The label for the value e
   */
  label?: string;
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default
   * CircularProgressIndicatorSize.SMALL
   */
  size?: CircularProgressIndicatorSize;
  /**
   * Hide the display value
   */
  hideValue?: boolean;
  /**
   * The optional box props
   */
  boxProps?: BoxProps;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * The box sx props
   */
  labelBoxSx?: SxProps<Theme>;
  /**
   * The inner box sx props
   */
  innerLabelBoxSx?: SxProps<Theme>;
  /**
   * The inner label typography props
   */
  innerLabelTypographyProps?: TypographyProps;
  /**
   * The label typography props
   */
  labelTypographyProps?: TypographyProps;
  /**
   * The variant to use.
   */
  variant?: 'determinate' | 'indeterminate' | undefined;
  /**
   * The sx props, this shouldn't be needed but it is...
   */
  sx?: SxProps<Theme>;
  /**
   * The slots props
   */
  slots?: {
    backgroundProgressProps?: CircularProgressProps;
    progressProps?: CircularProgressProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CircularProgressIndicator = ({
  size = CircularProgressIndicatorSize.SMALL,
  value,
  hideValue = false,
  label,
  innerLabelBoxSx,
  labelBoxSx,
  boxProps,
  innerLabelTypographyProps,
  labelTypographyProps,
  variant = 'determinate',
  slots,
  ...props
}: CircularProgressIndicatorProps) => {
  const { backgroundProgressProps, progressProps } = slots || {};
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex'
      }}
      {...boxProps}
    >
      <CircularProgress
        variant={variant}
        sx={{
          color: (theme: Theme) => theme.palette.grey[200]
        }}
        size={size}
        value={100}
        thickness={4}
        {...backgroundProgressProps}
      />
      <CircularProgress
        variant={variant}
        {...props}
        sx={{
          // sx={{ scale: "-1 1" }}
          scale: '-1 1',
          color: (theme: Theme) => theme.palette.primary.main,
          position: 'absolute',
          ...props?.sx
        }}
        size={size}
        value={value}
        thickness={4}
        {...progressProps}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ...innerLabelBoxSx
        }}
      >
        {label &&
          ![
            CircularProgressIndicatorSize.XSMALL,
            CircularProgressIndicatorSize.SMALL
          ].includes(size) && (
            <Typography
              paragraph
              sx={{ mb: 0 }}
              variant={CircularProgressIndicatorLabelFontSize[size]}
              {...innerLabelTypographyProps}
            >
              {label}
            </Typography>
          )}
        {!hideValue && (
          <Typography
            paragraph
            sx={{ mb: 0 }}
            variant={CircularProgressIndicatorFontSize[size]}
          >
            {`${value}%`}
          </Typography>
        )}
      </Box>
      {label &&
        [
          CircularProgressIndicatorSize.XSMALL,
          CircularProgressIndicatorSize.SMALL
        ].includes(size) && (
          <Box
            sx={{
              top: 75,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              ...labelBoxSx
            }}
          >
            {label && (
              <Typography
                noWrap
                paragraph
                sx={{ mb: 0 }}
                variant={CircularProgressIndicatorLabelFontSize[size]}
                {...labelTypographyProps}
              >
                {label}
              </Typography>
            )}
          </Box>
        )}
    </Box>
  );
};
export default CircularProgressIndicator;
