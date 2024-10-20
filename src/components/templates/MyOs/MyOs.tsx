import { Grid } from '@mui/material';
import { DailyStandupCard, DailyStandupCardProps } from './DailyStandupCard';
import { FeedbackCard, FeedbackCardProps } from './FeedbackCard';
import { IdeasCard, IdeasCardProps } from './IdeasCard';
import { IssuesCard, IssuesCardProps } from './IssuesCard';
import { LatestDigestCard, LatestDigestCardProps } from './LatestDigestCard';
import { MeetingsCard, MeetingsCardProps } from './MeetingsCard';
import { OkrsCard, OkrsCardProps } from './OkrsCard';
import {
  PendingSurveysCard,
  PendingSurveysCardProps
} from './PendingSurveysCard';
import { ScorecardsCard, ScorecardsCardProps } from './ScorecardsCard';
import {
  Feedback,
  Idea,
  Issue,
  Meeting,
  Okr,
  Standup,
  Story,
  Survey
} from './types';

export interface MyOsProps {
  standups: Record<string, boolean>;
  teamStandup: Standup;
  today: string | null;
  survey: Survey;
  digest: Story[];
  okrs: Okr[];
  meetings: Meeting[];
  issues: Issue[];
  feedback: Feedback[];
  ideas: Idea[];
  slots?: {
    dailyStandupCardProps?: DailyStandupCardProps;
    pendingSurveysCard?: PendingSurveysCardProps;
    latestDigestCardProps?: LatestDigestCardProps;
    okrsCardProps?: OkrsCardProps;
    scorecardsCardProps?: ScorecardsCardProps;
    meetingsCardProps?: MeetingsCardProps;
    issuesCardProps?: IssuesCardProps;
    feedbackCardProps?: FeedbackCardProps;
    ideasCardProps?: IdeasCardProps;
  };
}

export const MyOs = ({
  standups,
  teamStandup,
  today,
  survey,
  digest,
  okrs,
  meetings,
  issues,
  feedback,
  ideas,
  slots
}: MyOsProps) => {
  const {
    dailyStandupCardProps,
    pendingSurveysCard,
    latestDigestCardProps,
    okrsCardProps,
    scorecardsCardProps,
    meetingsCardProps,
    issuesCardProps,
    feedbackCardProps,
    ideasCardProps
  } = slots ?? {};
  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} spacing={2}>
        <Grid item container xs={12} lg={9} spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <DailyStandupCard
              {...dailyStandupCardProps}
              standups={standups}
              teamStandup={teamStandup}
              today={today}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <PendingSurveysCard {...pendingSurveysCard!} survey={survey} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <LatestDigestCard {...latestDigestCardProps!} digest={digest!} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <OkrsCard {...okrsCardProps!} okrs={okrs} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={3} maxHeight={596}>
          <ScorecardsCard {...scorecardsCardProps!} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MeetingsCard {...meetingsCardProps!} meetings={meetings} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          mb: {
            lg: 3,
            xs: 0
          }
        }}
      >
        <IssuesCard {...issuesCardProps!} issues={issues} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          mb: {
            lg: 3,
            xs: 0
          }
        }}
      >
        <FeedbackCard {...feedbackCardProps!} feedback={feedback} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          mb: {
            lg: 3,
            xs: 0
          }
        }}
      >
        <IdeasCard {...ideasCardProps!} ideas={ideas} />
      </Grid>
    </Grid>
  );
};

export default MyOs;
