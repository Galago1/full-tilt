import { render, screen } from '@testing-library/react';
import { ZapIcon } from 'src/components/particles/theme/overrides/CustomIcons';

import { composeStories } from '@storybook/testing-react';
import * as MyOsStories from './MyOs.stories'; //👈  Our stories imported here
import { MyOsProps } from './MyOs';
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(MyOsStories);

const mockProps: MyOsProps = {
  today: (() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = days[new Date().getDay()];
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(today) ? today : null;
  })(),
  standups: {
    mon: false,
    tue: true,
    wed: true,
    thu: false,
    fri: false
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
    id: '1',
    name: 'Team Bonding Effectiveness',
    readLength: '2 min',
    questions: 8,
    due: '2 days',
    dueValue: 2,
    contributors: 15,
    contributed: 8
  },
  todos: [{ status: 'todo', title: 'Design wireframes for Wave' }],
  digest: [
    {
      id: 'asdc',
      date: '04/04/24',
      title: 'Daily News',
      readLength: '3 min',
      onClick: () => {},
      listenLength: '5 min'
    },
    {
      id: '2',
      date: '04/03/24',
      title: 'Yearly Review',
      readLength: '5 min',
      onClick: () => {},
      listenLength: '5 min'
    },
    {
      id: '4',
      date: '04/02/24',
      title: 'News on AI Implementation',
      readLength: '10 min',
      onClick: () => {},
      listenLength: '5 min'
    }
  ],
  okrs: [
    {
      id: '1',
      title: 'Design wireframes for Wave',
      quarter: '1',
      people: 'Org Wide',
      onClick: () => {},
      percentage: 50
    },
    {
      id: '2',
      title: 'Create a style guide for the new project',
      quarter: '3',
      people: 'Design',
      onClick: () => {},
      percentage: 70
    },
    {
      id: '3',
      title: 'Develop high-fidelity mockups for the homepage',
      quarter: '2',
      people: 'Engineering',
      onClick: () => {},
      percentage: 99
    }
  ],
  meetings: [
    {
      id: '1',
      startTime: '9:45AM',
      endTime: '10:45AM',
      title: 'Design Review Meeting',
      team: 'Design',
      onClick: () => {},
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
      ]
    },
    {
      id: '2',
      startTime: '11:00AM',
      endTime: '11:30PM',
      title: '1-1 With Jessica',
      team: 'Design',
      onClick: () => {},
      avatars: [
        {
          url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGuzuLcvM2-IVSuAPSO-RGl9yIfqYUroEv0UCbBI7RAhVM9HuZaQ-tBimvtqSIHTV546yl8raPzrdbvNPUZFMR2-eg6ej5xAg1aFPrs2A'
        }
      ]
    },
    {
      id: '3',
      startTime: '3:30PM',
      endTime: '4:00PM',
      title: '1-1 With Mark',
      team: 'Engineering',
      onClick: () => {},
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
        }
      ]
    },
    {
      id: '4',
      startTime: '4:00PM',
      endTime: '4:30PM',
      title: '1-1 With Nancy',
      team: 'Engineering',
      onClick: () => {},
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/7/78/Mike_Wazowski_2.jpg'
        }
      ]
    },
    {
      id: '5',
      startTime: '4:30PM',
      endTime: '5:00PM',
      title: '1-1 With John',
      team: 'Design',
      onClick: () => {},
      avatars: [
        {
          url: 'https://static.wikia.nocookie.net/disney/images/4/47/Profile_-_Randall_Boggs.jpeg'
        }
      ]
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
    },
    {
      id: '2',
      status: 'To Do',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'Low',
      icon: <ZapIcon />
    },
    {
      id: '3',
      status: 'Blocked',
      title:
        'Take time to review the wireframes before the next review meeting',
      priority: 'High',
      icon: <ZapIcon />
    }
  ]
};

describe('MyOs Component', () => {
  it('renders without crashing', () => {
    render(<Default {...mockProps} />);

    expect(screen.getByText('Design Team Standup')).toBeInTheDocument();
    expect(screen.getByText('Team Bonding Effectiveness')).toBeInTheDocument();
    expect(screen.getByText('Design wireframes for Wave')).toBeInTheDocument();
    expect(screen.getByText('Daily News')).toBeInTheDocument();
    expect(screen.getByText('Design Review Meeting')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Take time to review the wireframes before the next review meeting'
      )
    ).toBeInTheDocument();
  });
});
