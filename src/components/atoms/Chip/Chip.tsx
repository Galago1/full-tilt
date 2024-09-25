import { styled } from '@mui/material/styles';
import type { ChipPropsVariantOverrides, SxProps, Theme } from '@mui/material';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import type { ElementType, JSXElementConstructor, ReactElement } from 'react';
import type { ColorSchema } from 'src/components/particles/theme/palette';
import type { OverridableStringUnion } from '@mui/types';

// Extend ChipPropsVariantOverrides to include custom variants
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    green: true;
    blue: true;
    orange: true;
  }
}

export interface ChipProps extends Omit<MuiChipProps, 'variant'> {
  /**
   * The Avatar element to display.
   */
  avatar?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  /**
   * If true, the chip will appear clickable
   * If false, the chip will not appear clickable
   */
  clickable?: boolean;
  /**
   * Chip background color
   */
  color?: ColorSchema | 'default';
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Icon element.
   */
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  /**
   * The content of the component.
   */
  label?: React.ReactNode | string;
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: () => void;
  /**
   * The size of the component.
   */
  size?: 'medium' | 'small' | 'large';
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * The variant to use.
   */
  variant?: OverridableStringUnion<
    'filled' | 'outlined',
    ChipPropsVariantOverrides
  >;
  /**
   * The component used for the root node. Either a string to use an HTML element or a component.
   */
  component?: ElementType<any>;
  /**
   * Override the default delete icon element. Shown only if onDelete is set.
   */
  deleteIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * optional reference for an avatar image
   */
  href?: string;
}

const orange50 = '#FEF6EE';
const blue50 = '#EFF8FF';
const green50 = '#ECFDF3';
const orange700 = '#B93815';
const blue700 = '#175CD3';
const green700 = '#067647';

const StyledChip = styled(MuiChip)(({ theme, variant }) => ({
  ...(variant === 'orange' && {
    backgroundColor: orange50,
    border: theme.border.orange200,
    color: orange700,
    borderRadius: '4px'
  }),
  ...(variant === 'blue' && {
    backgroundColor: blue50,
    border: theme.border.blue200,
    color: blue700,
    borderRadius: '4px'
  }),
  ...(variant === 'green' && {
    backgroundColor: green50,
    border: theme.border.green200,
    color: green700,
    borderRadius: '4px'
  })
}));

const Chip = (props: ChipProps) => {
  return <StyledChip {...props} />;
};

export default Chip;
