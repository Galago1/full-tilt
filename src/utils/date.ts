import { format, parseISO } from 'date-fns';
import { DateFormat } from '../types/dateFns';

export const formatIso = (
  date?: string,
  dateFormat = DateFormat.MDY
): string => {
  if (!date) return '';

  return format(parseISO(date), dateFormat);
};
export const formatDateIso = (
  date?: Date,
  dateFormat = DateFormat.MDY
): string => {
  if (!date) return '';

  return format(date, dateFormat);
};

export const getFirstDayOfNextMonth = () => {
  const date = new Date();

  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};
