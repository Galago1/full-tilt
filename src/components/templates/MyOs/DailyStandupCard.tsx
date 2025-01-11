import { Grid, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { MouseEventHandler } from 'react';
import Button from 'src/components/atoms/Button/Button';
import Tooltip from 'src/components/atoms/Tooltip/Tooltip';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  CalendarMinus01Icon,
  CheckCircleIcon,
  ChevronRightIcon,
  CircleIcon,
  SlashCircle01Icon,
  XCircleIcon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import pluralize from 'src/utils/inflector/pluralize';
import { Standup } from './types';
import { get } from 'lodash';

interface DayOfWeekAction {
  [key: string]: {
    title: string;
    onClick: MouseEventHandler<HTMLDivElement>;
  };
}

interface ContentProps {
  teamStandup: Standup;
  loading: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  daysOfWeek: string[];
  isPastToday: (index: number) => boolean;
  daysStreak?: number;
  today?: string;
  standups?: { [key: string]: boolean };
  dayOfWeekActions?: DayOfWeekAction;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
  currentWeekString: string;
}
const Content = ({
  teamStandup,
  onClick,
  daysOfWeek,
  isPastToday,
  daysStreak,
  today,
  standups,
  loading,
  dayOfWeekActions,
  onClickEmptyState,
  emptyStateSubtitle,
  currentWeekString = 'Your weekly entries'
}: ContentProps) => {
  const theme = useTheme();
  if (!standups || loading || (!loading && isEmpty(standups)))
    return (
      <BasicEmptyState
        icon={loading ? null : <CalendarMinus01Icon />}
        title={loading ? '' : `No daily standup`}
        subtitle={loading ? '' : emptyStateSubtitle}
        emptyStateHeight={'auto'}
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
                label: 'Add Standup',
                variant: 'outlined',
                color: 'secondary',
                onClick: onClickEmptyState,
                sx: { mt: 2 }
              }
            : undefined
        }
      >
        {loading && <LoadingIndicator />}
      </BasicEmptyState>
    );
  return (
    <>
      <Grid item display={'flex'} flexDirection={'column'}>
        <Typography variant="textSmRegular" mb={1} mt={2}>
          {currentWeekString}
        </Typography>
        <Grid container gap={1} flexDirection={'column'}>
          <Grid item>
            <Grid container gap={1} alignItems={'center'}>
              {daysOfWeek.map((day, index) => {
                const isAfterToday = isPastToday(index);
                const workingScheduleStatus = get(
                  teamStandup,
                  `workingSchedule.${day}`,
                  WorkScheduleStatus.DAY_OFF
                );
                return (
                  <Tooltip
                    title={dayOfWeekActions?.[day]?.title ?? ''}
                    key={`daily-stand-up-card-${day}`}
                  >
                    <Grid
                      item
                      display={'flex'}
                      alignItems={'center'}
                      sx={{
                        border: theme.border.userProfile,
                        borderRadius: theme.spacing(99 / 8),
                        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
                        backgroundColor:
                          day === today ? theme.palette.greyiron[900] : 'white',
                        cursor: isAfterToday ? 'auto' : 'pointer'
                      }}
                      onClick={dayOfWeekActions?.[day]?.onClick}
                    >
                      <DetermineIcon
                        standups={standups!}
                        day={day}
                        today={today!}
                        isAfterToday={isAfterToday}
                        workingScheduleStatus={workingScheduleStatus}
                      />
                      <Typography
                        color={day === today ? 'white' : 'text-secondary'}
                        variant="textSmSemibold"
                      >
                        {day}
                      </Typography>
                    </Grid>
                  </Tooltip>
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
              <Typography>
                {daysStreak} {pluralize('day', daysStreak)} streak
              </Typography>
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

              <Typography variant="textSmRegular" mr={1} component={'span'}>
                {teamStandup.members.length || 0}/
                {teamStandup.totalMembers || 0} Team Members
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export interface WorkSchedule {
  Mon: WorkScheduleStatus;
  Tue: WorkScheduleStatus;
  Wed: WorkScheduleStatus;
  Thu: WorkScheduleStatus;
  Fri: WorkScheduleStatus;
  Sat: WorkScheduleStatus;
  Sun: WorkScheduleStatus;
}

export enum WorkScheduleStatus {
  WORKING_FROM_OFFICE = 'working_from_office',
  WORKING_FROM_HOME = 'working_from_home',
  WORKING_REMOTE = 'working_remote',
  HYBRID_FIELD_WORK = 'hybrid_field_work',
  ON_VACATION = 'on_vacation',
  DAY_OFF = 'day_off',
  AWAY = 'away'
}

interface DetermineIconProps {
  standups: { [key: string]: boolean };
  day: string;
  today: string | null;
  isAfterToday: boolean;
  workingScheduleStatus: WorkScheduleStatus;
}
const DetermineIcon = ({
  standups,
  day,
  today,
  isAfterToday,
  workingScheduleStatus
}: DetermineIconProps) => {
  const theme = useTheme();

  if (workingScheduleStatus === WorkScheduleStatus.DAY_OFF)
    return (
      <SlashCircle01Icon
        sx={{
          color:
            day === today
              ? theme.palette.common.white
              : theme.palette.text.primary,
          marginRight: 0.5
        }}
      />
    );

  if (standups[day.toLowerCase()] === true)
    return (
      <CheckCircleIcon
        sx={{
          color:
            day === today
              ? theme.palette.common.white
              : theme.palette.text.primary,
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
              : theme.palette.text.primary,
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
  teamStandup?: Standup;
  standups?: { [key: string]: boolean };
  today?: string | null;
  daysStreak?: number;
  cardSlots?: CardProps['slots'];
  loading?: boolean;
  dayOfWeekActions?: DayOfWeekAction;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
  currentWeekString?: string;
  onHeaderClick: () => void;
}

export const DailyStandupCard = ({
  teamStandup,
  standups,
  today,
  daysStreak,
  loading,
  onClick,
  dayOfWeekActions,
  onClickEmptyState,
  emptyStateSubtitle,
  currentWeekString,
  onHeaderClick,
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
            textGridItemProps={{ flex: 1 }}
            childrenGridProps={{ display: 'flex' }}
            onClick={onHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronRightIcon />
          </AvatarAndText>
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
          dayOfWeekActions={dayOfWeekActions}
          onClickEmptyState={onClickEmptyState}
          emptyStateSubtitle={emptyStateSubtitle}
          currentWeekString={currentWeekString!}
        />
      </Grid>
    </Card>
  );
};
