import {
  AvatarGroup,
  Grid,
  SxProps,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import {
  DateCalendar,
  DateCalendarProps,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isEmpty } from 'lodash';
import { SetStateAction } from 'react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import Chip from 'src/components/atoms/Chip/Chip';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import BasicEmptyState from 'src/components/molecules/BasicEmptyState/BasicEmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  ArrowRightIcon2,
  CalendarIcon,
  Expand01Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { useMeetingsCard } from './hooks';
import { Meeting } from './types';

interface ContentProps {
  currentDate: Date;
  formatDate: (date: Date) => string;
  meetings: Meeting[];
  loading: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
}
const Content = ({
  currentDate,
  formatDate,
  meetings,
  loading,
  onClickEmptyState,
  emptyStateSubtitle
}: ContentProps) => {
  const theme = useTheme();
  if (!meetings || loading || (!loading && isEmpty(meetings)))
    return (
      <BasicEmptyState
        icon={loading ? null : <CalendarIcon />}
        title={loading ? '' : `No Meetings`}
        subtitle={loading ? '' : emptyStateSubtitle}
        emptyStateHeight={'auto'}
        slots={{
          gridSx: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
          },
          gridProps: {
            item: true
          }
        }}
        buttonProps={
          !loading && onClickEmptyState
            ? {
                onClick: onClickEmptyState,
                label: 'Add Meeting',
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
      xs={12}
      sm={8}
      sx={{
        maxHeight: {
          xs: 'auto',
          sm: theme.spacing(444 / 8)
        },
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <Grid
        container
        flexDirection={'column'}
        width={'100%'}
        gap={1}
        sx={{ overflowY: 'auto' }}
      >
        <Typography variant="textMdMedium">
          {formatDate(currentDate)}
        </Typography>
        {meetings.map((meeting, index) => {
          return (
            <Card
              key={index}
              showActions={false}
              sx={{
                border: theme.border.outlinedButton,
                borderRadius: theme.borderRadius.xl,
                boxShadow: theme.customShadows.xs,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'grey.50'
                }
              }}
              onClick={meeting.onClick}
            >
              <Grid container>
                <Grid item flex={1}>
                  <Grid container alignItems={'center'} gap={0}>
                    <Typography
                      variant="textSmMedium"
                      sx={{ color: theme.palette.grey[600] }}
                    >
                      {meeting.startTime}
                    </Typography>
                    <ArrowRightIcon2
                      sx={{
                        color: theme.palette.grey[600],
                        width: 16,
                        height: 16
                      }}
                    />
                    <Typography
                      variant="textSmMedium"
                      sx={{ color: theme.palette.grey[600] }}
                    >
                      {meeting.endTime}
                    </Typography>
                  </Grid>
                  <Typography variant="textMdRegular">
                    {meeting.title}
                  </Typography>
                </Grid>
                <Grid
                  item
                  display="flex"
                  sx={{
                    ml: 'auto',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <AvatarGroup max={3}>
                    {meeting.avatars.map((avatar, idx) => (
                      <Avatar
                        key={idx}
                        src={avatar.url}
                        sx={{
                          marginLeft: idx !== 0 ? '-7px' : '0'
                        }}
                      />
                    ))}
                  </AvatarGroup>
                  {meeting.team && (
                    <Chip
                      label={meeting.team}
                      sx={{ marginLeft: 1.5 }}
                      variant={'outlined'}
                    />
                  )}
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};

export interface MeetingsCardProps extends Omit<CardProps, 'slots'> {
  meetings?: Meeting[];
  slots?: {
    dateCalendarProps: DateCalendarProps<any>;
    cardButtonProps: ButtonProps;
  };
  cardSlots?: CardProps['slots'];
  externalCurrentDate?: Date;
  externalHandleDateChange?: (value: SetStateAction<Date>) => void;
  loading?: boolean;
  onClickEmptyState?: () => void;
  emptyStateSubtitle?: any;
  onHeaderClick?: () => void;
}

export const MeetingsCard = ({
  meetings = [],
  cardSlots,
  externalCurrentDate,
  externalHandleDateChange,
  slots,
  loading,
  onClickEmptyState,
  emptyStateSubtitle,
  onHeaderClick,
  ...props
}: MeetingsCardProps) => {
  const theme = useTheme();
  const contentSx: SxProps<Theme> = {
    px: responsiveSpacing,
    pb: { xs: 0, sm: 0, md: 0 },
    pt: 0,
    height: '100%'
  };
  const { dateCalendarProps, cardButtonProps } = slots ?? {};
  const { currentDate, handleDateChange, formatDate } = useMeetingsCard(
    externalCurrentDate,
    externalHandleDateChange
  );

  return (
    <Card
      showActions={false}
      {...props}
      sx={{
        height: '100%',
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs
      }}
      slots={{
        boxProps: { height: '100%' },
        cardContentProps: { sx: contentSx },
        ...cardSlots
      }}
    >
      <Grid container flexDirection="column" flex={1}>
        <Grid item display={'flex'} alignItems={'center'}>
          <AvatarAndText
            gap={1}
            leftIcon={<CalendarIcon />}
            leftIconItemSx={{ display: 'flex' }}
            title={`My Meetings`}
            titleTypography={{ variant: 'textLgSemibold' }}
            sx={{ cursor: 'pointer' }}
            onClick={onHeaderClick}
          />
          <Button
            label={<Expand01Icon />}
            variant="outlined"
            color="secondary"
            sx={{ ml: 'auto', '&': { minWidth: 'auto', p: 8 / 8 } }}
            {...cardButtonProps}
          />
        </Grid>
        <Grid item mt={1} />
        <Grid item>
          <Grid
            container
            alignItems={meetings.length ? 'flex-start' : 'center'}
          >
            <Grid
              item
              xs={12}
              sm={4}
              display={'flex'}
              width={'100%'}
              height={'100%'}
              flexDirection={'column'}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateCalendar
                  sx={{
                    height: '100%',
                    width: '100%',
                    '& .MuiDateCalendar-root': {
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    },
                    '& .MuiPickersCalendarHeader-root': {
                      flexShrink: 0
                    },
                    '& .MuiDayCalendar-header': {
                      flexShrink: 0
                    },
                    '& .MuiDayCalendar-monthContainer': {
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    },
                    '& .MuiDayCalendar-weekContainer': {
                      flexGrow: 1,
                      justifyContent: 'space-around'
                    },
                    '& .MuiPickersDay-root': {
                      margin: 0
                    },
                    '& .MuiDayCalendar-header, & .MuiDayCalendar-weekContainer':
                      {
                        justifyContent: 'space-around'
                      },
                    '& .MuiPickersDay-root.Mui-selected': {
                      backgroundColor: 'cyan.600'
                    },
                    '& .MuiPickersDay-root.Mui-selected:hover': {
                      backgroundColor: 'cyan.600'
                    },
                    '& .MuiPickersDay-root:focus.Mui-selected': {
                      backgroundColor: 'cyan.600'
                    },
                    '& .MuiPickersDay-root:hover': {
                      backgroundColor: 'cyan.600'
                    }
                  }}
                  value={currentDate}
                  onChange={handleDateChange}
                  {...dateCalendarProps}
                />
              </LocalizationProvider>
            </Grid>
            <Content
              currentDate={currentDate}
              formatDate={formatDate}
              meetings={meetings}
              loading={loading!}
              onClickEmptyState={onClickEmptyState}
              emptyStateSubtitle={emptyStateSubtitle}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
