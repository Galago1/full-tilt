import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Chip } from 'src/components/atoms';
import { ItemTypes } from './helpers';
import { Meeting } from './types';

export interface MeetingChipProps {
  meeting?: Meeting;
  chipSx?: SxProps<Theme>;
  onClick?: (event: any, meeting: Meeting) => void;
}
export interface MeetingDragObject {
  id: string;
  originalDay: string;
  time: string | undefined;
  isDraggable: boolean;
}

const MeetingChip = ({ meeting, chipSx, onClick }: MeetingChipProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const [{}, drag] = useDrag(() => ({
    type: ItemTypes.MEETING,
    item: () => {
      setIsDragging(true);
      return {
        id: meeting?.id,
        originalDay: meeting?.day,
        time: meeting?.time,
        isDraggable: meeting?.isDraggable
      } as MeetingDragObject;
    },
    canDrag: meeting?.isDraggable,
    collect: (monitor) => {
      if (!monitor.isDragging()) {
        setIsDragging(false);
      }
      return { isDragging: !!monitor.isDragging() };
    }
  }));
  const theme = useTheme();

  const handleClick = (event: any) => {
    if (!isDragging) {
      onClick?.(event, meeting!);
    }
  };

  return (
    <Grid
      ref={drag}
      onClick={handleClick}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        paddingBottom: theme.spacing(0.5)
      }}
    >
      <Chip
        variant={meeting?.color}
        label={meeting?.title}
        size="small"
        sx={{
          maxWidth: '100%',
          //   marginTop: theme.spacing(0.5),
          flexShrink: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          // fontSize: 14,
          ...chipSx
        }}
      />
    </Grid>
  );
};

export default MeetingChip;
