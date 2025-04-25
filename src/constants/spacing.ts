import { Theme } from '@mui/material';

export const attachmentIconSx = {
  fontSize: '18px !important',
  '&:hover': {
    color: (theme: Theme) => `${theme.palette.grey[900]} !important`
  }
};
