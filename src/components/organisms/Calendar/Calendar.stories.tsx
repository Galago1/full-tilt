import { Meta, Story } from '@storybook/react';
import Calendar, { CalendarProps } from './Calendar';
import { CalendarView, Meeting } from './types';
import SelectInput from 'src/components/molecules/Inputs/SelectInput/SelectInput';
import { Theme } from '@mui/material';
import { useEffect, useState } from 'react';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    initialYear: { control: 'number' },
    initialMonth: { control: 'number' },
    meetings: { control: 'object' }
  }
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
// const startOfWeek = currentDate.getDate() - currentDate.getDay(); // Calculate start of this week
const generateDate = (
  currentYear: number,
  currentMonth: number,
  startOfWeek: number
): string => {
  const year = currentYear;
  const month = String(currentMonth + 1).padStart(2, '0');
  const day = String(startOfWeek).padStart(2, '0');
  const value = `${year}-${month}-${day}`;
  return value;
};

const exampleMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Team Sync',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 1}`, // Monday
    day: generateDate(currentYear, currentMonth, 1),
    time: '10:00',
    color: 'orange',
    duration: 60,
    isDraggable: true
  },
  {
    id: '2',
    title: 'Project Review',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 3}`, // Wednesday
    day: generateDate(currentYear, currentMonth, 2),
    time: '14:00',
    color: 'orange',
    duration: 30,
    isDraggable: true
  },
  {
    id: '3',
    title: 'Meeting with Anna',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 2}`, // Tuesday
    day: generateDate(currentYear, currentMonth, 2),
    time: '09:00',
    color: 'blue',
    duration: 45,
    isDraggable: true
  },
  {
    id: '4',
    title: 'Meeting with Yana',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 4}`, // Thursday
    day: generateDate(currentYear, currentMonth, 17),
    time: '11:00',
    color: 'green',
    duration: 45,
    isDraggable: true
  },
  {
    id: '5',
    title: 'Quarterly Review',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 5}`, // Friday
    day: generateDate(currentYear, currentMonth, 17),
    time: '15:00',
    color: 'green',
    duration: 15,
    isDraggable: true
  },
  {
    id: '6',
    title: 'Leadership Meeting',
    // day: `${currentYear}-${currentMonth + 1}-${startOfWeek + 1}`, // Monday
    day: generateDate(currentYear, currentMonth, 18),
    time: '16:00',
    color: 'green',
    duration: 60,
    isDraggable: false
  }
];

export const Default = Template.bind({});
Default.args = {
  initialYear: currentYear,
  initialMonth: currentMonth,
  meetings: exampleMeetings,
  initialView: CalendarView.MONTH,
  onDropMeetingExternal: undefined,
  slots: {
    calendarHeaderProps: {
      slots: {
        calendarHeaderActionsProps: {
          slots: {
            formikConfig: {
              initialValues: {
                groups: 'all'
              },
              onSubmit: (values) => {}
            },
            fieldAttributes: {
              component: SelectInput,
              name: 'groups',
              options: [{ value: 'all', label: { value: 'All Events' } }],
              defaultOptionLabel: 'All Events',
              defaultValue: 'all',
              sx: {
                maxWidth: (theme: Theme) => theme.spacing(22.5),
                '& .MuiSelect-select .MuiBox-root .MuiGrid-root': {
                  height: 42
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: (theme: Theme) => theme.spacing(1)
                },
                '& .MuiSvgIcon-root': {
                  width: (theme: Theme) => theme.spacing(2),
                  height: (theme: Theme) => theme.spacing(2),
                  right: (theme: Theme) => theme.spacing(1.5),
                  fontSize: (theme: Theme) => theme.spacing(2),
                  position: 'absolute',
                  pointerEvents: 'none'
                }
              }
            }
          }
        }
      }
    }
  }
};

// Simulate loading, TODO: fix the timing error on the loading effect
const LoadingTemplate: Story<CalendarProps> = (args) => {
  const [loading, setLoading] = useState(true);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMeetings(exampleMeetings);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  const handleDropMeetingExternal = (
    meetingId: string | number,
    newDay: string,
    newTime: string
  ) => {
    setLoading(true);
    setTimeout(() => {
      setMeetings((prevMeetings) =>
        prevMeetings.map((meeting) =>
          meeting.id === meetingId
            ? { ...meeting, day: newDay, time: newTime }
            : meeting
        )
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <Calendar
      {...args}
      isLoading={loading}
      onDropMeetingExternal={handleDropMeetingExternal}
      meetings={meetings}
    />
  );
};
export const Loading = LoadingTemplate.bind({});
Loading.args = {
  initialYear: currentYear,
  initialMonth: currentMonth,
  initialView: CalendarView.MONTH,
  onDropMeetingExternal: undefined
};
