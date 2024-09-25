import { Grid, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './helpers';
import { MeetingDragObject } from './MeetingChip';

interface DayViewTimeSlotProps {
  time: string;
  children: ReactNode;
  onDropMeeting: (id: string, day: string, time: string) => void;
}

const DayViewTimeSlot = ({
  time,
  children,
  onDropMeeting
}: DayViewTimeSlotProps) => {
  const theme = useTheme();
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.MEETING,
    canDrop: (item: MeetingDragObject) => item.isDraggable!,
    drop: (item: MeetingDragObject) => {
      if (item.isDraggable) {
        onDropMeeting(item.id.toString(), item.originalDay, time);
      }
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() })
  });

  return (
    <Grid
      ref={drop}
      sx={{
        height: theme.spacing(1.875),
        width: '100%',
        backgroundColor: isOver ? theme.palette.action.hover : 'transparent',
        zIndex: 1,
        overflow: 'visible'
      }}
    >
      {children}
    </Grid>
  );
};

export default DayViewTimeSlot;
