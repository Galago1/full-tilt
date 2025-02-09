import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import CircularProgressIndicator, {
  CircularProgressIndicatorSize
} from 'src/components/molecules/CircularProgressIndicator/CircularProgressIndicator';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import { AlertTriangleIcon } from 'src/components/particles/theme/icons/AlertsAndFeedback/alert-triangle';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { MessageQuestionCircleIcon } from 'src/components/particles/theme/icons/Communication/message-question-circle';
import { CheckVerified01Icon } from 'src/components/particles/theme/icons/General/check-verified-01';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Survey } from './types';

interface ContentProps {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  survey: Survey;
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
  onClickCompletedState?: () => void;
}
const Content = ({
  onClick,
  survey,
  loading,
  onClickEmptyState,
  emptyStateSubtitle,
  onClickCompletedState
}: ContentProps) => {
  const theme = useTheme();
  if (!survey)
    return (
      <BasicEmptyState
        icon={loading ? null : <MessageQuestionCircleIcon />}
        title={loading ? '' : 'No pending surveys'}
        subtitle={loading ? '' : emptyStateSubtitle}
        emptyStateHeight={'auto'}
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
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
                label: 'Add Survey',
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
  if (survey.completed)
    return (
      <BasicEmptyState
        icon={loading ? null : <CheckVerified01Icon />}
        subtitle={`Your all caught up! ${survey.nextSurveySubtitle}`}
        emptyStateHeight={'auto'}
        sx={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            display: 'flex',
            p: 1
          }
        }}
      />
    );
  return (
    <>
      <Grid
        item
        display={'flex'}
        flexDirection={'column'}
        mt={2}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'grey.50'
          }
        }}
        onClick={onClick}
      >
        <Typography variant="textLgRegular">{survey.name}</Typography>
        <Grid container flexDirection={'column'} mt={1.5}>
          <Grid item display="flex" alignItems={'center'} gap={0.5}>
            <Typography variant="textSmRegular">{survey.readLength}</Typography>
            <Grid
              item
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: theme.palette.grey[400]
              }}
            />
            <Typography variant="textSmRegular">
              {survey.questions} questions
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item display={'flex'} flexDirection={'column'} mt={'auto'}>
        {survey.dueValue <= 2 && (
          <Grid item display={'flex'} alignItems={'center'} mb={2}>
            <AlertTriangleIcon sx={{ color: theme.palette.error[600] }} />
            <Typography
              variant="textSmRegular"
              sx={{ color: theme.palette.error[600], ml: 0.5 }}
            >
              Due in {survey.due}
            </Typography>
          </Grid>
        )}
        <Grid item display={'flex'} alignItems={'center'}>
          <CircularProgressIndicator
            value={Math.floor((survey.contributed / survey.contributors) * 100)}
            size={CircularProgressIndicatorSize.XSMALL}
            hideValue={true}
          />
          <Typography variant="textSmRegular" ml={1}>
            {survey.contributed}/{survey.contributors} people contributed
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export interface PendingSurveysCardProps extends GridProps {
  /**
   * The survey to display
   */
  survey?: Survey;
  /**
   * the loading state
   */
  loading?: boolean;
  onClickEmptyState?: () => void;
  onClickCompletedState?: () => void;
  onHeaderClick?: () => void;
  emptyStateSubtitle?: any;
}

export const PendingSurveysCard = ({
  survey,
  onClick,
  loading,
  onClickEmptyState,
  onClickCompletedState,
  onHeaderClick,
  emptyStateSubtitle,
  ...props
}: PendingSurveysCardProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      flexDirection="column"
      height={'100%'}
      sx={{
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.paper,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      {...props}
    >
      <Grid
        container
        p={responsiveSpacing}
        flexDirection={'column'}
        height={'100%'}
        gap={survey?.completed ? 2 : 0}
      >
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            spacing={0}
            gap={1}
            alignItems={'center'}
            leftIcon={<MessageQuestionCircleIcon />}
            leftIconGridProps={{ display: 'flex' }}
            title={'Pending Surveys'}
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
        </Grid>
        <Content
          onClick={onClick!}
          survey={survey!}
          loading={loading!}
          onClickEmptyState={onClickEmptyState}
          onClickCompletedState={onClickCompletedState}
          emptyStateSubtitle={emptyStateSubtitle}
        />
      </Grid>
    </Grid>
  );
};
