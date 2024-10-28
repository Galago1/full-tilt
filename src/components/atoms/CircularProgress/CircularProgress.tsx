import type { SxProps, Theme } from '@mui/material';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps
} from '@mui/material';
import { forwardRef } from 'react';
import type { ColorSchema } from 'src/components/particles/theme/palette';

export interface CircularProgressProps extends MuiCircularProgressProps {
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   */
  value?: number;
  /**
   * The thickness of the circle.
   */
  thickness?: number;
  /**
   * The size of the component. If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size?: number | string;
  /**
   * If true, the shrink animation is disabled. This only works if variant is indeterminate.
   */
  disableShrink?: boolean;
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

const CircularProgress = forwardRef(
  ({ ...props }: CircularProgressProps, ref) => {
    return <MuiCircularProgress {...props} ref={ref} />;
  }
);
export default CircularProgress;
