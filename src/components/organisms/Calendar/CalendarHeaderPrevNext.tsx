import { Grid } from '@mui/material';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import ButtonGroup, {
  ButtonGroupProps
} from 'src/components/molecules/ButtonGroup/ButtonGroup';
import { ChevronLeftIcon } from 'src/components/particles/theme/icons/Arrows/chevron-left';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { DateFormat } from 'src/types/dateFns';
import { formatDate } from 'src/utils/date';
import { CalendarView } from './types';
import { useMemo } from 'react';
import { attachmentIconSx } from 'src/constants/spacing';

const middleSx = {
  py: 4 / 8,
  height: 28
};

const startEndSx = {
  '& .MuiButton-startIcon, .MuiButton-endIcon': {
    marginRight: 0,
    marginLeft: 0
  },
  ...middleSx
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

interface MonthSelectorProps {
  currentYear: number;
  currentMonth: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}
const MonthSelector = ({
  currentYear,
  currentMonth,
  onPrevMonth,
  onNextMonth
}: MonthSelectorProps) => {
  const firstButton: ButtonProps = {
    startIcon: <ChevronLeftIcon sx={attachmentIconSx} />,
    onClick: onPrevMonth,
    useSquareStyles: false,
    sx: startEndSx
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon sx={attachmentIconSx} />,
    onClick: onNextMonth,
    useSquareStyles: false,
    sx: startEndSx
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      lineHeight: 1,
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      },
      ...middleSx
    },
    disabled: true,
    label: `${monthNames[currentMonth]} ${currentYear}`
  };
  const buttonGroupProps: ButtonGroupProps = {
    buttons: [firstButton, dateButton, lastButton]
  };

  return <ButtonGroup {...buttonGroupProps} />;
};

interface WeekSelectorProps {
  currentWeekStart: Date;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}
const WeekSelector = ({
  currentWeekStart,
  onPrevWeek,
  onNextWeek
}: WeekSelectorProps) => {
  const endOfWeek = new Date(currentWeekStart);
  endOfWeek.setDate(currentWeekStart.getDate() + 6);

  const firstButton: ButtonProps = {
    startIcon: <ChevronLeftIcon sx={attachmentIconSx} />,
    onClick: onPrevWeek,
    useSquareStyles: false,
    sx: startEndSx
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon sx={attachmentIconSx} />,
    onClick: onNextWeek,
    useSquareStyles: false,
    sx: startEndSx
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      lineHeight: 1,
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      },
      ...middleSx
    },
    disabled: true,
    label: `${
      monthNames[currentWeekStart.getMonth()]
    } ${currentWeekStart.getDate()} - ${
      monthNames[endOfWeek.getMonth()]
    } ${endOfWeek.getDate()}, ${currentWeekStart.getFullYear()}`
  };

  const buttonGroupProps: ButtonGroupProps = {
    buttons: [firstButton, dateButton, lastButton]
  };

  return <ButtonGroup {...buttonGroupProps} />;
};

interface DaySelectorProps {
  currentDate: Date;
  onPrevDay: () => void;
  onNextDay: () => void;
}

const DaySelector = ({
  currentDate,
  onPrevDay,
  onNextDay
}: DaySelectorProps) => {
  const firstButton: ButtonProps = {
    startIcon: <ChevronLeftIcon sx={attachmentIconSx} />,
    onClick: onPrevDay,
    useSquareStyles: false,
    sx: startEndSx
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon sx={attachmentIconSx} />,
    onClick: onNextDay,
    useSquareStyles: false,
    sx: startEndSx
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      lineHeight: 1,
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      },
      ...middleSx
    },
    disabled: true,
    label: formatDate(currentDate, DateFormat.MMMMddyyyy)
  };
  const buttonGroupProps: ButtonGroupProps = {
    buttons: [firstButton, dateButton, lastButton]
  };

  return <ButtonGroup {...buttonGroupProps} />;
};

export interface CalendarHeaderPrevNextProps {
  setView: (view: CalendarView) => void;
  buttonGroupProps?: ButtonGroupProps;
  initialView?: CalendarView;
  view: 'day' | 'week' | 'month';
  selectedDate: Date;
  goToPreviousDay: () => void;
  goToNextDay: () => void;
  currentWeekStart: Date;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  currentYear: number;
  currentMonth: number;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const CalendarHeaderPrevNext = ({
  initialView,
  setView,
  buttonGroupProps,
  view,
  selectedDate,
  goToPreviousDay,
  goToNextDay,
  currentWeekStart,
  goToPreviousWeek,
  goToNextWeek,
  currentYear,
  currentMonth,
  goToPreviousMonth,
  goToNextMonth
}: CalendarHeaderPrevNextProps) => {
  const defaultButtonGroupsProps: ButtonGroupProps = useMemo(() => {
    return {
      customVariant: 'roundedEdges',
      useSelectedStyles: true,
      buttons: [
        {
          label: 'Day',
          value: 'day',
          color: 'secondary',
          size: 'small',
          selected: initialView === CalendarView.DAY,
          onClick: () => setView(CalendarView.DAY),
          sx: middleSx
        },
        {
          label: 'Week',
          value: 'week',
          color: 'secondary',
          size: 'small',
          selected: initialView === CalendarView.WEEK,
          onClick: () => setView(CalendarView.WEEK),
          sx: middleSx
        },
        {
          label: 'Month',
          value: 'month',
          color: 'secondary',
          size: 'small',
          selected: initialView === CalendarView.MONTH,
          onClick: () => setView(CalendarView.MONTH),
          sx: middleSx
        }
      ]
    };
  }, [initialView, setView]);
  const finalButtonGroupProps = buttonGroupProps ?? defaultButtonGroupsProps;
  return (
    <>
      <Grid container gap={2} flexWrap="nowrap">
        {finalButtonGroupProps && (
          <Grid item>
            <ButtonGroup {...finalButtonGroupProps} />
          </Grid>
        )}
        <Grid item>
          {view === 'day' ? (
            <DaySelector
              currentDate={selectedDate}
              onPrevDay={goToPreviousDay}
              onNextDay={goToNextDay}
            />
          ) : view === 'week' ? (
            <WeekSelector
              currentWeekStart={currentWeekStart}
              onPrevWeek={goToPreviousWeek}
              onNextWeek={goToNextWeek}
            />
          ) : (
            <MonthSelector
              currentYear={currentYear}
              currentMonth={currentMonth}
              onPrevMonth={goToPreviousMonth}
              onNextMonth={goToNextMonth}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CalendarHeaderPrevNext;
