import DayView, { DayViewProps } from './DayView';
import MonthView, { MonthViewProps } from './MonthView';
import { CalendarWeek, Meeting } from './types';
import WeekView, { WeekViewProps } from './WeekView';

export interface CalendarContentProps {
  view?: 'day' | 'week' | 'month';
  selectedDate?: Date;
  calendarMeetings?: Meeting[];
  onDropMeeting?: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void;
  handleDayViewDateChange?: (date: Date) => void;
  currentWeekStart?: Date;
  weeks?: CalendarWeek[];
  slots?: {
    dayViewProps?: DayViewProps;
    weekViewProps?: WeekViewProps;
    monthViewProps?: MonthViewProps;
  };
}

const CalendarContent = ({
  view,
  selectedDate,
  calendarMeetings,
  onDropMeeting,
  handleDayViewDateChange,
  currentWeekStart,
  weeks,
  slots
}: CalendarContentProps) => {
  const { dayViewProps, weekViewProps, monthViewProps } = slots || {};

  return (
    <>
      {view === 'day' && (
        <DayView
          {...dayViewProps!}
          currentDate={selectedDate!}
          meetings={calendarMeetings!}
          onDropMeeting={onDropMeeting!}
          onDateChange={handleDayViewDateChange!}
        />
      )}
      {view === 'week' && (
        <WeekView
          {...weekViewProps}
          meetings={calendarMeetings!}
          currentWeekStart={currentWeekStart!}
          onDropMeeting={onDropMeeting!}
        />
      )}
      {view === 'month' && (
        <MonthView
          {...monthViewProps}
          weeks={weeks!}
          meetings={calendarMeetings!}
          onDropMeeting={onDropMeeting!}
        />
      )}
    </>
  );
};

export default CalendarContent;
