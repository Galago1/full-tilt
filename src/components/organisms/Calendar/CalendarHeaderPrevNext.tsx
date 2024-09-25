import { ButtonProps } from 'src/components/atoms/Button/Button';
import ButtonGroup, {
  ButtonGroupProps
} from 'src/components/molecules/ButtonGroup/ButtonGroup';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { DateFormat } from 'src/types/dateFns';
import { formatDateIso } from 'src/utils/date';

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
    startIcon: <ChevronLeftIcon />,
    onClick: onPrevMonth
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon />,
    onClick: onNextMonth
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      }
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
    startIcon: <ChevronLeftIcon />,
    onClick: onPrevWeek
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon />,
    onClick: onNextWeek
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      }
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
    startIcon: <ChevronLeftIcon />,
    onClick: onPrevDay
  };
  const lastButton: ButtonProps = {
    endIcon: <ChevronRightIcon />,
    onClick: onNextDay
  };
  const dateButton: ButtonProps = {
    size: 'small',
    sx: {
      '&.Mui-disabled': {
        color: 'grey.900'
      },
      '&': {
        textWrap: 'nowrap',
        flexWrap: 'nowrap'
      }
    },
    disabled: true,
    label: formatDateIso(currentDate, DateFormat.MMMMddyyyy)
  };
  const buttonGroupProps: ButtonGroupProps = {
    buttons: [firstButton, dateButton, lastButton]
  };

  return <ButtonGroup {...buttonGroupProps} />;
};

export interface CalendarHeaderPrevNextProps {
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
  return (
    <>
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
    </>
  );
};

export default CalendarHeaderPrevNext;
