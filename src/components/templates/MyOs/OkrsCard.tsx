import { Grid, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { Fragment } from 'react/jsx-runtime';
import Button from 'src/components/atoms/Button/Button';
import Divider from 'src/components/atoms/Divider/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import CircularProgressIndicator, {
  CircularProgressIndicatorSize
} from 'src/components/molecules/CircularProgressIndicator/CircularProgressIndicator';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  ArrowUpRightIcon,
  CalendarIcon,
  TriangleIcon,
  Users01Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Okr } from './types';

interface ContentProps {
  okrs: Okr[];
  loading: boolean;
}
const Content = ({ okrs, loading }: ContentProps) => {
  const theme = useTheme();
  if (!okrs || loading || (!loading && isEmpty(okrs)))
    return (
      <Grid
        item
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100% - 70.5px)',
            minHeight: '140px'
          }
        }}
      >
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No okrs', subtitle: '' }
          }
        >
          {loading && <LoadingIndicator />}
        </EmptyState>
      </Grid>
    );

  return (
    <Grid
      item
      container
      flexDirection="row"
      sx={{
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        // 24 + 30.5 + 16
        height: {
          xs: '100%',
          sm: 'calc(100% - 70.5px)'
        },

        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: '280px',
        minHeight: '280px',
        pb: 8
      }}
      gap={2}
    >
      {okrs.map((okr, index) => (
        <Fragment key={okr.id}>
          <Grid item xs={12} onClick={okr.onClick}>
            <Grid container>
              <Grid item flex={1}>
                <Grid
                  container
                  alignItems={'center'}
                  gap={1}
                  flexWrap={'nowrap'}
                >
                  <Grid item>
                    <CircularProgressIndicator
                      size={CircularProgressIndicatorSize.XSMALL}
                      value={okr.percentage}
                      hideValue={true}
                    />
                  </Grid>

                  <Grid item container flexDirection={'column'}>
                    <Grid item>
                      <Typography variant="textMdRegular">
                        {okr.title}
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} gap={1} mt={1.5}>
                      <CalendarIcon sx={{ color: theme.palette.grey[400] }} />
                      <Typography variant="textSmMedium">
                        Quarter {okr.quarter}
                      </Typography>
                      <Users01Icon sx={{ color: theme.palette.grey[400] }} />
                      <Typography variant="textSmMedium">
                        {okr.people}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item display={'flex'} alignSelf={'flex-start'}>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={okr.onClick}
                  sx={{ '&': { minWidth: 'auto' } }}
                  label={<ArrowUpRightIcon />}
                />
              </Grid>
            </Grid>
            {index !== okrs.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export interface OkrsCardProps extends Omit<CardProps, 'slots'> {
  okrs?: Okr[];
  cardSlots: CardProps['slots'];
  loading?: boolean;
}

export const OkrsCard = ({
  okrs = [],
  cardSlots,
  loading,
  ...props
}: OkrsCardProps) => {
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0 },
    pt: 0,
    height: '100%',
    overflow: 'hidden'
  };
  return (
    <Card
      showActions={false}
      {...props}
      sx={{
        // pb: 2,
        paddingBottom: '16px',
        height: '100%',
        // 596px - 258.25px - 16px = 321.75px
        // minHeight: 'calc(596px - 258.25px - 16px)',
        // 596 - 258.25 - 16 - 30.5 = 290.25
        // maxHeight: 290.25,
        maxHeight: 310.25,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      slots={{
        boxProps: { height: '100%', overflow: 'hidden' },
        cardContentProps: { sx: contentSx },
        ...cardSlots
      }}
    >
      <Grid
        container
        flexDirection="column"
        flexWrap={'nowrap'}
        gap={2}
        sx={{
          height: '100%',
          overflow: 'hidden'
          // pb: 2
        }}
      >
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            gap={1}
            leftIcon={<TriangleIcon />}
            title={`My OKRs`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
        </Grid>
        <Content okrs={okrs} loading={loading!} />
      </Grid>
    </Card>
  );
};
