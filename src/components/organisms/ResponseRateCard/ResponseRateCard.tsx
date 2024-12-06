import {
  Box,
  CircularProgress,
  Grid,
  GridProps,
  Theme,
  Typography
} from '@mui/material';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import TablePaginationWave, {
  TablePaginationWaveProps
} from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import Card from 'src/components/organisms/Card/Card';
import DataGrid, {
  DataGridProps
} from 'src/components/organisms/DataGrid/DataGrid';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import ResponseRateTopCard from './ResponseRateTopCard';
import ResponseRateTopCardChange from './ResponseRateTopCardChange';
import { useResponseRateCard } from './hooks';

const cardSx = {
  border: (theme: Theme) => theme.border.basicBox,
  borderRadius: (theme: Theme) => theme.borderRadius.md,
  boxShadow: (theme: Theme) => theme.customShadows.xs
};

export interface ResponseRateCardProps {
  totalStandUps: number;
  totalStandUpsChange: number;
  onTrackRate: number;
  onTrackRateChange: number;
  blockedRate: number;
  blockedRateChange: number;
  avgResponseRate: number;
  avgResponseRateChange: number;
  lineChartComp: JSX.Element;
  slots: {
    dataGridProps: DataGridProps;
    dataGridGridItemProps: GridProps;
    tablePaginationWaveProps: TablePaginationWaveProps;
  };
  responseCardDateForm: JSX.Element;
  showChange?: boolean;
}

const ResponseRateCard = ({
  totalStandUps,
  totalStandUpsChange,
  onTrackRate,
  onTrackRateChange,
  blockedRate,
  blockedRateChange,
  avgResponseRate,
  avgResponseRateChange,
  responseCardDateForm,
  lineChartComp,
  showChange,
  slots
}: ResponseRateCardProps) => {
  const {
    dataGridProps,
    tablePaginationWaveProps,
    dataGridGridItemProps,
    theme
  } = useResponseRateCard({
    slots
  });

  return (
    <Card showActions={false} sx={cardSx}>
      <Grid container flexDirection={'column'} gap={responsiveSpacing}>
        <Grid item container gap={responsiveSpacing}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            gap={responsiveSpacing}
          >
            <Grid item display={'flex'} alignItems={'flex-start'}>
              <Typography variant="textLgSemibold">
                Response Rate Overview
              </Typography>
            </Grid>
            {responseCardDateForm && (
              <Grid item alignItems={'center'}>
                {responseCardDateForm}
              </Grid>
            )}
          </Grid>

          <Grid container spacing={3} mb={0}>
            <Grid item xs={12} sm={4}>
              <ResponseRateTopCard
                title={'Total Stand Ups'}
                rate={totalStandUps}
                rateChange={totalStandUpsChange}
                suffix={''}
                rateChangeSuffix="%"
                showChange={showChange!}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ResponseRateTopCard
                title={'On Track Rate'}
                rate={onTrackRate}
                rateChange={onTrackRateChange}
                suffix="%"
                rateChangeSuffix="%"
                showChange={showChange!}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ResponseRateTopCard
                title={'Blocked Rate'}
                rate={blockedRate}
                rateChange={blockedRateChange}
                suffix="%"
                rateChangeSuffix="%"
                showChange={showChange!}
              />
            </Grid>
          </Grid>

          <Grid
            container
            gap={3}
            my={0}
            alignItems={'center'}
            flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
          >
            <Grid item sm={12} md={4}>
              <Grid
                container
                direction="column"
                alignItems="center"
                gap={responsiveSpacing}
              >
                <Grid item>
                  <Grid container position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={100}
                      size={200}
                      thickness={2}
                      style={{ color: theme.palette.grey[200] }}
                    />

                    <CircularProgress
                      variant="determinate"
                      value={avgResponseRate}
                      size={200}
                      thickness={2}
                      sx={{
                        '& .MuiCircularProgress': {
                          borderRadius: '8px'
                        },
                        color: '#06AED4'
                      }}
                      style={{
                        position: 'absolute',
                        left: 0
                      }}
                    />
                    <Grid
                      container
                      position="absolute"
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="displayMdSemibold"
                        component="div"
                        color="text.secondary"
                      >
                        {avgResponseRate}%
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="textMdSemibold" mt={1}>
                    Avg Response Rate
                  </Typography>
                  <Grid container alignItems={'center'}>
                    <ResponseRateTopCardChange
                      rateChange={avgResponseRateChange}
                      rateChangeSuffix={'%'}
                      showChange={showChange!}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={8}>
              <Box
                sx={{
                  overflowX: 'auto',
                  width: '100%'
                }}
              >
                {lineChartComp}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item {...dataGridGridItemProps}>
          <AvatarAndText
            title={'Response Rate Per Team'}
            titleTypography={{ variant: 'textXlRegular' }}
          />
          <DataGrid {...dataGridProps} />
          <TablePaginationWave {...tablePaginationWaveProps} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResponseRateCard;
