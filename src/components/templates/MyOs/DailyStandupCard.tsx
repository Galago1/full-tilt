import {
  AvatarGroup,
  Grid,
  SxProps,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { isEmpty } from 'lodash';
import { MouseEventHandler } from 'react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button from 'src/components/atoms/Button/Button';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  CalendarMinus01Icon,
  CheckCircleIcon,
  ChevronRightIcon,
  CircleIcon,
  XCircleIcon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
interface Member {
  imageUrl: string;
}

interface TeamStandup {
  name: string;
  members: Member[];
}

interface ContentProps {
  teamStandup: TeamStandup;
  loading: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  daysOfWeek: string[];
  isPastToday: (index: number) => boolean;
  daysStreak?: number;
  today?: string;
  standups?: { [key: string]: boolean };
}
const Content = ({
  teamStandup,
  onClick,
  daysOfWeek,
  isPastToday,
  daysStreak,
  today,
  standups,
  loading
}: ContentProps) => {
  const theme = useTheme();
  if (!standups || loading || (!loading && isEmpty(standups)))
    return (
      <Grid item>
        <EmptyState
          height={'100%'}
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No daily standup', subtitle: '' }
          }
        >
          {loading && <LoadingIndicator />}
        </EmptyState>
      </Grid>
    );
  return (
    <>
      <Grid item display={'flex'} flexDirection={'column'}>
        <Typography variant="textSmRegular" mb={1} mt={2}>
          Your weekly entries
        </Typography>
        <Grid container gap={1} flexDirection={'column'}>
          <Grid item>
            <Grid container gap={1} alignItems={'center'}>
              {daysOfWeek.map((day, index) => {
                const isAfterToday = isPastToday(index);
                return (
                  <Grid
                    item
                    key={day}
                    display={'flex'}
                    alignItems={'center'}
                    sx={{
                      border: `1px solid ${theme.palette.grey[300]}`,
                      borderRadius: theme.spacing(99 / 8),
                      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
                      backgroundColor:
                        day === today ? theme.palette.greyiron[900] : 'white'
                    }}
                  >
                    <DetermineIcon
                      standups={standups!}
                      day={day}
                      today={today!}
                      isAfterToday={isAfterToday}
                    />
                    <Typography
                      color={day === today ? 'white' : 'text-secondary'}
                      variant="textSmSemibold"
                    >
                      {day}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          {daysStreak ? (
            <Grid
              item
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              sx={{ ml: 'auto' }}
            >
              <ZapIcon
                sx={{
                  color: theme.palette.warning[500],
                  mr: 0.5
                }}
              />
              <Typography>{daysStreak} days streak</Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Grid item display={'flex'} flexDirection={'column'} mt={2.5}>
        <Grid container>
          <Grid item display={'flex'} flexDirection={'column'}>
            <Typography variant="textLgRegular">{teamStandup.name}</Typography>
            <Grid container alignItems={'center'}>
              <Typography variant="textSmRegular" mr={1}>
                Completed by
              </Typography>
              <AvatarGroup max={3}>
                {teamStandup.members.map((member, idx) => (
                  <Avatar
                    key={idx}
                    src={member.imageUrl}
                    sx={{
                      marginLeft: idx !== 0 ? '-7px' : '0'
                    }}
                  />
                ))}
                {isEmpty(teamStandup) ? 'None' : null}
              </AvatarGroup>
            </Grid>
          </Grid>
          <Grid item ml={'auto'}>
            <Button
              variant="text"
              color="secondary"
              onClick={onClick}
              sx={{ '&': { minWidth: 'auto' } }}
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
        </Grid>
      </Grid>
    </>
  );
};

interface DetermineIconProps {
  standups: { [key: string]: boolean };
  day: string;
  today: string | null;
  isAfterToday: boolean;
}
const DetermineIcon = ({
  standups,
  day,
  today,
  isAfterToday
}: DetermineIconProps) => {
  const theme = useTheme();

  if (standups[day.toLowerCase()] === true)
    return (
      <CheckCircleIcon
        sx={{
          color:
            day === today
              ? theme.palette.common.white
              : theme.palette.success[900],
          marginRight: 0.5
        }}
      />
    );
  if (day === today || isAfterToday)
    return (
      <CircleIcon
        sx={{
          color:
            day === today
              ? theme.palette.common.white
              : theme.palette.secondary[900],
          marginRight: 0.5
        }}
      />
    );

  return (
    <XCircleIcon
      sx={{
        color:
          day === today ? theme.palette.common.white : theme.palette.error[900],
        marginRight: 0.5
      }}
    />
  );
};

export interface DailyStandupCardProps extends Omit<CardProps, 'slots'> {
  teamStandup?: TeamStandup;
  standups?: { [key: string]: boolean };
  today?: string | null;
  daysStreak?: number;
  cardSlots?: CardProps['slots'];
  loading?: boolean;
}

export const DailyStandupCard = ({
  teamStandup,
  standups,
  today,
  daysStreak,
  loading,
  onClick,
  ...props
}: DailyStandupCardProps) => {
  const theme = useTheme();
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const getDayIndex = (day: string) => daysOfWeek.indexOf(day);
  const todayIndex = getDayIndex(today!);
  const isPastToday = (index: number) => index > todayIndex;

  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0, sm: 0, md: 0 },
    pt: 0,
    height: '100%'
  };
  return (
    <Card
      showActions={false}
      slots={{
        boxProps: { height: '100%' },
        cardContentProps: { sx: contentSx }
      }}
      sx={{
        overflowY: 'hidden',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        height: '100%',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      {...props}
    >
      <Grid container flexDirection="column" height={'100%'}>
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            gap={1}
            leftIcon={<CalendarMinus01Icon />}
            leftIconItemSx={{ display: 'flex' }}
            title={`Daily Stand Up`}
            titleTypography={{ variant: 'textLgSemibold' }}
          />
        </Grid>
        <Content
          teamStandup={teamStandup!}
          loading={loading!}
          onClick={onClick}
          daysOfWeek={daysOfWeek}
          isPastToday={isPastToday}
          daysStreak={daysStreak}
          today={today!}
          standups={standups}
        />
      </Grid>
    </Card>
  );
};
