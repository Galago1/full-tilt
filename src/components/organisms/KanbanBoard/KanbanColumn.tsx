import { Grid, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop
} from 'react-dnd';
import KanbanCard from './KanbanCard';
import KanbanColumnHeader, {
  KanbanColumnHeaderProps
} from './KanbanColumnHeader';
import { IndividualKanbanColumn } from './types';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface KanbanColumnProps {
  column: IndividualKanbanColumn;
  moveCard: (
    sourceColumnId: string,
    dragIndex: number,
    targetColumnId: string,
    hoverIndex?: number
  ) => void;
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
  index: number;
  handleEditCard: (card: any) => void;
  disableMoveColumn: boolean;
  slots?: {
    kanbanColumnHeaderProps: KanbanColumnHeaderProps;
  };
}

const KanbanColumn = ({
  column,
  moveCard,
  moveColumn,
  index,
  disableMoveColumn,
  handleEditCard,
  slots
}: KanbanColumnProps) => {
  const { kanbanColumnHeaderProps } = slots || {};
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOverEmpty, setIsOverEmpty] = useState(false); // Track if hovering over empty column
  const accept = disableMoveColumn ? ['CARD'] : ['CARD', 'COLUMN'];

  const [{ isOver }, drop] = useDrop({
    accept,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) return;

      if (item.type === 'COLUMN') {
        if (item.id !== column.id) {
          const dragIndex = item.index;
          const hoverIndex = index;
          if (dragIndex === hoverIndex) {
            return;
          }
          moveColumn(dragIndex, hoverIndex);
          item.index = hoverIndex;
        }
      }
      // Show preview when hovering over empty column
      if (column.cards.length === 0 && item.type === 'CARD') {
        setIsOverEmpty(true);
      }
    },
    drop(item: any, monitor: DropTargetMonitor) {
      if (item.type === 'CARD' && !monitor.didDrop()) {
        moveCard(item.columnId, item.index, column.id, undefined);
        item.columnId = column.id;
      }
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver()
    }),
    end() {
      setIsOverEmpty(false);
    }
  } as any) as any;

  const [{ isDragging }, drag] = useDrag({
    type: 'COLUMN',
    item: () => ({ type: 'COLUMN', id: column.id, index }),
    collect: (monitor: DragSourceMonitor) => {
      const isDragging = monitor.isDragging();
      return {
        isDragging
      };
    },
    canDrag: !disableMoveColumn
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <Grid
      ref={ref}
      container
      flexDirection={'column'}
      sx={{
        borderRadius: theme.borderRadius.md,
        border: theme.border.outlinedButton,
        opacity,
        backgroundColor: 'grey.50',
        overflow: 'hidden',
        display: 'flex',
        height: '100%', // Changed from minHeight to height
        maxHeight: '100vh', // Added maxHeight
        flexWrap: 'nowrap',
        pb: 14
      }}
    >
      <Grid item>
        <KanbanColumnHeader column={column} {...kanbanColumnHeaderProps!} />
      </Grid>
      <Grid
        item
        width={'100%'}
        sx={{
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          height: 740,
          pb: 2,
          minWidth: 240
        }}
      >
        {column.cards.map((card, idx) => (
          <KanbanCard
            key={card.id}
            card={card}
            index={idx}
            columnId={column.id}
            moveCard={moveCard}
            handleEditCard={handleEditCard}
          />
        ))}

        {/* Show a placeholder card when dragging over an empty column */}
        {column.cards.length === 0 && (
          <Grid
            container
            sx={{
              padding: theme.spacing(1),
              borderRadius: theme.borderRadius.sm,
              backgroundColor: isOverEmpty
                ? theme.palette.grey[200]
                : 'transparent',
              border: `2px dashed ${theme.palette.primary.main}`,
              height: 120,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
              px: responsiveSpacing
            }}
          >
            {<span>Drop card here</span>}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default KanbanColumn;
