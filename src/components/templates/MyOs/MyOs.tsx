import { Grid } from '@mui/material';
import { DailyStandupCard, DailyStandupCardProps } from './DailyStandupCard';
import { HeadlinesCard, HeadlinesCardProps } from './HeadlinesCard';
import { LatestDigestCard, LatestDigestCardProps } from './LatestDigestCard';
import MeetingsCard, { MeetingsCardProps } from './MeetingsCard/MeetingsCard';
import OkrsCard, { OkrsCardProps } from './OkrsCard/OkrsCard';
import {
  PendingSurveysCard,
  PendingSurveysCardProps
} from './PendingSurveysCard';
import RocksCard, { RocksCardProps } from './RocksCard/RocksCard';
import ScorecardsCard, {
  ScorecardsCardProps
} from './ScorecardsCard/ScorecardsCard';
import { Digest, Headline, Meeting, Okr, Rock, Standup, Survey } from './types';

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
  slots?: {
    dailyStandupCardProps?: DailyStandupCardProps;
    pendingSurveysCard?: PendingSurveysCardProps;
    latestDigestCardProps?: LatestDigestCardProps;
    okrsCardProps?: OkrsCardProps;
    scorecardsCardProps?: ScorecardsCardProps;
    meetingsCardProps?: MeetingsCardProps;
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
    </Grid>
  );
};

export default MyOs;
