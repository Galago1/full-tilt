import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ColorSchema } from 'src/components/particles/theme/palette';

export interface LinearProgressProps extends MuiLinearProgressProps {
  /**
   * The variant to use. Use indeterminate
   * or query when there is no progress value.
   */
  variant?: 'determinate' | 'indeterminate' | 'query' | 'buffer';
  /**
   * The value of the progress indicator for the determinate and
   * buffer variants. Value between 0 and 100.
   */
  value?: number;
  /**
   * The value for the buffer variant. Value between 0 and 100.
   */
  valueBuffer?: number;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?: ColorSchema | 'inherit';
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
}

/**
 * Primary UI component for user interaction
 */

const LinearProgressBar = ({
  variant,
  value,
  valueBuffer,
  color,
  sx,
  ...props
}: LinearProgressProps) => {
  return (
    <MuiLinearProgress
      variant={variant}
      value={value}
      valueBuffer={valueBuffer}
      color={color}
      sx={sx}
      {...props}
    />
  );
};
export default LinearProgressBar;
