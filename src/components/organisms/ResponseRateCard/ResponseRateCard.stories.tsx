import { Meta, Story } from '@storybook/react';
import { TestResponseRateElem } from './helpers';
import ResponseRateCard, { ResponseRateCardProps } from './ResponseRateCard';
import ThemeProvider from 'src/components/particles/theme';

const mockTeamData = [
  {
    id: '1',
    name: 'Dev Team',
    members: 45,
    responseRate: 20,
    onTrackRate: 90,
    blockedRate: 20
  },
  {
    id: '2',
    name: 'Leadership',
    members: 4,
    responseRate: 60,
    onTrackRate: 70,
    blockedRate: 20
  },
  {
    id: '3',
    name: 'Peers',
    members: 12,
    responseRate: 60,
    onTrackRate: 60,
    blockedRate: 20
  },
  {
    id: '4',
    name: 'Guidance',
    members: 4,
    responseRate: 20,
    onTrackRate: 80,
    blockedRate: 20
  },
  {
    id: '5',
    name: 'Teamwork',
    members: 45,
    responseRate: 10,
    onTrackRate: 80,
    blockedRate: 20
  },
  {
    id: '6',
    name: 'Interns',
    members: 5,
    responseRate: 20,
    onTrackRate: 10,
    blockedRate: 20
  }
];

export default {
  title: 'Organisms/ResponseRateCard',
  component: ResponseRateCard
} as Meta;

const Template: Story<ResponseRateCardProps> = (args) => (
  <ThemeProvider>
    <ResponseRateCard {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  totalStandUps: 4862,
  totalStandUpsChange: 15,
  onTrackRate: 80,
  onTrackRateChange: 15,
  blockedRate: 12,
  blockedRateChange: -15,
  avgResponseRate: 83,
  avgResponseRateChange: 20,
  slots: {
    dataGridProps: {
      rows: mockTeamData,
      // prettier-ignore
      columns: [
        { field: 'name', headerName: 'Team', flex: 1 },
        { field: 'members', headerName: 'Members', flex: 1 },
        { field: 'responseRate', headerName: 'Response Rate', flex: 1 },
        { field: 'onTrackRate', headerName: 'On Track Rate', flex: 1 },
        { field: 'blockedRate', headerName: 'Blocked Rate', flex: 1 }
      ]
    }
  },
  responseCardDateForm: <TestResponseRateElem />
};

export const ShowChange = Template.bind({});
ShowChange.args = {
  showChange: true,
  totalStandUps: 4862,
  totalStandUpsChange: 15,
  onTrackRate: 80,
  onTrackRateChange: 15,
  blockedRate: 12,
  blockedRateChange: -15,
  avgResponseRate: 83,
  avgResponseRateChange: 20,
  slots: {
    dataGridProps: {
      rows: mockTeamData,
      // prettier-ignore
      columns: [
        { field: 'name', headerName: 'Team', flex: 1 },
        { field: 'members', headerName: 'Members', flex: 1 },
        { field: 'responseRate', headerName: 'Response Rate', flex: 1 },
        { field: 'onTrackRate', headerName: 'On Track Rate', flex: 1 },
        { field: 'blockedRate', headerName: 'Blocked Rate', flex: 1 }
      ]
    }
  },
  responseCardDateForm: <TestResponseRateElem />
};
