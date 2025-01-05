import { Grid } from '@mui/material';
import { DailyStandupCard, DailyStandupCardProps } from './DailyStandupCard';
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
import { TodosCard, TodosCardProps } from './TodosCard';
import {
  Digest,
  Headline,
  Idea,
  Issue,
  Meeting,
  Okr,
  Rock,
  Standup,
  Survey,
  Todo
} from './types';
import { HeadlinesCard, HeadlinesCardProps } from './HeadlinesCard';
import { RocksCard } from './RocksCard';
import { RocksCardProps } from './RocksCard';

export interface MyOsProps {
  standups: Record<string, boolean>;
  teamStandup: Standup;
  today: string | null;
  survey: Survey;
  digest: Digest[];
  okrs: Okr[];
  rocks: Rock[];
  headlines: Headline[];
  meetings: Meeting[];
  issues: Issue[];
  ideas: Idea[];
  todos: Todo[];
  slots?: {
    dailyStandupCardProps?: DailyStandupCardProps;
    pendingSurveysCard?: PendingSurveysCardProps;
    latestDigestCardProps?: LatestDigestCardProps;
    okrsCardProps?: OkrsCardProps;
    scorecardsCardProps?: ScorecardsCardProps;
    meetingsCardProps?: MeetingsCardProps;
    issuesCardProps?: IssuesCardProps;
    ideasCardProps?: IdeasCardProps;
    todosCardProps?: TodosCardProps;
    headlinesCardProps?: HeadlinesCardProps;
    rocksCardProps?: RocksCardProps;
  };
  useRocks: boolean;
}

export const MyOs = ({
  standups,
  teamStandup,
  today,
  survey,
  digest,
  okrs,
  rocks,
  headlines,
  meetings,
  issues,
  ideas,
  todos,
  slots,
  useRocks
}: MyOsProps) => {
  const {
    dailyStandupCardProps,
    pendingSurveysCard,
    latestDigestCardProps,
    okrsCardProps,
    scorecardsCardProps,
    meetingsCardProps,
    issuesCardProps,
    ideasCardProps,
    todosCardProps,
    headlinesCardProps,
    rocksCardProps
  } = slots ?? {};
  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} spacing={2}>
        <Grid item container xs={12} lg={9} spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <DailyStandupCard
              {...dailyStandupCardProps!}
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
            <HeadlinesCard {...headlinesCardProps!} headlines={headlines} />
          </Grid>
        </Grid>
        {/* WIP: Trying to get the cards height to match */}
        {/* <Grid
          item
          container
          xs={12}
          lg={9}
          spacing={2}
          flexDirection={'column'}
        >
          <Grid item container spacing={2}>
            <Grid item xs={12} md={6} lg={8}>
              <DailyStandupCard
                {...dailyStandupCardProps!}
                standups={standups}
                teamStandup={teamStandup}
                today={today}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PendingSurveysCard {...pendingSurveysCard!} survey={survey} />
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <LatestDigestCard {...latestDigestCardProps!} digest={digest!} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <HeadlinesCard {...headlinesCardProps!} headlines={headlines} />
            </Grid>
          </Grid>
        </Grid> */}

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
        lg={6}
        sx={{
          mb: {
            xs: 0
          }
        }}
        width={'100%'}
      >
        {useRocks ? (
          <RocksCard {...rocksCardProps!} rocks={rocks} />
        ) : (
          <OkrsCard {...okrsCardProps!} okrs={okrs} />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          mb: {
            xs: 0
          }
        }}
        width={'100%'}
      >
        <IssuesCard {...issuesCardProps!} issues={issues} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          mb: {
            xs: 0
          }
        }}
        width={'100%'}
      >
        <TodosCard {...todosCardProps!} todos={todos} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          mb: {
            xs: 0
          }
        }}
        width={'100%'}
      >
        <IdeasCard {...ideasCardProps!} ideas={ideas} />
      </Grid>
    </Grid>
  );
};

export default MyOs;
