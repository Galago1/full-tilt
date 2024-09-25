import { render } from '@testing-library/react';
import ResponseRateCard, { ResponseRateCardProps } from './ResponseRateCard'; // Adjust the import path as needed
import { TestResponseRateElem } from './helpers';

const mockTeamData = [
  {
    name: 'Team A',
    members: 5,
    responseRate: 80,
    onTrackRate: 60,
    blockedRate: 20
  },
  {
    name: 'Team B',
    members: 3,
    responseRate: 90,
    onTrackRate: 70,
    blockedRate: 10
  }
];

const defaultProps: ResponseRateCardProps = {
  totalStandUps: 10,
  totalStandUpsChange: 5,
  onTrackRate: 80,
  onTrackRateChange: 10,
  blockedRate: 20,
  blockedRateChange: 5,
  avgResponseRate: 75,
  avgResponseRateChange: 5,
  slots: {
    dataGridProps: {
      sx: { border: 'none' },
      boxSx: { border: 'none' },
      rows: [mockTeamData],
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
  responseCardDateForm: <TestResponseRateElem />,
  lineChartComp: <></>
};

describe('ResponseRateCard', () => {
  it('renders without crashing', () => {
    render(<ResponseRateCard {...defaultProps} />);
  });
});
