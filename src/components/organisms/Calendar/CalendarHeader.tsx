import { Grid } from '@mui/material';
import { CalendarView } from './types';
import CalendarHeaderActions, {
  CalendarHeaderActionsProps
} from './CalendarHeaderActions';
import CalendarHeaderPrevNext from './CalendarHeaderPrevNext';
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
    calendarHeaderActionsProps: CalendarHeaderActionsProps;
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
  const { calendarHeaderActionsProps } = slots || {};
  return (
    <Grid
      container
      gap={responsiveSpacing}
      flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
    >
      <Grid item flex={1}>
        <CalendarHeaderPrevNext
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
        <CalendarHeaderActions
          {...calendarHeaderActionsProps!}
          initialView={initialView}
          setView={setView}
        />
      </Grid>
    </Grid>
  );
};

export default CalendarHeader;
