import { ComponentMeta, Story } from '@storybook/react';
import { FormikHelpers } from 'formik';
import { ButtonGroupProps } from 'src/components/molecules/ButtonGroup/ButtonGroup';
import { InlineFormikProps } from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ZapIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { MyOs, MyOsProps } from './MyOs';
import {
  getColorByValue,
  GoalCondition
} from 'src/components/organisms/Scorecard/helpers';

const onSave = (
  values: InlineFormikProps,
  form: FormikHelpers<InlineFormikProps>,
  onCloseEditor: () => void
) => {};

const buttonGroupProps: ButtonGroupProps = {
  sx: { '&': { display: 'flex' } },
  buttons: [
    {
      label: <ChevronLeftIcon sx={{ width: 20, height: 20 }} />,
      variant: 'outlined',
      color: 'secondary',
      size: 'small',
      sx: {
        '&': {
          minWidth: 'auto',
          borderRight: 'unset',
          p: 1,
          py: 1.5
        }
      },
      onClick: () => console.log('clicked')
    },
    {
      label: 'Jul 16',
      variant: 'outlined',
      color: 'secondary',
      size: 'small',
      fullWidth: true,
      sx: {
        '&': {
          minWidth: 'auto',
          borderRight: 'unset',
          borderLeft: 'unset',
          p: 1,
          py: 1.5
        },
        flex: 1
      },
      disabled: true
      // itemprops: { flex: 1 }
    },
    {
      label: <ChevronRightIcon sx={{ width: 20, height: 20 }} />,
      variant: 'outlined',
      color: 'secondary',
      size: 'small',
      sx: {
        '&': {
          minWidth: 'auto',
          borderLeft: 'unset',
          p: 1,
          py: 1.5
        }
      },
      onClick: () => console.log('clicked')
    }
  ]
};

export default {
  title: 'Templates/MyOs',
  component: MyOs,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof MyOs>;

const Template: Story<MyOsProps> = (args) => <MyOs {...args} />;

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
    streak: '2 day streak'
  },
  survey: {
    name: 'Team Bonding Effectiveness',
    readLength: '2 min',
    questions: 8,
    due: '2 days',
    dueValue: 3,
    contributors: 15,
    contributed: 8,
    id: '1'
  },
  slots: {
    scorecardsCardProps: {
      scorecardsContentProps: [
        {
          title: 'Daily',
          scorecards: [
            {
              id: '1',
              title: 'Design wireframes for Wave',
              goal: '> 1',
              value: 0,
              onSave,
              slots: { buttonGroupProps },
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
              slots: { buttonGroupProps },
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
              slots: { buttonGroupProps },
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
              slots: { buttonGroupProps },
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
          scorecards: [
            {
              id: '5',
              title: 'Design wireframes for Wave',
              goal: '= 100',
              value: 50,
              onSave,
              slots: { buttonGroupProps },
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
              slots: { buttonGroupProps },
              backgroundColor: getColorByValue(
                GoalCondition.LESS_THAN,
                '100',
                70
              ),
              date: 'Jul 13',
              measurableMetricId: '1'
            }
          ]
        }
      ]
    }
  },
  digest: [
    // {
    //   date: '04/04/24',
    //   title: 'Daily News',
    //   readLength: '3 min',
    //   listenLength: '5 min',
    //   id: '1',
    //   onClick: () => console.log('clicked')
    // },
    // {
    //   date: '04/03/24',
    //   title: 'Yearly Review',
    //   readLength: '5 min',
    //   listenLength: '7 min',
    //   id: '2',
    //   onClick: () => console.log('clicked')
    // },
    // {
    //   date: '04/02/24',
    //   title: 'News on AI Implementation',
    //   readLength: '10 min',
    //   listenLength: '12 min',
    //   id: '3',
    //   onClick: () => console.log('clicked')
    // }
  ],
  okrs: [
    {
      id: '1',
      title: 'Design wireframes for Wave',
      quarter: '1',
      people: 'Org Wide',
      percentage: 50,
      onClick: () => console.log('clicked')
    },
    {
      id: '2',
      title: 'Create a style guide for the new project',
      quarter: '3',
      people: 'Design',
      percentage: 70,
      onClick: () => console.log('clicked')
    },
    {
      id: '3',
      title: 'Develop high-fidelity mockups for the homepage',
      quarter: '2',
      people: 'Engineering',
      percentage: 99,
      onClick: () => console.log('clicked')
    },
    {
      id: '4',
      title: 'Conduct a usability test on the current prototype',
      quarter: '4',
      people: 'Design',
      percentage: 20,
      onClick: () => console.log('clicked')
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
      onClick: () => console.log('clicked')
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
      onClick: () => console.log('clicked')
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
      onClick: () => console.log('clicked')
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
      onClick: () => console.log('clicked')
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
      onClick: () => console.log('clicked')
    }
  ],
  issues: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />
    },
    {
      id: '2',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />
    },
    {
      id: '3',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'High',
      icon: <ZapIcon />
    },
    {
      id: '4',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />
    },
    {
      id: '5',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />
    },
    {
      id: '6',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />
    },
    {
      id: '7',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />
    }
  ],
  feedback: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'High',
      icon: <ZapIcon />
    },
    {
      id: '2',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'High',
      icon: <ZapIcon />
    },
    {
      id: '3',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'High',
      icon: <ZapIcon />
    }
  ],
  ideas: [
    {
      id: '1',
      status: 'In Progress',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Medium',
      icon: <ZapIcon />
    }
  ]
};
