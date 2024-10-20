import { Divider, Grid, GridProps } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import CalendarContent, { CalendarContentProps } from './CalendarContent';
import CalendarHeader, { CalendarHeaderProps } from './CalendarHeader';
import { useCalendar } from './hooks';
import { CalendarView, Meeting } from './types';

interface Slots {
  calendarHeaderProps?: CalendarHeaderProps;
  calendarContentProps?: CalendarContentProps;
  headerGridItemProps?: GridProps;
  dividerGridItemProps?: GridProps;
  contentGridItemProps?: GridProps;
}

export interface CalendarProps extends GridProps {
  /**
   * The loading state of the component
   */
  isLoading?: boolean;
  /**
   * The initial year to display
   */
  initialYear: number;
  /**
   * The initial month to display
   */
  initialMonth: number;
  /**
   * The meetings to display on the calendar
   */
  meetings: Meeting[];
  /**
   * The initial view to display
   */
  initialView?: CalendarView;
  /**
   * Callback fired when a meeting is dropped on the calendar
   * @param meetingId
   * @param newDay
   * @param newTime
   * @returns
   */
  onDropMeetingExternal?: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void;
  /**
   * Callback fired when the year is updated
   * @param year
   * @returns
   */
  onUpdateYear?: (year: number) => void;
  /**
   * Callback fired when the month is updated
   * @param month
   * @returns
   */
  onUpdateMonth?: (month: number) => void;
  /**
   * Callback fired when the week is updated
   * @param weekStart
   * @returns
   */
  onUpdateWeek?: (weekStart: Date) => void;
  /**
   * Callback fired when the date is updated
   * @param date
   * @returns
   */
  onUpdateDate?: (date: Date) => void;
  /**
   * The slots for the component
   */
  slots?: Slots;
}

const Calendar = ({
  isLoading,
  initialYear,
  initialMonth,
  meetings,
  initialView,
  onDropMeetingExternal,
  onUpdateYear,
  onUpdateMonth,
  onUpdateWeek,
  onUpdateDate,
  slots,
  ...props
}: CalendarProps) => {
  const {
    currentYear,
    currentMonth,
    calendarMeetings,
    selectedDate,
    view,
    currentWeekStart,
    weeks,
    theme,
    calendarHeaderProps,
    calendarContentProps,
    headerGridItemProps,
    dividerGridItemProps,
    contentGridItemProps,
    setView,
    handleDayViewDateChange,
    onDropMeeting,
    goToPreviousMonth,
    goToNextMonth,
    goToPreviousWeek,
    goToNextWeek,
    goToPreviousDay,
    goToNextDay
  } = useCalendar(
    initialYear,
    initialMonth,
    meetings,
    isLoading!,
    initialView!,
    slots,
    onDropMeetingExternal!,
    onUpdateYear,
    onUpdateMonth,
    onUpdateWeek,
    onUpdateDate
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid
        container
        flexDirection={'column'}
        flexWrap={'nowrap'}
        sx={{
          borderRadius: theme.borderRadius.md,
          border: theme.border.outlinedButton,
          backgroundColor: '#FFF',
          padding: theme.spacing(3),
          minWidth: 400,
          height: '100%', // Ensure the container takes full height
          overflow: 'hidden',
          ...props.sx
        }}
        {...props}
      >
        <Grid item {...headerGridItemProps}>
          <CalendarHeader
            {...calendarHeaderProps!}
            view={view}
            setView={setView}
            initialView={initialView}
            selectedDate={selectedDate}
            goToPreviousDay={goToPreviousDay}
            goToNextDay={goToNextDay}
            currentWeekStart={currentWeekStart}
            goToPreviousWeek={goToPreviousWeek}
            goToNextWeek={goToNextWeek}
            currentYear={currentYear}
            currentMonth={currentMonth}
            goToPreviousMonth={goToPreviousMonth}
            goToNextMonth={goToNextMonth}
          />
        </Grid>
        <Grid item {...dividerGridItemProps}>
          <Divider sx={{ my: responsiveSpacing }} />
        </Grid>
        <Grid
          item
          {...contentGridItemProps}
          sx={{
            overflowX: 'auto', // Enable horizontal scrolling
            display: 'block', // Ensure it doesn't collapse
            // whiteSpace: 'nowrap', // Prevent inner items from wrapping to new lines
            height: '100%'
          }}
        >
          <CalendarContent
            {...calendarContentProps}
            view={view}
            selectedDate={selectedDate}
            calendarMeetings={calendarMeetings}
            onDropMeeting={onDropMeeting}
            handleDayViewDateChange={handleDayViewDateChange}
            currentWeekStart={currentWeekStart}
            weeks={weeks}
          />
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default Calendar;
