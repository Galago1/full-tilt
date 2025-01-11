import { Theme } from '@emotion/react';
import { Grid, SxProps, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop
} from 'react-dnd';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import KanbanCard from './KanbanCard';
import KanbanColumnHeader, {
  KanbanColumnHeaderProps
} from './KanbanColumnHeader';
import { IndividualKanbanColumn } from './types';
import { isEmpty } from 'lodash';

export interface KanbanColumnProps {
  column?: IndividualKanbanColumn;
  moveCard?: (
    sourceColumnId: string,
    dragIndex: number,
    targetColumnId: string,
    hoverIndex?: number
  ) => void;
  moveColumn?: (dragIndex: number, hoverIndex: number) => void;
  index?: number;
  handleEditCard?: (card: any) => void;
  disableMoveColumn?: boolean;
  slots?: {
    kanbanColumnHeaderProps?: KanbanColumnHeaderProps;
    columnCardsGridSx?: SxProps<Theme>;
    addCardButtonProps?: ButtonProps;
  };
  onClickPlaceholder?: () => void;
}

const KanbanColumn = ({
  column,
  moveCard,
  moveColumn,
  index,
  disableMoveColumn,
  handleEditCard,
  slots,
  onClickPlaceholder
}: KanbanColumnProps) => {
  const { kanbanColumnHeaderProps, columnCardsGridSx, addCardButtonProps } =
    slots || {};
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOverEmpty, setIsOverEmpty] = useState(false); // Track if hovering over empty column
  const accept = disableMoveColumn ? ['CARD'] : ['CARD', 'COLUMN'];

  const [{ isOver }, drop] = useDrop({
    accept,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) return;

      if (item.type === 'COLUMN') {
        if (item.id !== column!.id) {
          const dragIndex = item.index;
          const hoverIndex = index;
          if (dragIndex === hoverIndex) {
            return;
          }
          moveColumn!(dragIndex, hoverIndex!);
          item.index = hoverIndex;
        }
      }
      // Show preview when hovering over empty column
      if (column!.cards.length === 0 && item.type === 'CARD') {
        setIsOverEmpty(true);
      }
    },
    drop(item: any, monitor: DropTargetMonitor) {
      if (item.type === 'CARD' && !monitor.didDrop()) {
        moveCard!(item.columnId, item.index, column!.id, undefined);
        item.columnId = column!.id;
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
    item: () => ({ type: 'COLUMN', id: column!.id, index }),
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
      gap={2}
      sx={{
        borderRadius: theme.borderRadius.md,
        border: theme.border.outlinedButton,
        backgroundColor: 'grey.50',
        opacity,
        overflow: 'hidden',
        display: 'flex',
        height: '100%', // Changed from minHeight to height
        maxHeight: '100vh', // Added maxHeight
        flexWrap: 'nowrap',
        pb: 14,
        p: 2
      }}
    >
      <Grid item>
        <KanbanColumnHeader column={column} {...kanbanColumnHeaderProps!} />
      </Grid>
      <Grid item>
        <Grid
          container
          item
          width={'100%'}
          flexDirection={'column'}
          sx={{
            overflowY: 'auto',
            minHeight: 0,
            height: 740,
            minWidth: 240,
            // px: 2, // Add horizontal padding
            // pt: 2, // Add top padding
            // pb: 4, // Add bottom padding
            // mx: -2, // Negative margin to offset parent padding
            // mt: -2, // Negative margin to offset parent padding
            ...columnCardsGridSx
          }}
          gap={2}
        >
          {!isEmpty(column!.cards) && (
            <Grid container flexDirection={'column'} gap={2}>
              {column!.cards.map((card, idx) => (
                <KanbanCard
                  key={card.id}
                  card={card}
                  index={idx}
                  columnId={column!.id}
                  moveCard={moveCard!}
                  handleEditCard={handleEditCard!}
                  sx={card.sx}
                />
              ))}
            </Grid>
          )}

          {/* Show a placeholder card when dragging over an empty column */}
          {column!.showDragOrAdd && (
            <Grid
              container
              onClick={onClickPlaceholder}
              flexDirection={'column'}
              sx={{
                px: 0,
                pt: 0
              }}
            >
              <Grid
                item
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

                  cursor: 'pointer'
                }}
                onClick={onClickPlaceholder}
              >
                {<span>{column!.showDragOrAddText || 'Drag or add'}</span>}
              </Grid>
            </Grid>
          )}
          {addCardButtonProps && (
            <Grid
              container
              flexDirection={'column'}
              sx={{
                px: 2
              }}
            >
              <Button {...addCardButtonProps} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default KanbanColumn;
