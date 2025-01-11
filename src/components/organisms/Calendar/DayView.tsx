import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import {
  DateCalendar,
  DateCalendarProps,
  LocalizationProvider
} from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DateFormat } from 'src/types/dateFns';
import { formatDate } from 'src/utils/date';
import DayViewMeeting, { DayViewMeetingProps } from './DayViewMeeting';
import DayViewTimeSlot from './DayViewTimeSlot';
import { useDayView } from './hooks';
import { Meeting } from './types';

export interface DayViewProps extends GridProps {
  currentDate: Date;
  meetings: Meeting[];
  onDropMeeting: (id: string | number, day: string, time: string) => void;
  onDateChange: (date: Date) => void;
  slots: {
    dateCalendarProps?: DateCalendarProps<any>;
    dayViewMeetingProps?: DayViewMeetingProps;
  };
}

const DayView = ({
  meetings,
  onDropMeeting,
  currentDate,
  onDateChange,
  slots,
  ...props
}: DayViewProps) => {
  const { dateCalendarProps, dayViewMeetingProps } = slots || {};
  const theme = useTheme();
  const {
    currentDateState,
    containerRef,
    hourlyIntervals,
    quarterHourIntervals,
    getMeetingsForTimeSlot,
    handleDateChange
  } = useDayView(currentDate, meetings, onDateChange, [new Date()]);

  return (
    <Grid
      container
      {...props}
      gap={2}
      flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={'auto'}
        justifyContent={'flex-start'}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            sx={{
              minWidth: theme.spacing(37.5),
              '& .MuiPickersDay-root.Mui-selected': {
                backgroundColor: 'cyan.600'
              },
              '& .MuiPickersDay-root.Mui-selected:hover': {
                backgroundColor: 'cyan.600'
              },
              '& .MuiPickersDay-root:focus.Mui-selected': {
                backgroundColor: 'cyan.600'
              },
              '& .MuiPickersDay-root:hover': {
                backgroundColor: 'cyan.600'
              }
            }}
            value={currentDateState}
            onChange={handleDateChange}
            {...dateCalendarProps}
          />
        </LocalizationProvider>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={'auto'}
        flex={{ xs: 'auto', sm: 'auto', md: 1 }}
      >
        <DndProvider backend={HTML5Backend}>
          <Grid
            container
            sx={{ height: '100%', overflow: 'auto' }}
            ref={containerRef}
          >
            <Grid
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: 'white',
                borderBottom: `${theme.spacing(0.125)} solid ${
                  theme.palette.divider
                }`,
                width: '100%'
              }}
            >
              <Grid item container>
                <Grid
                  item
                  sx={{
                    minWidth: theme.spacing(10),
                    borderRight: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    borderLeft: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    borderTop: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    borderTopLeftRadius: theme.spacing(1.5),
                    textAlign: 'center',
                    padding: theme.spacing(1.5, 3)
                  }}
                ></Grid>
                <Grid
                  item
                  sx={{
                    flexBasis: '0',
                    flexGrow: 1,
                    borderTop: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    borderRight: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    textAlign: 'center',
                    padding: theme.spacing(1.5, 3),

                    borderTopRightRadius: theme.spacing(1.5)
                  }}
                >
                  <Typography variant="textSmRegular">
                    {formatDate(currentDateState, DateFormat.EEEEd)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {hourlyIntervals.map((hourInterval, hourIndex) => {
              const isLastHour = hourIndex === hourlyIntervals.length - 1;

              return (
                <Grid
                  container
                  key={hourInterval}
                  sx={{
                    borderBottom: `${theme.spacing(0.125)} solid ${
                      theme.palette.divider
                    }`,
                    borderBottomLeftRadius: isLastHour
                      ? theme.spacing(1.5)
                      : theme.spacing(0),
                    borderBottomRightRadius: isLastHour
                      ? theme.spacing(1.5)
                      : theme.spacing(0),
                    borderColor: theme.palette.divider,
                    display: 'flex'
                  }}
                >
                  <Grid
                    item
                    sx={{
                      minWidth: theme.spacing(10),
                      textAlign: 'center',
                      height: theme.spacing(7.5),
                      borderRight: `${theme.spacing(0.125)} solid ${
                        theme.palette.divider
                      }`,
                      borderLeft: `${theme.spacing(0.125)} solid ${
                        theme.palette.divider
                      }`,
                      borderColor: theme.palette.divider,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomLeftRadius: isLastHour
                        ? theme.spacing(1.5)
                        : theme.spacing(0)
                    }}
                  >
                    <Typography variant="textSmRegular">
                      {hourInterval}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      flex: '1 1 0',
                      position: 'relative',
                      boxSizing: 'border-box',
                      height: theme.spacing(7.5),
                      borderRight: `${theme.spacing(0.125)} solid ${
                        theme.palette.divider
                      }`,
                      borderColor: theme.palette.divider,
                      borderBottomRightRadius: isLastHour
                        ? theme.spacing(1.5)
                        : theme.spacing(0),
                      overflow: 'visible'
                    }}
                  >
                    {[0, 1, 2, 3].map((quarterHourIndex) => {
                      const quarterHourTime =
                        quarterHourIntervals[hourIndex * 4 + quarterHourIndex];
                      return (
                        <DayViewTimeSlot
                          key={`${quarterHourTime}`}
                          time={quarterHourTime}
                          onDropMeeting={onDropMeeting}
                        >
                          {getMeetingsForTimeSlot(quarterHourTime).map(
                            (meeting: any) => (
                              <DayViewMeeting
                                {...dayViewMeetingProps}
                                key={meeting.id}
                                meeting={meeting}
                              />
                            )
                          )}
                        </DayViewTimeSlot>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </DndProvider>
      </Grid>
    </Grid>
  );
};

export default DayView;
