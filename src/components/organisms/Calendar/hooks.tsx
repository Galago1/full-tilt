import { PopoverVirtualElement, useTheme } from '@mui/material';
import {
  addDays,
  format,
  isSameDay,
  parseISO,
  startOfWeek,
  subDays
} from 'date-fns';
import { FieldAttributes, FormikConfig } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useIsSize } from 'src/hooks';
import useDeepCompareEffect from 'src/hooks/useDeepCompareEffect';
import { DateFormat } from 'src/types/dateFns';
import { CalendarProps } from './Calendar';
import { MeetingDragObject } from './MeetingChip';
import { CalendarDay, CalendarView, CalendarWeek, Meeting } from './types';

export const useCalendarHeaderActions = (
  fieldAttributes?: FieldAttributes<any>,
  formikConfig?: FormikConfig<any> | ''
) => {
  const finalFormikConfig = formikConfig;
  const finalFieldAttributes = fieldAttributes;

  return {
    finalFieldAttributes,
    finalFormikConfig
  };
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const generateCalendarData = (
  year: number,
  month: number,
  meetings: Meeting[]
): CalendarWeek[] => {
  const startDate = new Date(year, month, 1);
  // const endDate = new Date(year, month + 1, 0);
  const startDay = startDate.getDay();
  const weeks: CalendarWeek[] = [];

  let days: CalendarDay[] = [];
  let currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() - startDay);

  for (let i = 0; i < 42; i++) {
    const dayMeetings = meetings.filter((meeting) => {
      const meetingDate = new Date(meeting.day);
      return (
        meetingDate.getFullYear() === currentDate.getFullYear() &&
        meetingDate.getMonth() === currentDate.getMonth() &&
        meetingDate.getDate() === currentDate.getDate()
      );
    });

    days.push({
      date: currentDate.getDate(),
      fullDate: format(currentDate, DateFormat.yyyyMMdd),
      isCurrentMonth: currentDate.getMonth() === month,
      meetings: dayMeetings
    });
    if ((i + 1) % 7 === 0) {
      weeks.push({ days });
      days = [];
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (weeks.length === 0) {
    weeks.push({ days });
  }

  return weeks;
};

export const useWeekView = (meetings: Meeting[], currentWeekStart: Date) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const hourlyIntervals = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${period}`;
  });

  const quarterHourIntervals = Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    return `${hour.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  });

  const startDateOfWeek = startOfWeek(currentWeekStart, { weekStartsOn: 0 });

  const getMeetingsForTimeSlot = (
    dayIndex: number,
    time: string
  ): Meeting[] => {
    const dayDate = addDays(startDateOfWeek, dayIndex);
    const formattedDayDate = format(dayDate, DateFormat.yyyyMMdd);

    return meetings.filter((meeting) => {
      const formattedDate = meeting.day;
      const parsedDate = parseISO(formattedDate);
      const parsedFormattedDate = format(parsedDate, DateFormat.yyyyMMdd);
      return parsedFormattedDate === formattedDayDate && meeting.time === time;
    });
  };

  useEffect(() => {
    const scrollToHour = 8;
    const hourHeight = theme.spacing(8);
    const topOffset = theme.spacing(3);
    const scrollToPosition =
      scrollToHour * parseInt(hourHeight) - parseInt(topOffset);
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollToPosition;
    }
  }, [theme]);

  const today = new Date();

  return {
    containerRef,
    startDateOfWeek,
    daysOfWeek,
    hourlyIntervals,
    quarterHourIntervals,
    getMeetingsForTimeSlot,
    today
  };
};

type AnchorElType =
  | Element
  | PopoverVirtualElement
  | (() => Element)
  | (() => PopoverVirtualElement)
  | null
  | undefined;

export const useCalendarContentDay = (
  day: CalendarDay,
  meetings: Meeting[],
  onDropMeeting: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void
) => {
  const { isXSmall, isMobile } = useIsSize();
  const dayRef = useRef<HTMLDivElement>(null);
  const moreTextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [maxVisibleMeetings, setMaxVisibleMeetings] = useState(0);
  const [anchorEl, setAnchorEl] = useState<AnchorElType>(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [, drop] = useDrop(() => ({
    accept: 'meeting',
    canDrop: (item: MeetingDragObject) => item.isDraggable!,
    drop: (item: MeetingDragObject) => {
      if (item.isDraggable) {
        const newDay = day.fullDate;
        onDropMeeting(item.id, newDay, item.time!);
      }
    }
  }));

  const today = new Date();
  const isToday = isSameDay(today, parseISO(day.fullDate));

  const theme = useTheme();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    if (dayRef.current) {
      resizeObserver.observe(dayRef.current);
    }

    return () => {
      if (dayRef.current) {
        resizeObserver.unobserve(dayRef.current);
      }
    };
  }, [dayRef]);

  // This useEffect will calculate the maximum number of meetings that can be displayed
  useEffect(() => {
    if (dayRef.current && moreTextRef.current && headerRef.current) {
      const overflowTextHeight =
        moreTextRef.current.offsetHeight || parseFloat(theme.spacing(2.5));
      const meetingChipHeight = parseFloat(theme.spacing(3));
      const marginBetweenChips = parseFloat(theme.spacing(0.5));
      const dayHeight = dayRef.current.offsetHeight;

      const usableHeight =
        dayHeight -
        overflowTextHeight -
        headerRef.current.offsetHeight -
        parseFloat(theme.spacing(1.25));

      let visibleMeetings = Math.floor(
        usableHeight / (meetingChipHeight + marginBetweenChips)
      );

      if (meetings.length > visibleMeetings) {
        visibleMeetings = Math.max(0, visibleMeetings);
      }

      setMaxVisibleMeetings(visibleMeetings);
    }
  }, [
    dayRef.current,
    moreTextRef.current,
    dayRef.current?.offsetHeight,
    headerRef,
    meetings.length,
    isXSmall,
    isMobile
  ]);

  useEffect(() => {
    if (dayRef.current) {
      drop(dayRef.current);
    }
  }, [dayRef, drop]);

  const displayedMeetings = meetings.slice(0, maxVisibleMeetings);
  const remainingMeetings = meetings.length - displayedMeetings.length;

  return {
    dayRef,
    moreTextRef,
    headerRef,
    displayedMeetings,
    remainingMeetings,
    isToday,
    theme,
    anchorEl,
    open,
    handlePopoverOpen,
    handlePopoverClose
  };
};

