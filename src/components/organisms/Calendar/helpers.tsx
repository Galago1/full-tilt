import { Theme } from '@mui/material';

export const ItemTypes = {
  MEETING: 'meeting'
};

export const calculateHeight = (duration: number, theme: Theme): string => {
  return theme.spacing(+duration / 8).toString();
};
