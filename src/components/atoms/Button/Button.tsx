import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';
import type { Theme } from '@mui/material';
import { forwardRef } from 'react';

type ButtonSize = 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';

export interface ButtonProps
  extends Omit<MuiButtonProps, 'onClick' | 'component'> {
  component?: any;
  /**
   * Button contents
   */
  label?: string | JSX.Element;
  /**
   * Hide the boxshadow
   */
  hideBoxshadow?: boolean;
  /**
   * onClick
   */
  onClick?: (a: any, b: any) => void;
}
const onlyIconSizeHeightWidth = {
  xs: {
    height: '1.75rem',
    width: '1.75rem',
    fontSize: '1.25rem'
  },
  small: {
    height: '2.25rem',
    width: '2.25rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.5rem',
    width: '2.5rem',
    fontSize: '1.25rem'
  },
  large: {
    height: '2.75rem',
    width: '2.75rem',
    fontSize: '1.25rem'
  },
  xl: {
    height: '3rem',
    width: '3rem',
    fontSize: '1.25rem'
  },
  xxl: {
    height: '3.5rem',
    width: '3.5rem',
    fontSize: '1.5rem'
  }
};
const squareStyles = (size: ButtonSize) => ({
  paddingRight: (theme: Theme) => theme.spacing(0.625),
  paddingLeft: (theme: Theme) => theme.spacing(0.625),
  minWidth: (theme: Theme) => theme.spacing(4.5),
  '& .MuiButton-startIcon, .MuiButton-endIcon': {
    marginRight: 0,
    marginLeft: 0
  },
  ...onlyIconSizeHeightWidth[size]
});

/**
 * Primary UI component for user interaction
 */
const Button = forwardRef(
  (
    {
      size = 'medium',
      hideBoxshadow = false,
      label,
      startIcon,
      endIcon,
      sx,
      children,
      onClick,
      ...props
    }: ButtonProps,
    ref: any
  ) => {
    return (
      <MuiButton
        ref={ref}
        className={`${hideBoxshadow ? 'hide-boxshadow' : ''}`}
        sx={{
          ...sx,
          ...((startIcon || endIcon) && !label ? squareStyles(size) : {})
        }}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={(event: any) => onClick?.(event, {})}
        size={size}
        {...props}
      >
        {children}
        {label}
      </MuiButton>
    );
  }
);

export default Button;
