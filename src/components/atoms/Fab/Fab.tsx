import { Fab as MuiFab } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ElementType, ReactNode } from 'react';

export interface FabProps {
  children?: ReactNode;
  /**
   * The color of the component.
   */
  color?:
    | 'default'
    | 'error'
    | 'info'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  /**
   * 	The component used for the root node. Either a string to use a
   *  HTML element or a component.
   */
  component?: ElementType<any> | undefined;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the keyboard focus ripple is disabled.
   */
  disableFocusRipple?: boolean;
  /**
   * If true, the ripple effect is disabled.
   */
  disableRipple?: boolean;
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href?: string;
  /**
   * The size of the component. small is equivalent to the dense button styling.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * The variant to use.
   */
  variant?: 'circular' | 'extended';
}

const Fab = ({ children, ...props }: FabProps) => {
  return <MuiFab {...props}>{children}</MuiFab>;
};

export default Fab;
