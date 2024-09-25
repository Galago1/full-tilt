import type { SxProps, Theme } from '@mui/material';
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import type {
  JSXElementConstructor,
  ReactElement,
  SyntheticEvent
} from 'react';

export interface TooltipProps extends Omit<MuiTooltipProps, 'children'> {
  /**
   * Tooltip reference element.
   * Needs to be able to hold a ref.
   */
  children?: ReactElement<any, any>;
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: string;
  /**
   * If true, adds an arrow to the tooltip.
   */
  arrow?: boolean;
  /**
   * Set to true if the title acts as an accessible description. By default
   * the title acts as an accessible label for the child.
   */
  describeChild?: boolean;
  /**
   * Do not respond to focus-visible events.
   */
  disableFocusListener?: boolean;
  /**
   * Do not respond to hover events.
   */
  disableHoverListener?: boolean;
  /**
   * Makes a tooltip not interactive, i.e. it will close
   * when the user hovers over the tooltip before the leaveDelay is expired.
   */
  disableInteractive?: boolean;
  /**
   * 	Do not respond to long press touch events.
   */
  disableTouchListener?: boolean;
  /**
   * he number of milliseconds to wait before showing the
   * tooltip. This prop won't impact the enter touch delay (enterTouchDelay).
   */
  enterDelay?: number;
  /**
   * The number of milliseconds to wait before showing the tooltip when one
   * was already recently opened.
   */
  enterNextDelay?: number;
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay?: number;
  /**
   * If true, the tooltip follow the cursor over the wrapped element.
   */
  followCursor?: boolean;
  /**
   * This prop is used to help implement the accessibility logic. If you don't provide this prop.
   * It falls back to a randomly generated id.
   */
  id?: string;
  /**
   * The number of milliseconds to wait before hiding the tooltip. This prop won't
   * impact the leave touch delay (leaveTouchDelay).
   */
  leaveDelay?: number;
  /**
   * The number of milliseconds after the user stops touching an element
   * before hiding the tooltip.
   */
  leaveTouchDelay?: number;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: (event: Event | SyntheticEvent<Element, Event>) => void;
  /**
   * Callback fired when the component requests to be open.
   */
  onOpen?: (event: Event | SyntheticEvent<Element, Event>) => void;
  /**
   * If true, the component is shown.
   */
  open?: boolean;
  /**
   * Tooltip placement.
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  sx?: SxProps<Theme>;
  /**
   * The component used for the transition. Follow this guide to learn more about the requirements for this component.
   */
  TransitionComponent?:
    | JSXElementConstructor<
        TransitionProps & { children: ReactElement<any, any> }
      >
    | undefined;
  /**
   * Props applied to the transition element. By default, the element is based on this Transition component.
   */
  TransitionProps?: object;
}

const Tooltip = ({
  children,
  title,
  arrow,
  describeChild,
  disableFocusListener,
  disableHoverListener,
  disableInteractive,
  disableTouchListener,
  enterDelay,
  enterNextDelay,
  enterTouchDelay,
  followCursor,
  id,
  leaveDelay,
  leaveTouchDelay,
  open,
  placement,
  sx,
  TransitionProps,
  onClose,
  onOpen,
  TransitionComponent,
  ...props
}: TooltipProps) => {
  return (
    <MuiTooltip
      title={title}
      arrow={arrow}
      describeChild={describeChild}
      disableFocusListener={disableFocusListener}
      disableHoverListener={disableHoverListener}
      disableInteractive={disableInteractive}
      disableTouchListener={disableTouchListener}
      enterDelay={enterDelay}
      enterNextDelay={enterNextDelay}
      enterTouchDelay={enterTouchDelay}
      followCursor={followCursor}
      id={id}
      leaveDelay={leaveDelay}
      leaveTouchDelay={leaveTouchDelay}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      placement={placement}
      sx={sx}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      {...props}
    >
      {children ? children : <></>}
    </MuiTooltip>
  );
};
export default Tooltip;
