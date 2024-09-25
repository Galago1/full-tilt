import { Grid, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import MeetingChip, { MeetingChipProps } from './MeetingChip';
import { calculateHeight, ItemTypes } from './helpers';
import { Meeting } from './types';

export interface WeekViewMeetingProps {
  meeting: Meeting;
  onClick?: (event: any, meeting: Meeting) => void;
  slots?: {
    meetingChipProps?: MeetingChipProps;
  };
}

const WeekViewMeeting = ({ meeting, onClick, slots }: WeekViewMeetingProps) => {
  const { meetingChipProps } = slots || {};
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [{}, drag] = useDrag(() => ({
    type: ItemTypes.MEETING,
    item: () => {
      setIsDragging(true);
      return {
        id: meeting.id,
        duration: meeting.duration,
        isDraggable: meeting.isDraggable
      };
    },
    canDrag: meeting.isDraggable,
    collect: (monitor) => {
      if (!monitor.isDragging()) {
        setIsDragging(false);
      }
      return { isDragging: !!monitor.isDragging() };
    }
  }));

  const height = calculateHeight(meeting.duration, theme);
  const heightValue = parseInt(height.replace('px', ''), 10);

  const handleClick = (event: any) => {
    if (!isDragging) {
      onClick?.(event, meeting);
    }
  };

  return (
    <Grid
      ref={drag}
      onClick={handleClick}
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        cursor: 'pointer',
        opacity: isDragging ? 0.5 : 1,
        position: 'absolute',
        maxWidth: `calc(100% - ${theme.spacing(1)})`,
        height: height,
        zIndex: 2
      }}
    >
      <MeetingChip
        {...meetingChipProps}
        meeting={meeting}
        chipSx={{
          height: height,
          alignItems: heightValue <= 15 ? 'center' : 'flex-start',
          margin: theme.spacing(0, 0.5)
        }}
      />
    </Grid>
  );
};
export default WeekViewMeeting;
