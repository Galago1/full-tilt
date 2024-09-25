import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';

export interface StarProps {
  active: boolean;
  hovered: boolean;
  activeColor: string;
  inactiveColor: string;
}

// TODO: Add types for this styled component
export const Star: any = styled(StarIcon, {
  shouldForwardProp: (prop) =>
    prop !== 'active' &&
    prop !== 'hovered' &&
    prop !== 'activeColor' &&
    prop !== 'inactiveColor'
})<StarProps>(({ active, hovered, activeColor, inactiveColor }) => ({
  color: active || hovered ? activeColor : inactiveColor,
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  transition: 'color 0.2s ease-in-out',
  'data-testid': 'star-icon'
}));
