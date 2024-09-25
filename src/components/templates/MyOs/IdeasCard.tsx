import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  Lightbulb05Icon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent, {
  SharedListCardContentProps
} from './SharedListCardContent';
import { Idea } from './types';

interface ContentProps {
  ideas: Idea[];
  sharedListCardContentProps: SharedListCardContentProps;
  loading: boolean;
}
const Content = ({
  ideas,
  sharedListCardContentProps,
  loading
}: ContentProps) => {
  if (!ideas || loading || (!loading && isEmpty(ideas)))
    return (
      <Grid item>
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No ideas', subtitle: '' }
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
      {ideas.map((idea, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={idea.id}
          status={idea.status}
          priority={idea.priority}
          title={idea.title}
          icon={idea.icon ?? <ZapIcon />}
          index={index}
          listLength={ideas.length}
        />
      ))}
    </Grid>
  );
};

export interface IdeasCardProps extends Omit<CardProps, 'slots'> {
  ideas?: Idea[];
  slots?: {
    sharedListCardContentProps: SharedListCardContentProps;
  };
  cardSlots?: CardProps['slots'];
  loading?: boolean;
}

export const IdeasCard = ({
  ideas = [],
  slots,
  cardSlots,
  loading,
  ...props
}: IdeasCardProps) => {
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
        maxHeight: '338px',
        height: '100%',
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
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            gap={1}
            leftIcon={<Lightbulb05Icon />}
            title={`My Ideas`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
        </Grid>
        <Content
          ideas={ideas}
          sharedListCardContentProps={sharedListCardContentProps!}
          loading={loading!}
        />
      </Grid>
    </Card>
  );
};
