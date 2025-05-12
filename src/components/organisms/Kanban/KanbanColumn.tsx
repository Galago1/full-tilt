import { Theme } from '@emotion/react';
import { Collapse, Grid, Grow, SxProps, useTheme } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
  useDragDropManager
} from 'react-dnd';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import KanbanCard from './KanbanCard';
import { isEmpty } from 'lodash';
import KanbanColumnHeader, {
  KanbanColumnHeaderProps
} from '../KanbanBoard/KanbanColumnHeader';
import { IndividualKanbanColumn } from './types';
import DragDropLine from 'src/components/utilities/DragDropLine';

export interface KanbanColumnProps {
  column?: IndividualKanbanColumn;
  visibleCards?: any[];
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
    kanbanColumnHeaderProps?: Partial<KanbanColumnHeaderProps>;
    columnCardsGridSx?: SxProps<Theme>;
    addCardButtonProps?: ButtonProps;
  };
  onClickPlaceholder?: () => void;
}

const KanbanColumn = ({
  column,
  visibleCards,
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
  const [dropLineIndex, setDropLineIndex] = useState<number | null>(null);
  const [newCardId, setNewCardId] = useState<string | null>(null);
  const accept = disableMoveColumn ? ['CARD'] : ['CARD', 'COLUMN'];
  const dragDropManager = useDragDropManager();

  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([]);

  useEffect(() => {
    if (!visibleCards || visibleCards.length === 0) {
      // If no filtering, all cards are visible
      const allCardIds = (column?.cards || [])
        .map((card) => card.id)
        .filter((id): id is string => typeof id === 'string');
      setVisibleCardIds(allCardIds);
    } else {
      // Otherwise, only the specified cards are visible
      const filteredCardIds = visibleCards
        .map((card) => card.id)
        .filter((id): id is string => typeof id === 'string');
      setVisibleCardIds(filteredCardIds);
    }
  }, [visibleCards, column]);

  useEffect(() => {
    const unsubscribe = dragDropManager
      .getMonitor()
      .subscribeToStateChange(() => {
        const isDragging = dragDropManager.getMonitor().isDragging();
        if (!isDragging) {
          setDropLineIndex(null);
        }
      });

    return () => unsubscribe();
  }, [dragDropManager]);

  useEffect(() => {
    if (newCardId !== null) {
      const timer = setTimeout(() => {
        setNewCardId(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [newCardId]);

  const [{ isOver }, drop] = useDrop({
    accept,
    canDrop: (item: any) => {
      if (item.type === 'COLUMN' && item.id === column!.id) {
        return false;
      }
      return true;
    },
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

      if (item.type === 'CARD') {
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) return;

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        const cardElements = Array.from(
          ref.current.querySelectorAll('[data-card-index]')
        );

        if (cardElements.length === 0) {
          setDropLineIndex(0);
          return;
        }

        let targetIndex = 0;
        let foundPosition = false;

        for (let i = 0; i < cardElements.length; i++) {
          const cardElement = cardElements[i] as HTMLElement;
          const cardRect = cardElement.getBoundingClientRect();
          const cardThreshold =
            cardRect.top + cardRect.height / 4 - hoverBoundingRect.top;

          if (hoverClientY < cardThreshold) {
            targetIndex = i;
            foundPosition = true;
            break;
          }
        }

        if (!foundPosition) {
          targetIndex = cardElements.length;
        }

        if (item.columnId === column!.id) {
          if (targetIndex === item.index || targetIndex === item.index + 1) {
            setDropLineIndex(null);
            return;
          }
        }

        setDropLineIndex(targetIndex);
      }
    },
    drop(item: any, monitor: DropTargetMonitor) {
      if (item.type === 'CARD' && !monitor.didDrop()) {
        const targetIndex =
          dropLineIndex !== null ? dropLineIndex : column!.cards.length;

        if (item.columnId !== column!.id) {
          setNewCardId(item.id);
        }

        moveCard!(item.columnId, item.index, column!.id, targetIndex);
        item.columnId = column!.id;

        setDropLineIndex(null);
      }
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver()
    })
  } as any) as any;

  useEffect(() => {
    if (!isOver) {
      setDropLineIndex(null);
    }
  }, [isOver]);

  const [{ isDragging }, drag] = useDrag({
    type: 'COLUMN',
    item: () => ({ type: 'COLUMN', id: column!.id, index }),
    collect: (monitor: DragSourceMonitor) => {
      const isDragging = monitor.isDragging();
      return {
        isDragging
      };
    },
    canDrag: !disableMoveColumn,
    end: () => {
      setDropLineIndex(null);
    }
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  // Render drop line
  const renderDropLine = (position: number) => {
    if (dropLineIndex !== position) return null;

    return (
      <DragDropLine 
        show={true} 
        position={position === 0 ? 'top' : 'bottom'} 
        timeout={200}
      />
    );
  };

  return (
    <Grid
      ref={ref}
      container
      flexDirection={'column'}
      sx={{
        borderRadius: theme.borderRadius.md,
        border: theme.border.outlinedButton,
        backgroundColor: 'grey.50',
        opacity,
        overflow: 'visible',
        display: 'flex',
        height: '100%',
        maxHeight: '100vh',
        flexWrap: 'nowrap',
        pb: 14,
        px: 0,
        pt: 1,
        mb: 2
      }}
    >
      <Grid item sx={{ px: 1 }}>
        <KanbanColumnHeader
          column={column!}
          {...(kanbanColumnHeaderProps || {})}
        />
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
            pt: 1,
            px: 1,
            position: 'relative',
            ...columnCardsGridSx
          }}
        >
          {!isEmpty(column!.cards) ? (
            <Grid container flexDirection={'column'} position="relative">
              {renderDropLine(0)}

              <TransitionGroup
                component={Grid}
                container
                flexDirection="column"
                gap={1}
              >
                {column!.cards.map((card, idx) => (
                  <Collapse
                    key={card.id}
                    timeout={{
                      enter: 300,
                      exit: 300
                    }}
                    in={
                      typeof card.id === 'string' &&
                      visibleCardIds.includes(card.id)
                    }
                    unmountOnExit
                    style={{ marginBottom: 0 }}
                  >
                    <Grid
                      item
                      data-card-index={idx}
                      sx={{
                        position: 'relative'
                      }}
                    >
                      {idx > 0 && renderDropLine(idx)}

                      <Grow
                        in={true}
                        timeout={newCardId === card.id ? 500 : 0}
                        style={{ transformOrigin: 'center top' }}
                      >
                        <div>
                          <KanbanCard
                            card={card}
                            index={idx}
                            columnId={column?.id || ''}
                            moveCard={moveCard || (() => {})}
                            handleEditCard={handleEditCard || (() => {})}
                            sx={card.sx}
                          />
                        </div>
                      </Grow>
                    </Grid>
                  </Collapse>
                ))}
              </TransitionGroup>

              {renderDropLine(column!.cards.length)}
            </Grid>
          ) : (
            column!.showDragOrAdd && (
              <Grid
                container
                onClick={onClickPlaceholder}
                flexDirection={'column'}
                sx={{
                  px: 0,
                  pt: 0,
                  position: 'relative'
                }}
              >
                {renderDropLine(0)}

                <Grow in={true} timeout={300}>
                  <Grid
                    item
                    sx={{
                      padding: theme.spacing(1),
                      borderRadius: theme.borderRadius.sm,
                      border: `2px dashed ${theme.palette.primary.main}`,
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={onClickPlaceholder}
                  >
                    {<span>{column!.showDragOrAddText || 'Drag or add'}</span>}
                  </Grid>
                </Grow>
              </Grid>
            )
          )}

          {addCardButtonProps && (
            <Grid container flexDirection={'column'}>
              <Button {...addCardButtonProps} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default KanbanColumn;
