import { Grid, useTheme } from '@mui/material';
import { useDrag } from 'react-dnd';
import { Meeting } from './types';
import { calculateHeight, ItemTypes } from './helpers';
import MeetingChip, { MeetingChipProps } from './MeetingChip';
import { useState } from 'react';

export interface DayViewMeetingProps {
  meeting: Meeting;
  onClick?: (event: any, meeting: Meeting) => void;
  slots?: {
    meetingChipProps?: MeetingChipProps;
  };
}

const DayViewMeeting = ({ meeting, onClick, slots }: DayViewMeetingProps) => {
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
        overflow: 'visible',
        cursor: 'pointer',
        opacity: isDragging ? 0.5 : 1,
        position: 'absolute',
        width: '100%',
        maxWidth: `calc(100% - ${theme.spacing(1)})`,
        height: height,
        zIndex: 2
      }}
    >
      <MeetingChip
        meeting={meeting}
        chipSx={{
          height: height,
          width: '100%',
          alignItems: heightValue <= 15 ? 'center' : 'flex-start',
          mx: 0.5,
          fontSize: 14
        }}
        {...meetingChipProps}
      />
    </Grid>
  );
};

export default DayViewMeeting;
