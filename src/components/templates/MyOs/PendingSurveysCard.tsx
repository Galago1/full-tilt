import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import Button from 'src/components/atoms/Button/Button';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import CircularProgressIndicator, {
  CircularProgressIndicatorSize
} from 'src/components/molecules/CircularProgressIndicator/CircularProgressIndicator';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import {
  AlertTriangleIcon,
  CalendarIcon,
  ChevronRightIcon,
  MessageQuestionCircleIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { Survey } from './types';

interface ContentProps {
  survey: Survey;
  loading: boolean;
}
const Content = ({ survey, loading }: ContentProps) => {
  const theme = useTheme();
  if (!survey)
    return (
      <Grid item>
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No pending surveys', subtitle: '' }
          }
        >
          {loading && <LoadingIndicator />}
        </EmptyState>
      </Grid>
    );
  if (survey.completed)
    return (
      <Grid item flex={1} display={'flex'} justifyContent={'center'}>
        <EmptyState
          alignItems={'center'}
          justifyContent={'center'}
          featuredIconProps={{ children: <CalendarIcon /> }}
          avatarAndTextProps={{
            alignItems: 'center',
            justifyContent: 'center',
            title: survey.nextSurveyTitle,
            subtitle: survey.nextSurveySubtitle,
            textGridItemProps: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            },
            textTitleGridItemProps: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            },
            textSubtitleGridItemProps: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        />
      </Grid>
    );
  return (
    <>
      <Grid item display={'flex'} flexDirection={'column'} mt={2}>
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
            {survey.contributed}/{survey.contributors} contributed
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
}

export const PendingSurveysCard = ({
  survey,
  onClick,
  loading,
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
            gap={1}
            leftIcon={<MessageQuestionCircleIcon />}
            leftIconItemSx={{ display: 'flex' }}
            title={`Pending Surveys`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
          <Button
            variant="text"
            color="secondary"
            onClick={onClick}
            sx={{ ml: 'auto', '&': { minWidth: 'auto' } }}
            label={
              <ChevronRightIcon
                sx={{
                  width: 20,
                  height: 20
                }}
              />
            }
          />
        </Grid>
        <Content survey={survey!} loading={loading!} />
      </Grid>
    </Grid>
  );
};