export const useDayView = (
  currentDate: Date,
  meetings: Meeting[],
  onDateChange: (date: Date) => void,
  // TODO: finish showing dots
  indicatorDates: Date[]
) => {
  const [currentDateState, setCurrentDateState] = useState<Date>(
    new Date(currentDate)
  );
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const hourlyIntervals = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${period}`;
  });

  const quarterHourIntervals = Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    return `${hour.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  });

  const getMeetingsForTimeSlot = (time: string): Meeting[] => {
    return meetings.filter((meeting) => {
      const formattedDate = meeting.day;
      const parsedDate = parseISO(formattedDate);
      return isSameDay(parsedDate, currentDateState) && meeting.time === time;
    });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCurrentDateState(date);
      onDateChange(date);
    }
  };

  useEffect(() => {
    const scrollToHour = 8.5;
    const hourHeight = theme.spacing(7.5);
    const topOffset = theme.spacing(3);
    const scrollToPosition =
      scrollToHour * parseInt(hourHeight) - parseInt(topOffset);
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollToPosition;
    }
  }, []);

  useEffect(() => {
    setCurrentDateState(new Date(currentDate));
  }, [currentDate]);

  return {
    currentDateState,
    containerRef,
    hourlyIntervals,
    quarterHourIntervals,
    getMeetingsForTimeSlot,
    handleDateChange
  };
};

export const useCalendar = (
  initialYear: number,
  initialMonth: number,
  meetings: Meeting[],
  isLoading: boolean = true,
  initialView: CalendarView,
  slots?: CalendarProps['slots'],
  onDropMeetingExternal?: (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => void,
  onUpdateYear?: (year: number) => void,
  onUpdateMonth?: (month: number) => void,
  onUpdateWeek?: (weekStart: Date) => void,
  onUpdateDate?: (date: Date) => void
) => {
  const {
    calendarHeaderProps,
    calendarContentProps,
    headerGridItemProps,
    dividerGridItemProps,
    contentGridItemProps,
    dividerProps
  } = slots || {};
  const theme = useTheme();
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [calendarMeetings, setCalendarMeetings] = useState<Meeting[]>(meetings);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>(initialView);
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );

  useDeepCompareEffect(() => {
    if (!isLoading) {
      setCalendarMeetings(meetings);
    }
  }, [isLoading, meetings]);

  const handleDayViewDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const onDropMeeting = (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => {
    setCalendarMeetings((prevMeetings: Meeting[]) => {
      const newMeetings = (meeting: Meeting): Meeting => {
        if (meeting.id === meetingId) {
          return {
            ...meeting,
            day: newDay,
            time: newTime,
            duration: !meeting.duration ? 60 : meeting.duration
          };
        }
        return meeting;
      };
      const meetings = prevMeetings.map(newMeetings);
      return meetings;
    });
  };

  const weeks = generateCalendarData(
    currentYear,
    currentMonth,
    calendarMeetings
  );

  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      if (prevMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
      if (onUpdateMonth) onUpdateMonth(newMonth);
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      if (prevMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
      if (onUpdateMonth) onUpdateMonth(newMonth);
      return newMonth;
    });
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prevWeekStart) => {
      const newWeekStart = new Date(prevWeekStart);
      newWeekStart.setDate(prevWeekStart.getDate() - 7);
      if (onUpdateWeek) onUpdateWeek(newWeekStart);
      return newWeekStart;
    });
  };

  const goToNextWeek = () => {
    setCurrentWeekStart((prevWeekStart) => {
      const newWeekStart = new Date(prevWeekStart);
      newWeekStart.setDate(prevWeekStart.getDate() + 7);
      if (onUpdateWeek) onUpdateWeek(newWeekStart);
      return newWeekStart;
    });
  };

  const goToPreviousDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = subDays(prevDate, 1);
      if (onUpdateDate) onUpdateDate(newDate);
      return newDate;
    });
  };

  const goToNextDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = addDays(prevDate, 1);
      if (onUpdateDate) onUpdateDate(newDate);
      return newDate;
    });
  };

  useEffect(() => {
    if (onUpdateYear) onUpdateYear(currentYear);
  }, [currentYear, onUpdateYear]);

  useEffect(() => {
    if (onUpdateMonth) onUpdateMonth(currentMonth);
  }, [currentMonth, onUpdateMonth]);

  useEffect(() => {
    if (onUpdateDate) onUpdateDate(selectedDate);
  }, [selectedDate, onUpdateDate]);

  return {
    currentYear,
    currentMonth,
    calendarMeetings,
    selectedDate,
    view,
    currentWeekStart,
    weeks,

    calendarHeaderProps,
    calendarContentProps,
    headerGridItemProps,
    dividerGridItemProps,
    contentGridItemProps,
    theme,
    dividerProps,
    setView,
    handleDayViewDateChange,
    onDropMeeting: onDropMeetingExternal ?? onDropMeeting,
    goToPreviousMonth,
    goToNextMonth,
    goToPreviousWeek,
    goToNextWeek,
    goToPreviousDay,
    goToNextDay
  };
};
