import { Grid } from '@mui/material';
import { CalendarView } from './types';
import CalendarHeaderActions, {
  CalendarHeaderActionsProps
} from './CalendarHeaderActions';
import CalendarHeaderPrevNext, {
  CalendarHeaderPrevNextProps
} from './CalendarHeaderPrevNext';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface CalendarHeaderProps {
  view?: CalendarView;
  setView?: (view: CalendarView) => void;
  initialView?: CalendarView;
  selectedDate?: Date;
  goToPreviousDay?: () => void;
  goToNextDay?: () => void;
  currentWeekStart?: Date;
  goToPreviousWeek?: () => void;
  goToNextWeek?: () => void;
  currentYear?: number;
  currentMonth?: number;
  goToPreviousMonth?: () => void;
  goToNextMonth?: () => void;
  slots?: {
    calendarHeaderActionsProps?: CalendarHeaderActionsProps;
    calendarHeaderPrevNextProps?: CalendarHeaderPrevNextProps;
  };
}

const CalendarHeader = ({
  view,
  setView,
  selectedDate,
  goToPreviousDay,
  goToNextDay,
  currentWeekStart,
  goToPreviousWeek,
  goToNextWeek,
  currentYear,
  currentMonth,
  goToPreviousMonth,
  goToNextMonth,
  initialView,
  slots
}: CalendarHeaderProps) => {
  const { calendarHeaderActionsProps, calendarHeaderPrevNextProps } =
    slots || {};
  return (
    <Grid
      container
      gap={responsiveSpacing}
      flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
    >
      <Grid item flex={1}>
        <CalendarHeaderPrevNext
          {...calendarHeaderPrevNextProps!}
          setView={setView!}
          initialView={initialView}
          view={view!}
          selectedDate={selectedDate!}
          goToPreviousDay={goToPreviousDay!}
          goToNextDay={goToNextDay!}
          currentWeekStart={currentWeekStart!}
          goToPreviousWeek={goToPreviousWeek!}
          goToNextWeek={goToNextWeek!}
          currentYear={currentYear!}
          currentMonth={currentMonth!}
          goToPreviousMonth={goToPreviousMonth!}
          goToNextMonth={goToNextMonth!}
        />
      </Grid>
      <Grid item>
        <CalendarHeaderActions {...calendarHeaderActionsProps!} />
      </Grid>
    </Grid>
  );
};

export default CalendarHeader;
