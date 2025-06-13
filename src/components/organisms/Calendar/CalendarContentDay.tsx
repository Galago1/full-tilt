import { Grid, Popover, Typography } from '@mui/material';
import { Chip } from 'src/components/atoms';
import { useIsSize } from 'src/hooks';
import { CalendarDay, Meeting } from './types';
import { useCalendarContentDay } from './hooks';
import MeetingChip, { MeetingChipProps } from './MeetingChip';

export interface CalendarContentDayProps {
  day: CalendarDay;
  meetings: Meeting[];
  onDropMeeting: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void;
  onClickMeeting?: (event: any, meeting: Meeting) => void;
  slots?: {
    meetingChipProps?: MeetingChipProps;
  };
}

const CalendarContentDay = ({
  day,
  meetings,
  onDropMeeting,
  slots,
  onClickMeeting
}: CalendarContentDayProps) => {
  const { meetingChipProps } = slots || {};
  const { isXSmall } = useIsSize();
  const {
    dayRef,
    moreTextRef,
    headerRef,
    displayedMeetings,
    remainingMeetings,
    isToday,
    theme,
    anchorEl,
    open,
    handlePopoverOpen,
    handlePopoverClose
  } = useCalendarContentDay(day, meetings, onDropMeeting);
  return (
    <Grid
      ref={dayRef}
      sx={{
        padding: theme.spacing(1),
        backgroundColor: day.isCurrentMonth
          ? isToday
            ? 'cyan.50'
            : 'white'
          : 'grey.50',
        borderBottom: theme.border.divider,
        borderLeft: theme.border.divider,
        borderTop: 'none',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:nth-of-type(7n)': {
          borderRight: theme.border.divider
        },
        '&:nth-last-of-type(7)': {
          borderBottomLeftRadius: theme.borderRadius.md
        },
        '&:last-of-type': {
          borderBottomRightRadius: theme.borderRadius.md
        }
      }}
    >
      <Grid
        ref={headerRef}
        sx={{
          width: theme.spacing(5),
          height: theme.spacing(5),
          backgroundColor: isToday ? 'cyan.600' : 'transparent',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1 / 1',
          flexShrink: 0
        }}
      >
        <Typography
          variant="textXsRegular"
          sx={{ color: isToday ? '#fff' : 'inherit' }}
        >
          {day.date}
        </Typography>
      </Grid>

      <Grid
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible'
        }}
      >
        {!isXSmall &&
          displayedMeetings.map((meeting) => (
            <MeetingChip
              {...meetingChipProps}
              key={meeting.id}
              meeting={{ ...meeting, day: day.fullDate }}
            />
          ))}
        {!isXSmall && remainingMeetings > 0 && (
          <Typography
            variant="textXsRegular"
            sx={{ minHeight: theme.spacing(2.5), cursor: 'pointer' }}
            ref={moreTextRef}
            onClick={handlePopoverOpen}
          >
            +{remainingMeetings} more
          </Typography>
        )}
        {!isXSmall && remainingMeetings === 0 && (
          <Typography
            variant="textXsRegular"
            sx={{ minHeight: theme.spacing(2.5), visibility: 'hidden' }}
            ref={moreTextRef}
          >
            +{remainingMeetings} more
          </Typography>
        )}
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Grid display={'flex'} flexDirection={'column'}>
          {meetings.map((meeting, index) => (
            <Chip
              key={index}
              variant={meeting.color}
              label={meeting.title}
              size="small"
              sx={{
                maxWidth: '100%',
                margin: theme.spacing(0.5, 0),
                flexShrink: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
              onClick={(event) => onClickMeeting?.(event, meeting)}
            />
          ))}
        </Grid>
      </Popover>
    </Grid>
  );
};

export default CalendarContentDay;
