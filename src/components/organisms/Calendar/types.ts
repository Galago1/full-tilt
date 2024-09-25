import { ChipPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export enum CalendarView {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month'
}

export interface Meeting {
  id: number | string;
  title: string;
  day: string;
  time: string | undefined;
  isDraggable: boolean;
  duration: number;
  color: OverridableStringUnion<
    'filled' | 'outlined',
    ChipPropsVariantOverrides
  >;
}

export interface CalendarDay {
  date: number;
  fullDate: string;
  isCurrentMonth: boolean;
  meetings: Meeting[];
}

export interface CalendarWeek {
  days: CalendarDay[];
}
