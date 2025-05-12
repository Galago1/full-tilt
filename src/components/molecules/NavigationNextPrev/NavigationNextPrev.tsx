import { Grid, Typography } from '@mui/material';
import Button from 'src/components/atoms/Button/Button';
import { ChevronDownIcon } from 'src/components/particles/theme/icons/Arrows/chevron-down';
import { ChevronUpIcon } from 'src/components/particles/theme/icons/Arrows/chevron-up';
import { attachmentIconSx } from 'src/constants/spacing';

export interface NavigationNextPrevProps {
  currentPosition: number;
  totalCount: number;
  goToPrevious: () => void;
  goToNext: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}
const NavigationNextPrev = ({
  currentPosition,
  totalCount,
  goToPrevious,
  goToNext,
  hasNext,
  hasPrevious
}: NavigationNextPrevProps) => {
  return (
    <Grid container alignItems="center" gap={1}>
      <Grid item>
        <Typography
          variant="textSmSemibold"
          color="text.primary"
          component="span"
        >
          {currentPosition || '0'}
          <Typography
            variant="textSmRegular"
            color="text.secondary"
            component="span"
          >
            {` / ${totalCount || '0'}`}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container gap={0.5}>
          <Grid item>
            <Button
              aria-label="Go to previous item"
              size="small"
              variant="outlined"
              color="secondary"
              sx={{ minWidth: 'auto', p: 0.375 }}
              onClick={goToPrevious}
              disabled={!hasPrevious}
            >
              <ChevronUpIcon sx={attachmentIconSx} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              aria-label="Go to next item"
              size="small"
              variant="outlined"
              color="secondary"
              sx={{ minWidth: 'auto', p: 0.375 }}
              onClick={goToNext}
              disabled={!hasNext}
            >
              <ChevronDownIcon sx={attachmentIconSx} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationNextPrev;
