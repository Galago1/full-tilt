import { Box, SxProps, Theme, Typography, InputLabel } from '@mui/material';
import { forwardRef } from 'react';
import LinearProgressBar, {
  LinearProgressProps
} from 'src/components/atoms/LinearProgressBar/LinearProgressBar';
import { useTheme } from '@mui/material';

export interface LinearProgressIndicatorProps {
  /**
   * The progress of the component.
   */
  value?: number;
  /**
   * Progress meter label
   */
  displayLabel?: string;
  /**
   * The display value.
   */
  displayValue?: string;
  /**
   * Position the display value and label above the indicator
   */
  displayPosition?: 'top' | 'bottom' | 'right' | '';
  /**
   * Position the display value under the indicator
   */
  displayBottom?: boolean;
  /**
   * Show value in a tooltip
   */
  withTooltip?: boolean;
  /**
   * The box sx props
   */
  boxSx?: SxProps<Theme>;
  /**
   * The linear progress bar props
   */
  linearProgressBarProps?: LinearProgressProps;
}

const Content = forwardRef(
  (
    {
      displayLabel,
      displayValue,
      value,
      boxSx,
      displayBottom = false,
      displayPosition = 'right',
      linearProgressBarProps,
      ...props
    }: LinearProgressIndicatorProps,
    ref
  ) => {
    const theme = useTheme();
    return (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: displayPosition === 'right' ? 'row' : 'column',
          alignItems: 'center',
          width: '100%',
          ...boxSx
        }}
        {...props}
      >
        {displayPosition === 'top' && (
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              alignSelf: 'flex-end',
              gap: 2
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'baseline',
                width: '100%'
              }}
            >
              <InputLabel
                sx={{
                  textAlign: 'left',
                  lineHeight: 1.25
                }}
              >
                {displayLabel}
              </InputLabel>
              <Typography
                variant="textMdSemibold"
                sx={{
                  textAlign: 'right',
                  lineHeight: 1.25,
                  fontWeight: theme.typography.fontWeightMedium
                }}
              >
                {displayValue}
              </Typography>
            </Box>
          </Box>
        )}

        <Box sx={{ width: '100%', mr: displayBottom ? 0 : 1 }}>
          <LinearProgressBar
            variant="determinate"
            value={value}
            sx={{
              width: '100%',
              my: 0.5,
              height: 8,
              borderRadius: 6,
              '&': {
                borderRadius: 6
              }
            }}
            {...linearProgressBarProps}
          />
        </Box>
        {displayPosition === 'right' && (
          <Box
            sx={{
              minWidth: 0,
              alignSelf: 'flex-end'
            }}
          >
            <Typography
              variant="textMdSemibold"
              sx={{
                textAlign: 'right',
                lineHeight: 1.5,
                fontWeight: theme.typography.fontWeightMedium
              }}
            >
              {displayValue ?? value}
            </Typography>
          </Box>
        )}
        {displayPosition === 'bottom' && (
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              alignSelf: 'flex-end'
            }}
          >
            <Typography
              paragraph
              variant="textMdSemibold"
              sx={{
                mb: 0,
                textAlign: 'right',
                fontWeight: theme.typography.fontWeightMedium
              }}
            >
              {displayValue ?? value}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
);
Content.displayName = 'Content';

/**
 * Primary UI component for user interaction
 */
const LinearProgressIndicator = ({
  value,
  ...props
}: LinearProgressIndicatorProps) => {
  const clampedValue = (value || 0) > 100 ? 100 : value;

  return <Content {...props} value={clampedValue} />;
};

export default LinearProgressIndicator;
