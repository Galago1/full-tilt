import { ComponentMeta, ComponentStory } from '@storybook/react';
import MeetingTable from './MeetingTable';
import ThemeProvider from 'src/components/particles/theme';

export default {
  title: 'Organisms/MeetingTable',
  component: MeetingTable
} as ComponentMeta<typeof MeetingTable>;

const meetingsData = {
  'Team A': [
    {
      title: 'Website Rollout',
      date: 'Jun 3, 2024, 5:33:28 PM',
      presenter: 'Phoenix Baker',
      imagePath: '/assets/images/phoenix_baker.png',
      type: 'Weekly'
    },
    {
      title: 'Develop Internal/External Programmatic Ad. Campaign',
      date: 'Jun 3, 2024, 5:33:28 PM',
      presenter: 'Olivia Rhye',
      imagePath: '/assets/images/olivia_rhye.png',
      type: 'Weekly'
    },
    {
      title: 'Reestablish post-acquisition process',
      date: 'Jun 3, 2024, 5:33:28 PM',
      presenter: 'Lana Steiner',
      imagePath: '/assets/images/lana_steiner.png',
      type: 'Weekly'
    }
  ],
  'Team B': [
    {
      title: 'Team Building Workshop',
      date: 'Jun 4, 2024, 10:00:00 AM',
      presenter: 'John Doe',
      imagePath: '/assets/images/john_doe.png',
      type: 'Quarterly'
    },
    {
      title: 'Budget Planning',
      date: 'Jun 5, 2024, 2:00:00 PM',
      presenter: 'Jane Smith',
      imagePath: '/assets/images/jane_smith.png',
      type: 'Annual'
    }
  ],
  'Team C': [
    {
      title: 'Client Meeting',
      date: 'Jun 6, 2024, 11:00:00 AM',
      presenter: 'Alice Johnson',
      imagePath: '/assets/images/alice_johnson.png',
      type: 'Other'
    },
    {
      title: 'Product Launch',
      date: 'Jun 7, 2024, 4:00:00 PM',
      presenter: 'Bob Brown',
      imagePath: '/assets/images/bob_brown.png',
      type: 'Quarterly'
    }
  ]
};

const Template: ComponentStory<typeof MeetingTable> = (args) => (
  <ThemeProvider>
    <MeetingTable {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  data: meetingsData
};

export const Empty = Template.bind({});
Empty.args = {
  data: {}
};
