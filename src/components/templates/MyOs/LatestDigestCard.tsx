import { Grid, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { Fragment } from 'react/jsx-runtime';
import Button from 'src/components/atoms/Button/Button';
import Divider from 'src/components/atoms/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  Headphones01Icon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Story } from './types';

interface ContentProps {
  digest: Story[];
  loading: boolean;
}
const Content = ({ digest, loading }: ContentProps) => {
  if (!digest || loading || (!loading && isEmpty(digest)))
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
          spacing={0}
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No Digests', subtitle: '' }
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
      {digest.map((story, index) => (
        <Fragment key={story.id}>
          <Grid item xs={12} onClick={story.onClick}>
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
                        leftIcon={<BookOpenIcon />}
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
  digest?: Story[];
  cardSlots: CardProps['slots'];
  loading?: boolean;
}

export const LatestDigestCard = ({
  digest = [],
  cardSlots,
  onClick,
  loading,
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
            gap={1}
            leftIcon={<ZapIcon />}
            title={`Latest Digest`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
        </Grid>
        <Content digest={digest} loading={loading!} />
      </Grid>
    </Card>
  );
};
