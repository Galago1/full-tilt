import { ComponentMeta, Story } from '@storybook/react';
import { FieldInputProps, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import { DateNavigatorInterval } from 'src/components/atoms/DateNavigator/DateNavigator';
import { DateNavigatorInputProps } from 'src/components/molecules/Inputs/DateNavigatorInput/DateNavigatorInput';
import {
  getColorByValue,
  GoalCondition
} from 'src/components/organisms/Scorecard/helpers';
import { InlineFormikProps } from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import { ZapIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { formatDateIso, parseDate } from 'src/utils/date';
import { WorkScheduleStatus } from './DailyStandupCard';
import { MyOs, MyOsProps } from './MyOs';
import { ScorecardsContentProps } from './ScorecardsCard';
import { Scorecard } from './types';
import { DateFormat } from 'src/types/dateFns';
import { ThemeProvider } from 'src/components/particles';

const onSave: any = (
  values: InlineFormikProps,
  form: FormikHelpers<InlineFormikProps>,
  onCloseEditor: () => void
) => {};

const dateNavigatorInputProps: DateNavigatorInputProps = {
  interval: DateNavigatorInterval.DAILY,
  onPreviousChange: () => {},
  onNextChange: () => {},
  sx: { '&': { display: 'flex' }, width: '100%' }
  // dateLabelFn: () => '',
};

export default {
  title: 'Templates/MyOs',
  component: MyOs,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof MyOs>;

const Template: Story<MyOsProps> = (args) => {
  const intialDate = new Date();
  const [dates, setDates] = useState<{ [key: string]: string | undefined }>({});
  const newArgs: MyOsProps = {
    ...args,
    slots: {
      ...args.slots,
      scorecardsCardProps: {
        ...args.slots?.scorecardsCardProps,
        scorecardsContentProps: (
          args.slots?.scorecardsCardProps?.scorecardsContentProps || []
        ).map((scorecard: ScorecardsContentProps) => ({
          ...scorecard,
          scorecards: scorecard.scorecards.map(
            (scorecard: Scorecard): Scorecard => {
              return {
                ...scorecard,
                slots: {
                  ...scorecard.slots,
                  dateNavigatorInputProps: {
                    ...scorecard.slots?.dateNavigatorInputProps,
                    // interval: DateNavigatorInterval.DAILY,
                    onPreviousChange: (
                      interval: DateNavigatorInterval,
                      form: FormikProps<any> | undefined,
                      field: FieldInputProps<any> | undefined
                    ) => {
                      const { id } = scorecard;
                      const newDates = { ...dates };
                      const newestDate = newDates[id]
                        ? parseDate(newDates[id])
                        : new Date(intialDate); // Ensure a new Date instance
                      newestDate.setDate(newestDate.getDate() - 1);

                      setDates({
                        ...newDates,
                        [id]: formatDateIso(newestDate)
                      });
                      form?.setFieldValue(
                        field?.name || '',
                        formatDateIso(newestDate)
                      );
                    },
                    onNextChange: (
                      interval: DateNavigatorInterval,
                      form: FormikProps<any> | undefined,
                      field: FieldInputProps<any> | undefined
                    ) => {
                      const { id } = scorecard;
                      const newDates = { ...dates };
                      const newestDate = newDates[id]
                        ? parseDate(newDates[id])
                        : new Date(intialDate); // Ensure a new Date instance
                      newestDate.setDate(newestDate.getDate() + 1);

                      setDates({
                        ...newDates,
                        [id]: formatDateIso(newestDate)
                      });
                      form?.setFieldValue(
                        field?.name || '',
                        formatDateIso(newestDate)
                      );
                    },
                    dateLabelFn: (date: string) => {
                      // const interval = scorecard.interval;
                      const format =
                        date.length >= 10 ? DateFormat.MDY : DateFormat.MMMdd;
                      const parsedDate = parseDate(date, format);
                      return formatDateIso(parsedDate, DateFormat.MMMdd);
                    },
                    sx: { '&': { display: 'flex' }, width: '100%' }
                  }
                }
              };
            }
          )
        }))
      }
    }
  };
  return (
    <ThemeProvider>
      <MyOs {...newArgs} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  today: (() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = days[new Date().getDay()];
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(today)
      ? today
      : null;
  })(),
  standups: {
    mon: false,
    tue: true,
    wed: true,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  teamStandup: {
    name: 'Design Team Standup',
    members: [
      {
        imageUrl:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGuzuLcvM2-IVSuAPSO-RGl9yIfqYUroEv0UCbBI7RAhVM9HuZaQ-tBimvtqSIHTV546yl8raPzrdbvNPUZFMR2-eg6ej5xAg1aFPrs2A'
      },
      {
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
      },
      {
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/4/47/Profile_-_Randall_Boggs.jpeg'
      },
      { imageUrl: 'https://example.com/avatar4.jpg' },
      { imageUrl: 'https://example.com/avatar5.jpg' }
    ],
    streak: '2 day streak',
    totalMembers: 5,
    workingSchedule: {
      Mon: WorkScheduleStatus.WORKING_FROM_OFFICE,
      Tue: WorkScheduleStatus.WORKING_FROM_OFFICE,
      Wed: WorkScheduleStatus.WORKING_FROM_OFFICE,
      Thu: WorkScheduleStatus.WORKING_FROM_OFFICE,
      Fri: WorkScheduleStatus.WORKING_FROM_OFFICE,
      Sat: WorkScheduleStatus.DAY_OFF,
      Sun: WorkScheduleStatus.DAY_OFF
    }
  },
  survey: {
    name: 'Team Bonding Effectiveness',
    readLength: '2 min',
    questions: 8,
    due: '2 days',
    dueValue: 3,
    contributors: 15,
    contributed: 8,
    completed: false,
    nextSurveyTitle: 'Team Bonding',
    nextSurveySubtitle: 'Next Survey at 9:00AM 08/13',
    id: '1'
  },
  slots: {
    dailyStandupCardProps: {
      onHeaderClick: () => {}
    },
    pendingSurveysCard: {
      onHeaderClick: () => {}
    },
    headlinesCardProps: {
      loading: false,
      cardSlots: {},
      slots: {
        sharedListCardContentProps: {
          slots: {
            checkDoneFormProps: {
              // id?: string;
              // isTransitioning?: boolean;
              handleSubmit: async (
                values: { id: string; done: boolean },
                formik: FormikHelpers<{ id: string; done: boolean }>
              ) => {},
              isCheckedFn: (id: string) => {
                return true;
              }
              // isTransitioningRowFn?: (id: string) => boolean;
              // hoveredRowIdFn?: (id: string) => string | null;
            }
          }
        }
      }
    },
    ideasCardProps: {
      onHeaderClick: () => {}
    },
    issuesCardProps: {
      onHeaderClick: () => {}
    },
    okrsCardProps: {
      okrName: 'OKR',
      onHeaderClick: () => {}
    },
    latestDigestCardProps: {
      onClickEmptyState: () => {},
      firstDigestSubtitle: 'First Digest at 9:00AM 08/13',
      onHeaderClick: () => {}
    },
    todosCardProps: {
      onHeaderClick: () => {}
    },
    scorecardsCardProps: {
      onClickEmptyState: () => {},
      onHeaderClick: () => {},
      scorecardsContentProps: [
        {
          title: 'Daily',
          onClickEmptyState: () => {},
          scorecards: [
            {
              id: '1',
              title: 'Design wireframes for Wave',
              goal: '> 1',
              value: 0,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.GREATER_THAN,
                '1',
                0
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            },
            {
              id: '2',
              title: 'Create a style guide for the new project',
              goal: '= 100',
              value: 70,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.EQUAL_TO,
                '100',
                70
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            },
            {
              id: '3',
              title: 'Develop high-fidelity mockups for the homepage',
              goal: '> 10',
              value: 99,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.GREATER_THAN,
                '10',
                99
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            },
            {
              id: '4',
              title: 'Conduct a usability test on the current prototype',
              goal: '= 100',
              value: 20,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.EQUAL_TO,
                '100',
                20
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            }
          ]
        },
        {
          title: 'Weekly',
          onClickEmptyState: () => {},
          scorecards: [
            {
              id: '5',
              title: 'Design wireframes for Wave',
              goal: '= 100',
              value: 50,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.EQUAL_TO,
                '100',
                50
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            },
            {
              id: '6',
              title: 'Create a style guide for the new project',
              goal: '< 100',
              value: 70,
              onSave,
              slots: { dateNavigatorInputProps },
              backgroundColor: getColorByValue(
                GoalCondition.LESS_THAN,
                '100',
                70
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            }
          ]
        },
        {
          title: 'Monthly',
          onClickEmptyState: () => {},
          scorecards: []
        }
      ]
    }
  },
  digest: [
    {
      date: '04/04/24',
      title: 'Daily News',
      readLength: '3 min',
      listenLength: '5 min',
      id: '1',
      onClick: () => {}
    },
    {
      date: '04/03/24',
      title: 'Yearly Review',
      readLength: '5 min',
      listenLength: '7 min',
      id: '2',
      onClick: () => {}
    },
    {
      date: '04/02/24',
      title: 'News on AI Implementation',
      readLength: '10 min',
      listenLength: '12 min',
      id: '3',
      onClick: () => {}
    }
  ],
  okrs: [
    {
      id: '1',
      title: 'Design wireframes for Wave',
      quarter: '1',
      people: 'Org Wide',
      percentage: 50,
      onClick: () => {}
    },
    {
      id: '2',
      title: 'Create a style guide for the new project',
      quarter: '3',
      people: 'Design',
      percentage: 70,
      onClick: () => {}
    },
    {
      id: '3',
      title: 'Develop high-fidelity mockups for the homepage',
      quarter: '2',
      people: 'Engineering',
      percentage: 99,
      onClick: () => {}
    },
    {
      id: '4',
      title: 'Conduct a usability test on the current prototype',
      quarter: '4',
      people: 'Design',
      percentage: 20,
      onClick: () => {}
    }
  ],
  meetings: [
    {
      id: '1',
      startTime: '9:45AM',
      endTime: '10:45AM',
      title: 'Design Review Meeting',
      team: '1-On-1',
      avatars: [
        {
          url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGuzuLcvM2-IVSuAPSO-RGl9yIfqYUroEv0UCbBI7RAhVM9HuZaQ-tBimvtqSIHTV546yl8raPzrdbvNPUZFMR2-eg6ej5xAg1aFPrs2A'
        },
        {
          url: 'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
        },
        {
          url: 'https://static.wikia.nocookie.net/disney/images/4/47/Profile_-_Randall_Boggs.jpeg'
        },
        { url: 'https://example.com/avatar1.jpg' },
        { url: 'https://example.com/avatar1.jpg' }
      ],
      onClick: () => {}
    },
    {
      id: '2',
      startTime: '11:00AM',
      endTime: '11:30PM',
      title: '1-1 With Jessica',
      team: '1-On-1',
      avatars: [
        {
          url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGuzuLcvM2-IVSuAPSO-RGl9yIfqYUroEv0UCbBI7RAhVM9HuZaQ-tBimvtqSIHTV546yl8raPzrdbvNPUZFMR2-eg6ej5xAg1aFPrs2A'
        }
      ],
      onClick: () => {}
    },
    {
      id: '3',
      startTime: '3:30PM',
      endTime: '4:00PM',
      title: '1-1 With Mark',
      team: 'Team',
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
        }
      ],
      onClick: () => {}
    },
    {
      id: '4',
      startTime: '4:00PM',
      endTime: '4:30PM',
      title: '1-1 With Nancy',
      team: 'Team',
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
        }
      ],
      onClick: () => {}
    },
    {
      id: '5',
      startTime: '4:30PM',
      endTime: '5:00PM',
      title: '1-1 With John',
      team: '1-On-1',
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/4/47/Profile_-_Randall_Boggs.jpeg'
        }
      ],
      onClick: () => {}
    }
  ],
  headlines: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />,
      onClick: () => {}
    },
    {
      id: '2',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />,
      onClick: () => {}
    },
    {
      id: '3',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />,
      onClick: () => {}
    }
  ],
  issues: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />,
      onClick: () => {}
    }
  ],
  ideas: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />,
      onClick: () => {}
    }
  ],
  todos: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />,
      onClick: () => {}
    }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  today: (() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = days[new Date().getDay()];
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(today)
      ? today
      : null;
  })(),
  standups: {
    mon: false,
    tue: true,
    wed: true,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  teamStandup: {
    name: 'Design Team Standup',
    members: [],
    streak: '2 day streak',
    totalMembers: 0,
    workingSchedule: {
      Mon: WorkScheduleStatus.DAY_OFF,
      Tue: WorkScheduleStatus.DAY_OFF,
      Wed: WorkScheduleStatus.DAY_OFF,
      Thu: WorkScheduleStatus.DAY_OFF,
      Fri: WorkScheduleStatus.DAY_OFF,
      Sat: WorkScheduleStatus.DAY_OFF,
      Sun: WorkScheduleStatus.DAY_OFF
    }
  },
  slots: {
    pendingSurveysCard: {
      onHeaderClick: () => {},
      emptyStateSubtitle: 'No Pending Surveys'
    },
    ideasCardProps: {
      onHeaderClick: () => {}
    },
    issuesCardProps: {
      onHeaderClick: () => {}
    },
    okrsCardProps: {
      okrName: 'OKR',
      onHeaderClick: () => {}
    },
    latestDigestCardProps: {
      onClickEmptyState: () => {},
      firstDigestSubtitle: 'First Digest at 9:00AM 08/13',
      onHeaderClick: () => {}
    },
    todosCardProps: {
      onHeaderClick: () => {}
    },
    scorecardsCardProps: {
      onClickEmptyState: () => {},
      onHeaderClick: () => {},
      scorecardsContentProps: []
    }
  },
  digest: [],
  okrs: [],
  meetings: [],
  issues: [],
  ideas: [],
  todos: []
};
