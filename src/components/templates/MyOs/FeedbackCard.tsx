import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  MessageQuestionCircleIcon,
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
}
const Content = ({
  feedback,
  sharedListCardContentProps,
  loading
}: ContentProps) => {
  if (!feedback || loading || (!loading && isEmpty(feedback)))
    return (
      <Grid item>
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No feedback', subtitle: '' }
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
      sx={{
        flex: 1,

        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: '280px',
        pb: 3
      }}
      gap={2}
    >
      {feedback.map((issue, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={issue.id}
          status={issue.status}
          priority={issue.priority}
          title={issue.title}
          icon={issue.icon ?? <ZapIcon />}
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
}

export const FeedbackCard = ({
  feedback = [],
  slots,
  cardSlots,
  loading,
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
        />
      </Grid>
    </Card>
  );
};
