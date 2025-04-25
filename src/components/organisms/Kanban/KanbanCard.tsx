import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { AvatarAndText } from 'src/components/molecules';
import { KanbanColumnCard } from './types';
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

  const [{ isDragging }, drag] = useDrag({
    type: CARD,
    item: () => ({ type: CARD, id: card.id, index, columnId }),
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(ref);

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

  return (
    <Grid
      container
      ref={ref}
      tabIndex={0}
      flexDirection={'column'}
      sx={{
        padding: theme.spacing(8 / 8, 0),
        borderRadius: theme.borderRadius.md,
        border: theme.border.appearanceCardHover,
        backgroundColor: theme.palette.common.white,
        cursor: 'pointer',
        opacity,
        width: 'auto',
        position: 'relative',
        zIndex: 1,
        margin: '0px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[2]
        },
        '&:focus-visible': {
          outline: 'none',
          border: `2px solid ${theme.palette.primary.main}`,
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.light}`,
          transform: 'translateY(-2px)'
        },
        ...(isDragging && {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows[4]
        }),
        ...(greyMegaHoverStyle as any),
        ...sx
      }}
      onClick={() => {
        handleEditCard(card);
      }}
      gap={1.25}
    >
      <Grid item>
        <Grid container flexDirection={'column'} gap={0.25}>
          {card.headerActionsAvatarAndTextProps && (
            <Grid
              item
              flex={1}
              sx={{
                padding: theme.spacing(0, 4 / 8)
              }}
            >
              <AvatarAndText {...card.headerActionsAvatarAndTextProps!} />
            </Grid>
          )}

          {(card.title || card.bodyAvatarAndTextProps) && (
            <Grid
              item
              flex={1}
              sx={{
                padding: theme.spacing(0, 8 / 8)
              }}
            >
              <AvatarAndText
                title={card.title}
                titleTypography={{
                  sx: { wordBreak: 'break-word' },
                  variant: 'textMdMedium',
                  color: 'text.primary'
                }}
                subtitle={card.description}
                subtitleTypography={{
                  sx: { wordBreak: 'break-word' },
                  variant: 'textSmMedium',
                  color: 'text.secondary'
                }}
                {...card.bodyAvatarAndTextProps!}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      {(card.summary || card.footerAvatarAndTextProps) && (
        <Grid
          item
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          {...card.footerGridProps}
          sx={{
            ...card.footerGridProps?.sx,
            padding: theme.spacing(0, 8 / 8)
          }}
        >
          <AvatarAndText
            title={card.summary}
            titleTypography={{
              variant: 'textSmMedium',
              color: 'text.secondary',
              sx: { wordBreak: 'break-word' }
            }}
            {...card.footerAvatarAndTextProps!}
          />
        </Grid>
      )}

      {card.footerComponent && (
        <Grid
          item
          sx={{
            ...card.footerComponentGridProps?.sx,
            padding: theme.spacing(0, 8 / 8)
          }}
          {...card.footerComponentGridProps}
        >
          {card.footerComponent}
        </Grid>
      )}
    </Grid>
  );
};

export default KanbanCard;
