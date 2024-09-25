import type { SxProps, Theme, TypographyProps } from '@mui/material';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import type { ElementType, HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface LinkProps extends MuiLinkProps {
  children?: ReactNode | string;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?: TypographyProps['color'];
  /**
   * The target of the component.
   * @default
   * 'none'
   */
  target?: HTMLAttributeAnchorTarget;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Controls when the link should have an underline.
   */
  underline?: 'always' | 'hover' | 'none';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
   */
  sx?: SxProps<Theme>;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType<any>;
  /**
   * target reference
   */
  href?: string;
}

/**
 * Primary UI component for user interaction
 */
const Link = ({
  color = 'primary',
  target,
  underline,
  sx,
  children,
  // component,
  href,
  onClick,
  ...props
}: LinkProps) => {
  return (
    <MuiLink
      sx={{
        ...sx,
        textTransform: 'inherit'
      }}
      underline={underline}
      color={color}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      onClick={onClick}
      {...props}
    >
      {children}
    </MuiLink>
  );
};
export default Link;
