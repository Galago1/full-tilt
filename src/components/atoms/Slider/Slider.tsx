import type { SxProps, Theme } from '@mui/material';
import { Slider as MuiSlider } from '@mui/material';
import type { ReactNode } from 'react';

export interface SliderProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?: 'primary' | 'secondary';
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: Array<number> | number;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the active thumb doesn't swap when moving pointer over a
   * thumb while dragging another thumb.
   */
  disableSwap?: boolean;
  /**
   * Indicates whether the theme context has rtl direction. It is set automatically.
   */
  isRtl?: boolean;
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If true the marks are spaced according the value of the step prop.
   * If an array, it should contain objects with value and an optional label keys.
   */
  marks?: boolean | Array<{ label?: string; value: number }>;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max?: number;
  /**
   * The minimum allowed value of the slider. Should not
   * be equal to max.
   */
  min?: number;
  /**
   * Name attribute of the hidden input element.
   */
  name?: string;
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange?: (
    e: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => void;
  /**
   * Callback function that is fired when the mouseup is triggered.
   */
  onChangeCommitted?: (
    e: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => void;
  /**
   * The component orientation.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * A transformation function, to change the scale of the slider.
   */
  scale?: ((value: number) => number) | undefined;
  /**
   * The size of the slider.
   */
  size?: 'small' | 'medium';
  /**
   * The granularity with which the slider can step through values.
   * (A "discrete" slider.) The min prop serves as the origin for the
   * valid values. We recommend (max - min) to be evenly divisible by the
   * step. When step is null, the thumb can only be slid onto marks provided
   * with the marks prop.
   */
  step?: number | null;
  /**
   * Tab index attribute of the hidden input element.
   */
  tabIndex?: number;
  /**
   * The track presentation:
   * normal the track will render a bar representing the slider value.
   * inverted the track will render a bar representing the remaining slider value.
   * false the track will render without a bar.
   */
  track?: 'inverted' | 'normal' | false;
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value?: Array<number> | number;
  /**
   * Controls when the value label is displayed:
   * auto the value label will display when the thumb is hovered or focused.
   * on will display persistently.
   * off will never display.
   */
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  /**
   * The format function the value label's value.
   * When a function is provided, it should have the following signature:
   * {number} value The value label's value to format
   * {number} index The value label's index to format
   */
  valueLabelFormat?:
    | string
    | ((value: number, index: number) => ReactNode)
    | undefined;
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * The label of the slider.
   */
  label?: string;
  /**
   * The id of the element containing a label for the slider.
   */
  labelledby?: string;
  /**
   * A string value that provides a user-friendly name for the
   * current value of the slider.
   */
  valuetext?: string;
  /**
   * Accepts a function which returns a string value that provides
   * a user-friendly name for the thumb labels of the slider. This is
   * important for screen reader users.
   */
  getLabel?: (index: number) => string;
  /**
   * Accepts a function which returns a string value that provides a
   * user-friendly name for the current value of the slider. This is
   * important for screen reader users.
   */
  getValueText?: (index: number) => string;
}

/**
 * Primary UI component for user interaction
 */

const Slider = ({ ...props }: SliderProps) => {
  return <MuiSlider {...props} />;
};

export default Slider;
