import { Grid, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { Fragment } from 'react/jsx-runtime';
import Button from 'src/components/atoms/Button/Button';
import Divider from 'src/components/atoms/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Digest } from './types';
import { CalendarIcon } from 'src/components/particles/theme/icons/Time/calendar';
import { ArrowUpRightIcon } from 'src/components/particles/theme/icons/Arrows/arrow-up-right';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { BookOpen01Icon } from 'src/components/particles/theme/icons/Education/book-open-01';
import { ZapIcon } from 'src/components/particles/theme/icons/General/zap';
import { Headphones01Icon } from 'src/components/particles/theme/icons/MediaAndDevices/headphones-01';

interface ContentProps {
  digest: Digest[];
  firstDigestSubtitle: string;
  loading: boolean;
  onClickEmptyState?: () => void;
}
const Content = ({
  digest,
  firstDigestSubtitle,
  loading,
  onClickEmptyState
}: ContentProps) => {
  if (!digest || loading || (!loading && isEmpty(digest))) {
    if (!loading && isEmpty(digest))
      return (
        <BasicEmptyState
          icon={loading ? null : <ZapIcon />}
          title={loading ? '' : `First Digest`}
          subtitle={loading ? '' : firstDigestSubtitle}
          emptyStateHeight={'auto'}
          slots={{
            gridSx: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex'
            }
          }}
          buttonProps={
            !loading && onClickEmptyState
              ? {
                  onClick: onClickEmptyState,
                  label: 'Add Digest',
                  variant: 'outlined',
                  color: 'secondary',
                  sx: { mt: 2 }
                }
              : undefined
          }
        />
      );
    return (
      <BasicEmptyState
        icon={loading ? null : <CalendarIcon />}
        title={loading ? '' : 'No Digests'}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
          }
        }}
        buttonProps={
          !loading && onClickEmptyState
            ? {
                onClick: onClickEmptyState,
                label: 'Add Digest',
                variant: 'outlined',
                color: 'secondary',
                sx: { mt: 2 }
              }
            : undefined
        }
      >
        {loading && <LoadingIndicator />}
      </BasicEmptyState>
    );
  }

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
      gap={0}
    >
      {digest.map((story, index) => (
        <Fragment key={story.id}>
          <Grid
            item
            xs={12}
            onClick={story.onClick}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: 'grey.50'
              },
              // pt: index === 0 ? 0 : 2
              pt: 2
            }}
          >
            <Grid container>
              <Grid item flexGrow={1}>
                <Typography variant="textSmRegular">{story.date}</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  color="secondary"
                  sx={{ '&': { minWidth: 'auto' } }}
                  label={<ArrowUpRightIcon />}
                />
              </Grid>
              <Grid item container flexDirection="column">
                <Grid item my={0.5}>
                  <Typography variant="textMdRegular">{story.title}</Typography>
                </Grid>
                <Grid item>
                  <Grid container gap={1}>
                    <Grid item>
                      <AvatarAndText
                        gap={1}
                        leftIcon={<BookOpen01Icon />}
                        title={`${story.readLength} read`}
                        titleTypography={{ variant: 'textSmRegular' }}
                      />
                    </Grid>
                    <Grid item>
                      <AvatarAndText
                        gap={1}
                        leftIcon={<Headphones01Icon />}
                        title={`${story.listenLength} listen`}
                        titleTypography={{ variant: 'textSmRegular' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {index !== digest.length - 1 && <Divider sx={{ mt: 1 }} />}
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export interface LatestDigestCardProps extends Omit<CardProps, 'slots'> {
  digest?: Digest[];
  firstDigestSubtitle: string;
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
}

export const LatestDigestCard = ({
  digest = [],
  firstDigestSubtitle,
  cardSlots,
  onClick,
  loading,
  onClickEmptyState,
  onHeaderClick,
  ...props
}: LatestDigestCardProps) => {
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 2 },
    pt: 0,
    height: '100%'
  };
  return (
    <Card
      showActions={false}
      sx={{
        height: '100%',
        // pb: 2,
        // 596px - 258.25px - 16px = 321.75px
        // minHeight: 'calc(596px - 258.25px - 16px)',
        // 596 - 258.25 - 16 - 30.5 = 290.25
        // maxHeight: 290.25,
        maxHeight: 310.25,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      {...props}
      slots={{
        boxProps: { height: '100%' },
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
        <Grid item display="flex" alignItems="center">
          <AvatarAndText
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<ZapIcon />}
            leftIconGridProps={{ display: 'flex' }}
            title={'Latest Digest'}
            titleTypography={{ variant: 'textLgSemibold' }}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          digest={digest}
          firstDigestSubtitle={firstDigestSubtitle}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
        />
      </Grid>
    </Card>
  );
};
