import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps
} from '@mui/material';
import type { ReactElement } from 'react';

export interface TooltipProps extends Omit<MuiTooltipProps, 'children'> {
  /**
   * Tooltip reference element.
   * Needs to be able to hold a ref.
   */
  children?: ReactElement<any, any>;
}

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <MuiTooltip {...props}>{children ? children : <></>}</MuiTooltip>;
};
export default Tooltip;
