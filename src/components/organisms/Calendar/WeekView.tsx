import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import { addDays, format, isSameDay } from 'date-fns';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Meeting } from './types';
import { useWeekView } from './hooks';
import WeekViewMeeting, { WeekViewMeetingProps } from './WeekViewMeeting';
import WeekViewTimeSlot from './WeekViewTimeSlot';

export interface WeekViewProps extends GridProps {
  meetings: Meeting[];
  currentWeekStart: Date;
  onDropMeeting: (id: string | number, day: string, time: string) => void;
  slots?: {
    weekViewMeetingProps?: WeekViewMeetingProps;
  };
}

const WeekView = ({
  meetings,
  currentWeekStart,
  onDropMeeting,
  slots,
  ...props
}: WeekViewProps) => {
  const { weekViewMeetingProps } = slots || {};
  const theme = useTheme();
  const {
    containerRef,
    startDateOfWeek,
    daysOfWeek,
    hourlyIntervals,
    quarterHourIntervals,
    getMeetingsForTimeSlot,
    today
  } = useWeekView(meetings, currentWeekStart);

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid
        container
        sx={{ height: '100%', overflowX: 'auto', minWidth: 594 }} // Ensure horizontal scrolling
        ref={containerRef}
        {...props}
      >
        <Grid
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: 'white',
            borderBottom: theme.border.divider,
            width: '100%' // Ensure the header stretches across the container
          }}
        >
          <Grid item container flexWrap={'nowrap'}>
            <Grid
              item
              sx={{
                minWidth: theme.spacing(10),
                borderRight: theme.border.divider,
                borderLeft: theme.border.divider,
                borderTop: theme.border.divider,
                borderTopLeftRadius: theme.spacing(1.5),
                textAlign: 'center',
                padding: theme.spacing(1.5, 3)
              }}
            ></Grid>
            {daysOfWeek.map((day, index) => {
              const dayDate = addDays(startDateOfWeek, index);
              const isToday = isSameDay(dayDate, today);
              const dayNumber = format(dayDate, 'd');
              const isLastDay = index === daysOfWeek.length - 1;
              return (
                <Grid
                  item
                  key={day}
                  sx={{
                    flexGrow: 1, // Ensure the item expands to fill available space
                    flexShrink: 1, // Allow it to shrink when the page shrinks
                    flexBasis: '0%', // Ensure flexible sizing
                    minWidth: 0, // Allow the columns to shrink properly when the page is small
                    borderTop: theme.border.divider,
                    borderRight: theme.border.divider,
                    textAlign: 'center',
                    padding: theme.spacing(1.5, 3),
                    backgroundColor: isToday ? 'cyan.50' : 'inherit',
                    borderTopRightRadius: isLastDay ? theme.spacing(1.5) : '0px'
                  }}
                >
                  <Typography variant="textSmRegular">
                    {day.slice(0, 3)} {dayNumber}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {hourlyIntervals.map((hourInterval, hourIndex) => {
          const isLastHour = hourIndex === hourlyIntervals.length - 1;

          return (
            <Grid
              container
              key={hourInterval}
              sx={{
                borderBottom: theme.border.divider,
                display: 'flex',
                flexWrap: 'nowrap',
                width: '100%' // Ensure the time slots stretch across the container
              }}
            >
              <Grid
                item
                sx={{
                  minWidth: theme.spacing(10),
                  textAlign: 'center',
                  height: theme.spacing(7.5),
                  borderRight: theme.border.divider,
                  borderLeft: theme.border.divider,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="textSmRegular">{hourInterval}</Typography>
              </Grid>

              {/* Day columns for each time slot */}
              {daysOfWeek.map((day, dayIndex) => {
                const isLastDay = dayIndex === daysOfWeek.length - 1;
                return (
                  <Grid
                    item
                    key={`${day}-${hourInterval}`}
                    sx={{
                      flexGrow: 1, // Ensure the item expands to fill available space
                      flexShrink: 1, // Allow it to shrink when the page shrinks
                      flexBasis: '0%', // Allow the day columns to expand and fill space
                      minWidth: 0, // Allow the columns to shrink properly when the page is small
                      position: 'relative',
                      height: theme.spacing(7.5),
                      borderRight: theme.border.divider,
                      borderColor: theme.palette.divider,
                      borderBottomRightRadius:
                        isLastHour && isLastDay ? theme.spacing(1.5) : '0px',
                      overflow: 'visible'
                    }}
                  >
                    {[0, 1, 2, 3].map((quarterHourIndex) => {
                      const quarterHourTime =
                        quarterHourIntervals[hourIndex * 4 + quarterHourIndex];
                      return (
                        <WeekViewTimeSlot
                          key={`${day}-${quarterHourTime}`}
                          dayIndex={dayIndex}
                          time={quarterHourTime}
                          onDropMeeting={onDropMeeting}
                        >
                          {getMeetingsForTimeSlot(
                            dayIndex,
                            quarterHourTime
                          ).map((meeting) => (
                            <WeekViewMeeting
                              {...weekViewMeetingProps}
                              key={meeting.id}
                              meeting={meeting}
                            />
                          ))}
                        </WeekViewTimeSlot>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </DndProvider>
  );
};

export default WeekView;
