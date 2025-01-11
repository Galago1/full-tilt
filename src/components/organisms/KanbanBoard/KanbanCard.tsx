import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop
} from 'react-dnd';
import { AvatarAndText } from 'src/components/molecules';
import { KanbanColumnCard } from './types';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { greyMegaHoverStyle } from 'src/utils/greyMegaHoverStyle';
const CARD = 'CARD';

interface KanbanCardProps {
  card: KanbanColumnCard;
  index: number;
  columnId: string;
  moveCard: (
    sourceColumnId: string,
    dragIndex: number,
    targetColumnId: string,
    hoverIndex: number
  ) => void;
  handleEditCard: (card: any) => void;
  sx?: SxProps<Theme>;
}

const KanbanCard = ({
  card,
  index,
  columnId,
  moveCard,
  handleEditCard,
  sx
}: KanbanCardProps) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const [, drop] = useDrop({
    accept: CARD,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumnId = item.columnId;
      const targetColumnId = columnId;

      if (dragIndex === hoverIndex && sourceColumnId === targetColumnId) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(sourceColumnId, dragIndex, targetColumnId, hoverIndex);
      item.index = hoverIndex;
      item.columnId = targetColumnId;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: CARD,
    item: () => ({ type: CARD, id: card.id, index, columnId }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  // TODO: Need to come back to this.
  // This listener is bleeding into input typing events.
  // Need to figure out a way to trigger this conditionally
  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (isFocused) {
  //       if (event.key === 'e') {
  //         event.preventDefault();
  //         handleEditCard(card);
  //       }
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [isFocused, handleEditCard, card]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Grid
      container
      ref={ref}
      tabIndex={0}
      flexDirection={'column'}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        padding: isFocused
          ? theme.spacing(10 / 8, 14 / 8)
          : theme.spacing(12 / 8, 2),
        borderRadius: theme.borderRadius.md,
        border: theme.border.appearanceCardHover,
        backgroundColor: theme.palette.common.white,
        cursor: 'pointer',
        opacity,
        width: 'auto',
        // position: 'relative', // Add this
        // zIndex: theme.zIndex.appBar, // Add this
        // margin: '2px', // Add this to give space for shadow
        ...(greyMegaHoverStyle as any),
        ...sx
      }}
      onClick={() => {
        handleEditCard(card);
      }}
      gap={responsiveSpacing}
    >
      <Grid item flex={1}>
        <AvatarAndText
          title={card.title}
          titleTypography={{
            sx: { wordBreak: 'break-word' }
          }}
          subtitle={card.description}
          subtitleTypography={{
            sx: { wordBreak: 'break-word' }
          }}
          {...card.bodyAvatarAndTextProps!}
        />
      </Grid>
      <Grid
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        {...card.footerGridProps}
      >
        <AvatarAndText
          title={card.summary || card.title}
          titleTypography={{
            variant: 'textSmSemibold',
            color: 'text.secondary',
            sx: { wordBreak: 'break-word' }
          }}
          {...card.footerAvatarAndTextProps!}
        />
      </Grid>
    </Grid>
  );
};

export default KanbanCard;
