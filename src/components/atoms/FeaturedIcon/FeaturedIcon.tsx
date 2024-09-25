import type { SvgIconProps, Theme } from '@mui/material';
import { styled } from '@mui/material';
import type { ColorSchema } from 'src/components/particles/theme/palette';
import type { JSXElementConstructor, ReactElement } from 'react';
import { cloneElement } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface FeaturedIconProps extends SvgIconProps {
  /**
   * The icon to display
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
  /**
   * The size of the component.
   */
  size?: Size;
  color?: ColorSchema;
  dual?: boolean;
}

const xsStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'xs') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `2px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 12,
    width: 24,
    height: 24,
    lineHeight: dual ? theme.spacing(2.625) : theme.spacing(3),
    '& .MuiSvgIcon-root': {
      width: 12,
      height: 12
    }
  };
  return sx;
};
const smStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'sm') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `4px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 16,
    width: 32,
    height: 32,
    lineHeight: dual ? theme.spacing(2.625) : theme.spacing(4.5),
    '& .MuiSvgIcon-root': {
      width: 16,
      height: 16,
      verticalAlign: dual ? 'middle' : 'unset'
    }
  };
  return sx;
};
const mdStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'md') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `6px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 20,
    width: 40,
    height: 40,
    lineHeight: dual ? theme.spacing(3.125) : theme.spacing(6),
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
      verticalAlign: dual ? 'middle' : 'unset'
    }
  };
  return sx;
};
const lgStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'lg') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `8px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 24,
    width: 48,
    height: 48,
    lineHeight: dual ? theme.spacing(3.625) : theme.spacing(7.5),
    '& .MuiSvgIcon-root': {
      width: 24,
      height: 24,
      verticalAlign: dual ? 'middle' : 'unset'
    }
  };
  return sx;
};
const xlStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'xl') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `10px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 28,
    width: 56,
    height: 56,
    lineHeight: dual ? theme.spacing(4.125) : theme.spacing(9),
    '& .MuiSvgIcon-root': {
      width: 28,
      height: 28,
      verticalAlign: dual ? 'middle' : 'unset'
    }
  };
  return sx;
};
const xxlStyles = (
  size: Size,
  theme: Theme,
  color: ColorSchema,
  dual: number
) => {
  if (size !== 'xxl') return {};
  const sx = {
    backgroundColor: theme.palette[color][100],
    border: dual ? `12px solid ${theme.palette[color][50]}` : 'unset',
    borderRadius: 32,
    width: 64,
    height: 64,
    lineHeight: dual ? theme.spacing(4.625) : theme.spacing(10.5),
    '& .MuiSvgIcon-root': {
      width: 32,
      height: 32,
      verticalAlign: dual ? 'middle' : 'unset'
    }
  };
  return sx;
};

const Div = styled('div', {
  shouldForwardProp: (prop) => prop !== 'primary'
})<{ size: Size; color: ColorSchema; dual: number }>(
  ({ theme, size, color, dual }) => ({
    ...xsStyles(size, theme, color, dual),
    ...smStyles(size, theme, color, dual),
    ...mdStyles(size, theme, color, dual),
    ...lgStyles(size, theme, color, dual),
    ...xlStyles(size, theme, color, dual),
    ...xxlStyles(size, theme, color, dual),
    textAlign: 'center'
  })
);

const FeaturedIcon = ({
  children,
  dual = false,
  color = 'primary',
  size = 'md',
  ...props
}: FeaturedIconProps) => {
  return (
    <Div
      size={size}
      color={color}
      // Change boolean to a number to avoid styled issue
      dual={+dual}
    >
      {children && cloneElement(children, { ...props, color })}
    </Div>
  );
};

export default FeaturedIcon;
