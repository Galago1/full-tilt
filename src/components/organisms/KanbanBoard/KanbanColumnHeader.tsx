import { Grid, useTheme } from '@mui/material';
import { sum } from 'lodash';
import { useMemo, useState } from 'react';
import { Tooltip } from 'src/components/atoms';
import Chip from 'src/components/atoms/Chip/Chip';
import { AvatarAndText } from 'src/components/molecules';
import { Hash01Icon } from 'src/components/particles/theme/icons/General/hash-01';
import { EstimateIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { IndividualKanbanColumn } from '../Kanban/types';
import { attachmentIconSx } from 'src/constants/spacing';

export interface KanbanColumnHeaderProps {
  column: IndividualKanbanColumn;
}

const KanbanColumnHeader = ({ column }: KanbanColumnHeaderProps) => {
  // Support multiple count modes (dynamic chip)
  const countModes =
    column?.countModes && column.countModes.length > 0
      ? column.countModes
      : [
          {
            field: 'estimate',
            label: column.subsequentNoun + ' count',
            icon: <EstimateIcon sx={attachmentIconSx} />,
            type: 'sum' as const,
            noun: column.subsequentNoun,
            calculate: undefined
          },
          {
            field: '',
            label: column.initialNoun + ' count',
            icon: <Hash01Icon sx={attachmentIconSx} />,
            type: 'count' as const,
            noun: column.initialNoun,
            calculate: undefined
          }
        ];

  const [modeIndex, setModeIndex] = useState(0);
  const theme = useTheme();

  // Calculate value for current mode
  const mode = countModes[modeIndex];
  const value = useMemo(() => {
    // Use custom calculate function if provided
    if (mode.calculate) {
      return mode.calculate(column.cards);
    }
    // Fall back to default calculations
    if (mode.type === 'sum' && mode.field) {
      const list = column.cards.map((card) => {
        const v = card[mode.field as keyof typeof card];
        return typeof v === 'number' ? v : 0;
      });
      return sum(list) || 0;
    }
    if (mode.type === 'count') {
      return column.cards.length;
    }
    return 0;
  }, [column.cards, mode]);

  const toggleMode = () => {
    setModeIndex((prev) => (prev + 1) % countModes.length);
  };

  return (
    <Grid
      container
      sx={{
        border: theme.border.appearanceCardHover,
        borderRadius: theme.borderRadius.sm,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(5 / 8, 4 / 8),
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
          {column?.title && (
            <Grid item>
              <AvatarAndText
                alignItems={'center'}
                title={column?.title}
                titleTypography={{
                  variant: 'textSmMedium'
                }}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
                {...column?.headerAvatarAndTextProps!}
              />
            </Grid>
          )}
          {column?.includeHeaderChip && (
            <Grid item>
              <Tooltip title={mode.label}>
                <Chip
                  variant="outlined"
                  icon={mode.icon as any}
                  label={String(value)}
                  onClick={toggleMode}
                  data-testid="kanban-column-header-chip"
                  sx={{
                    cursor: 'pointer',
                    height: 28
                  }}
                />
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </Grid>

      {column?.headerEndComp && <Grid item>{column?.headerEndComp}</Grid>}
    </Grid>
  );
};

export default KanbanColumnHeader;
