import { Grid, useTheme } from '@mui/material';
import { addDays, format, startOfWeek } from 'date-fns';
import { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { DateFormat } from 'src/types/dateFns';
import { ItemTypes } from './helpers';
import { MeetingDragObject } from './MeetingChip';

interface WeekViewTimeSlotProps {
  dayIndex: number;
  time: string;
  children: ReactNode;
  onDropMeeting: (id: string, day: string, time: string) => void;
}

const WeekViewTimeSlot = ({
  dayIndex,
  time,
  children,
  onDropMeeting
}: WeekViewTimeSlotProps) => {
  const theme = useTheme();
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.MEETING,
    canDrop: (item: MeetingDragObject) => item.isDraggable!,
    drop: (item: MeetingDragObject, monitor) => {
      if (item.isDraggable) {
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          const day = format(
            addDays(
              startOfWeek(new Date(item.originalDay), { weekStartsOn: 0 }),
              dayIndex
            ),
            DateFormat.yyyyMMdd
          );
          onDropMeeting(item.id.toString(), day, time);
        }
      }
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() })
  });

  return (
    <Grid
      ref={drop}
      sx={{
        height: theme.spacing(2),
        backgroundColor: isOver ? theme.palette.action.hover : 'transparent',
        zIndex: 1
      }}
    >
      {children}
    </Grid>
  );
};
export default WeekViewTimeSlot;
