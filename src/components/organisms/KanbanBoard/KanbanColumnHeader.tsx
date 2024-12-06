import { Grid, useTheme } from '@mui/material';
import Chip from 'src/components/atoms/Chip/Chip';
import { AvatarAndText } from 'src/components/molecules';
import { IndividualKanbanColumn } from './types';

export interface KanbanColumnHeaderProps {
  column?: IndividualKanbanColumn;
}

const KanbanColumnHeader = ({ column }: KanbanColumnHeaderProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        border: theme.border.appearanceCardHover,
        borderRadius: theme.borderRadius.sm,
        backgroundColor: theme.palette.common.white,
        m: 2,
        padding: theme.spacing(2, 12 / 8),
        alignItems: 'center',
        width: 'auto'
      }}
      gap={2}
    >
      <Grid item flex={1}>
        <Grid
          container
          gap={1}
          alignItems="center"
          {...column?.headerContainerGridItemProps}
        >
          {column?.showDot && (
            <Grid item>
              <Grid
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: column?.titleColor,
                  borderRadius: theme.borderRadius.sm
                }}
              />
            </Grid>
          )}
          <Grid item>
            <AvatarAndText
              title={column?.title}
              titleTypography={{ variant: 'textSmSemibold', color: 'grey.700' }}
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
              {...column?.headerAvatarAndTextProps!}
            />
          </Grid>
          <Grid item>
            <Chip variant="outlined" label={column?.cards.length} />
          </Grid>
        </Grid>
      </Grid>

      {column?.headerEndComp && <Grid item>{column?.headerEndComp}</Grid>}
    </Grid>
  );
};

export default KanbanColumnHeader;
