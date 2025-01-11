import { format, parse } from 'date-fns';
import { DateFormat } from '../types/dateFns';
export const formatDate = (
  date?: Date,
  dateFormat = DateFormat.MDY
): string => {
  if (!date) return '';

  try {
    // For other formats
    return format(date, dateFormat);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

export const getFirstDayOfNextMonth = () => {
  const date = new Date();

  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};

export const parseDate = (
  date: string,
  dateFormat: DateFormat = DateFormat.MDY
) => {
  return parse(date, dateFormat, new Date());
};
