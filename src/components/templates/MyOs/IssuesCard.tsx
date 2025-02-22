import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import { AlertCircleIcon } from 'src/components/particles/theme/icons/AlertsAndFeedback/alert-circle';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import SharedListCardContent, {
  SharedListCardContentProps
} from './SharedListCardContent/SharedListCardContent';
import { Issue } from './types';

interface ContentProps {
  issues: Issue[];
  sharedListCardContentProps: SharedListCardContentProps;
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  issues,
  sharedListCardContentProps,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ContentProps) => {
  if (!issues || loading || (!loading && isEmpty(issues)))
    return (
      <BasicEmptyState
        icon={loading ? null : <AlertCircleIcon />}
        title={loading ? '' : `No Issues`}
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
                label: 'Add Issue',
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
      {issues.map((issue, index) => (
        <SharedListCardContent
          {...sharedListCardContentProps}
          key={issue.id}
          id={issue.id}
          onClick={issue.onClick}
          status={issue.status}
          type={issue.type}
          priority={issue.priority}
          title={issue.title}
          icon={issue.icon}
          index={index}
          listLength={issues.length}
          useType={true}
        />
      ))}
    </Grid>
  );
};

export interface IssuesCardProps extends Omit<CardProps, 'slots'> {
  issues?: Issue[];
  slots?: {
    sharedListCardContentProps: SharedListCardContentProps;
  };
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  onClickEmptyState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

export const IssuesCard = ({
  issues = [],
  slots,
  cardSlots,
  loading,
  onClickEmptyState,
  onHeaderClick,
  emptyStateSubtitle,
  ...props
}: IssuesCardProps) => {
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
        minHeight: '338px',
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
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<AlertCircleIcon />}
            leftIconGridProps={{ display: 'flex' }}
            title={`My Issues`}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          issues={issues}
          sharedListCardContentProps={sharedListCardContentProps!}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Card>
  );
};
