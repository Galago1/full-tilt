import { Theme } from '@mui/material';

export const buttonHoverStyles = {
  fontSize: '20px !important',
  '&:hover': {
    color: (theme: Theme) => `${theme.palette.grey[900]} !important`
  }
};
