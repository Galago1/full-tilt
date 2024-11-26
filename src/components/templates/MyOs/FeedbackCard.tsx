import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  ThumbsUpIcon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent, {
  SharedListCardContentProps
} from './SharedListCardContent';
import { Feedback } from './types';

interface ContentProps {
  feedback: Feedback[];
  sharedListCardContentProps: SharedListCardContentProps;
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  feedback,
  sharedListCardContentProps,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ContentProps) => {
  if (!feedback || loading || (!loading && isEmpty(feedback)))
    return (
      <BasicEmptyState
        icon={loading ? null : <ThumbsUpIcon />}
        title={loading ? '' : `No Feedback`}
        subtitle={loading ? '' : emptyStateSubtitle}
        emptyStateHeight={'auto'}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            p: 0,
            pb: responsiveSpacing
          }
        }}
        buttonProps={
          !loading && onClickEmptyState
            ? {
                label: 'Add Feedback',
                variant: 'outlined',
                color: 'secondary',
                onClick: onClickEmptyState,
                sx: { mt: 2 }
              }
            : undefined
        }
      >
        {loading && <LoadingIndicator />}
      </BasicEmptyState>
    );
  return (
    <Grid
      item
      container
      sx={{
        flex: 1,

        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: '280px',
        pb: responsiveSpacing
      }}
      gap={2}
    >
      {feedback.map((listItem, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={listItem.id}
          onClick={listItem.onClick}
          status={listItem.status}
          priority={listItem.priority}
          title={listItem.title}
          icon={listItem.icon ?? <ZapIcon />}
          index={index}
          listLength={feedback.length}
        />
      ))}
    </Grid>
  );
};

export interface FeedbackCardProps extends Omit<CardProps, 'slots'> {
  feedback?: Feedback[];
  slots?: {
    sharedListCardContentProps: SharedListCardContentProps;
  };
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}

export const FeedbackCard = ({
  feedback = [],
  slots,
  cardSlots,
  loading,
  onClickEmptyState,
  emptyStateSubtitle,
  ...props
}: FeedbackCardProps) => {
  const { sharedListCardContentProps } = slots ?? {};
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0, sm: 0, md: 0 },
    pt: 0,
    height: '100%'
  };
  return (
    <Card
      showActions={false}
      sx={{
        height: '100%',
        maxHeight: '338px',
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
      <Grid container flexDirection="column" gap={2} height={'100%'}>
        <Grid item display="flex" alignItems="center">
          <AvatarAndText
            gap={1}
            leftIcon={<ThumbsUpIcon />}
            leftIconItemSx={{ display: 'flex' }}
            title={`My Feedback`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
        </Grid>
        <Content
          feedback={feedback}
          sharedListCardContentProps={sharedListCardContentProps!}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};
