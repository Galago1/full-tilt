import type { SxProps, Theme } from '@mui/material';
import { Divider as MuiDivider } from '@mui/material';
import type { ElementType, ReactNode } from 'react';

export interface DividerProps {
  children?: ReactNode;
  /**
   * Absolutely position the element.
   */
  absolute?: boolean;
  /**
   * If true, a vertical divider will have
   * the correct height when used in flex container.
   */
  flexItem?: boolean;
  /**
   * If true, the divider will have a lighter color.
   */
  light?: boolean;
  /**
   * The component orientation.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The text alignment.
   */
  textAlign?: 'center' | 'left' | 'right';
  /**
   * The variant to use.
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * 	The component used for the root node. Either a string to use a
   *  HTML element or a component.
   */
  component?: ElementType<any> | undefined;
}

/**
 * Primary UI component for user interaction
 */
const Divider = ({ children, ...props }: DividerProps) => {
  return <MuiDivider {...props}>{children}</MuiDivider>;
};
export default Divider;
