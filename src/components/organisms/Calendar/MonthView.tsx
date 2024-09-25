import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import useIsSize from 'src/hooks/useIsSize';
import CalendarContentDay, {
  CalendarContentDayProps
} from './CalendarContentDay';
import { CalendarWeek, Meeting } from './types';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export interface MonthViewWeekProps {
  week: CalendarWeek;
  calendarMeetings: Meeting[];
  onDropMeeting: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void;
  slots?: {
    calendarContentDayProps?: CalendarContentDayProps;
  };
}

const MonthViewWeek = ({
  week,
  calendarMeetings,
  onDropMeeting,
  slots
}: MonthViewWeekProps) => {
  const { calendarContentDayProps } = slots || {};
  const meetingsByDay = calendarMeetings.reduce<{ [key: string]: Meeting[] }>(
    (acc, meeting) => {
      if (!acc[meeting.day]) {
        acc[meeting.day] = [];
      }
      acc[meeting.day].push(meeting);
      return acc;
    },
    {}
  );
  return (
    <>
      {week.days.map((day) => (
        <CalendarContentDay
          {...calendarContentDayProps}
          key={day.fullDate}
          day={day}
          meetings={meetingsByDay[day.fullDate] || []}
          onDropMeeting={onDropMeeting}
        />
      ))}
    </>
  );
};

export interface MonthViewProps extends GridProps {
  meetings: Meeting[];
  onDropMeeting: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void;
  weeks: CalendarWeek[];
  slots?: {
    monthViewWeekProps: MonthViewWeekProps;
  };
}

const MonthView = ({
  meetings,
  onDropMeeting,
  weeks,
  slots,
  ...props
}: MonthViewProps) => {
  const { monthViewWeekProps } = slots || {};
  const { isXSmall } = useIsSize();
  const theme = useTheme();

  return (
    <Grid
      {...props}
      sx={{
        backgroundColor: '#FFF',
        height: '90%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: '1fr',
        borderRadius: theme.borderRadius.xl,
        ...props.sx
      }}
    >
      <>
        {daysOfWeek.map((day, index) => {
          const borderRadius =
            index === 0
              ? `${theme.borderRadius.lg} 0 0 0`
              : index === 6
              ? `0 ${theme.borderRadius.lg} 0 0`
              : 0;

          const borderLeftFn = () => {
            return theme.border.divider;
          };
          const borderLeft = borderLeftFn();
          const borderRightFn = () => {
            if (index === 6) {
              return theme.border.divider;
            }
            return 'none';
          };
          const borderRight = borderRightFn();

          return (
            <Grid
              key={day}
              sx={{
                borderRadius,
                textAlign: 'center',
                backgroundColor: '#FFF',
                py: 1,
                borderTop: theme.border.divider, // Only top border
                borderBottom: theme.border.divider, // Only bottom border
                borderLeft,
                borderRight,
                boxSizing: 'border-box'
              }}
            >
              <Typography variant="textSmRegular">
                {isXSmall ? day.slice(0, 3) : day}
              </Typography>
            </Grid>
          );
        })}
        {weeks.map((week, index) => (
          <MonthViewWeek
            {...monthViewWeekProps}
            key={index}
            week={week}
            calendarMeetings={meetings}
            onDropMeeting={onDropMeeting}
          />
        ))}
      </>
    </Grid>
  );
};

export default MonthView;
