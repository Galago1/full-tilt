import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef, ForwardedRef } from 'react';

// Extend ChipPropsVariantOverrides to include custom variants
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    green: true;
    blue: true;
    orange: true;
    outlined: true;
  }
}

export interface ChipProps extends MuiChipProps {}

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

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ ...props }, ref) => {
  return <StyledChip {...props} ref={ref} />;
});

export default Chip;
