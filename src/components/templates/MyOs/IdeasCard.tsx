import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  ChevronRightIcon,
  Lightbulb05Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent, {
  SharedListCardContentProps
} from './SharedListCardContent/SharedListCardContent';
import { Idea } from './types';

interface ContentProps {
  ideas: Idea[];
  sharedListCardContentProps: SharedListCardContentProps;
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  ideas,
  sharedListCardContentProps,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ContentProps) => {
  if (!ideas || loading || (!loading && isEmpty(ideas)))
    return (
      <BasicEmptyState
        icon={loading ? null : <Lightbulb05Icon />}
        title={loading ? '' : `No Ideas`}
        emptyStateHeight={'auto'}
        subtitle={loading ? '' : emptyStateSubtitle}
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
                onClick: onClickEmptyState,
                label: 'Add Idea',
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
  return (
    <Grid
      item
      container
      sx={{
        flex: 1,
        flexDirection: 'column',

        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: '280px',
        pb: responsiveSpacing
      }}
      gap={0}
    >
      {ideas.map((idea, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={idea.id}
          id={idea.id}
          onClick={idea.onClick}
          status={idea.status}
          type={idea.type}
          priority={idea.priority}
          title={idea.title}
          icon={idea.icon}
          index={index}
          listLength={ideas.length}
          useType={true}
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
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

export const IdeasCard = ({
  ideas = [],
  slots,
  cardSlots,
  loading,
  onClickEmptyState,
  onHeaderClick,
  emptyStateSubtitle,
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
        minHeight: '338px',
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
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<Lightbulb05Icon />}
            leftIconGridProps={{ display: 'flex' }}
            title={`My Ideas`}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          ideas={ideas}
          sharedListCardContentProps={sharedListCardContentProps!}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};
