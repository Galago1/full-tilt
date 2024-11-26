import { Grid, GridProps } from '@mui/material';
import type { MediaCardWithContentProps } from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent';
import MediaCardWithContent from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const columnsSizes = {
  6: {
    xl: 2,
    lg: 3,
    md: 4,
    sm: 3
  },
  4: {
    xl: 3,
    lg: 3,
    md: 4,
    sm: 6
  },
  3: {
    xl: 4,
    lg: 4,
    md: 4,
    sm: 6
  },
  2: {
    xl: 6,
    lg: 6,
    md: 6,
    sm: 6
  },
  1: {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12
  }
} as any;

interface ContentProps {
  columns: number;
  card: MediaCardWithContentProps;
}
const Content = ({ columns, card }: ContentProps) => {
  return (
    <Grid
      item
      xl={columnsSizes[columns].xl}
      lg={columnsSizes[columns].lg}
      md={columnsSizes[columns].md}
      sm={columnsSizes[columns].sm}
      xs={12}
      sx={{
        cursor: 'pointer',
        '&.MuiGrid-item': {
          paddingX: { xs: 1, sm: 1.5 },
          pb: responsiveSpacing
        }
      }}
    >
      <MediaCardWithContent {...card} />
    </Grid>
  );
};

export interface CardListProps extends GridProps {
  /**
   * Card list
   */
  cards: MediaCardWithContentProps[];
  /**
   * col to span
   */
  col?: number;
}

const CardList = ({ cards, col = 4, ...props }: CardListProps) => {
  return (
    <Grid container {...props} sx={{ flexGrow: 1 }}>
      {cards.map((card: MediaCardWithContentProps, index: number) => {
        return (
          <Content
            key={`card-list-index[${index}]`}
            columns={col}
            card={card}
          />
        );
      })}
    </Grid>
  );
};
export default CardList;
