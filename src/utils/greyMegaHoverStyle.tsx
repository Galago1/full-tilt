import { SxProps, Theme } from '@mui/material';
import { fullBoxShadow } from 'src/components/particles/theme/shadows';

export const greyMegaHoverStyle: SxProps<Theme> = {
  color: 'text.primary',
  cursor: 'pointer',

  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    boxShadow: (theme: Theme) => fullBoxShadow(theme.palette.grey[200]),
    transform: 'translateY(-2px)'
  },
  '&:focus': {
    boxShadow: (theme: Theme) => fullBoxShadow(theme.palette.grey[200]),
    transform: 'translateY(-2px)'
  }
};
