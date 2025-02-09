import { styled } from '@mui/material';
import { Star01Icon } from 'src/components/particles/theme/icons/Shapes/star-01';

export interface StarProps {
  active: boolean;
  hovered: boolean;
  activeColor: string;
  inactiveColor: string;
  hoverFillColor: string;
  fillColor: string;
}

// TODO: Add types for this styled component
export const Star: any = styled(Star01Icon, {
  shouldForwardProp: (prop) =>
    prop !== 'active' &&
    prop !== 'hovered' &&
    prop !== 'activeColor' &&
    prop !== 'inactiveColor' &&
    prop !== 'fillColor' &&
    prop !== 'hoverFillColor'
})<StarProps>(
  ({
    active,
    hovered,
    activeColor,
    inactiveColor,
    fillColor,
    hoverFillColor
  }) => ({
    color: active || hovered ? activeColor : inactiveColor,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    transition: 'all 0.2s ease-in-out',
    fill: active || hovered ? fillColor || activeColor : 'transparent',
    stroke: 'none',
    strokeWidth: '0',
    '&:hover': {
      color: activeColor,
      fill: hoverFillColor || activeColor,
      stroke: activeColor,
      strokeWidth: '1px'
    }
  })
);
