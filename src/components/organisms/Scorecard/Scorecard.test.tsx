import { render, screen } from '@testing-library/react';
import { RowData } from './useScorecard';
import * as ScorecardStories from './Scorecard.stories'; //👈  Our stories imported here
import { composeStories } from '@storybook/testing-react';
import { GoalCondition } from './helpers';
//👇 composeStories will process all information related to the component (e.g., args)
const { Daily } = composeStories(ScorecardStories);

const mockData: RowData[] = [
  {
    owner: 'James P Sullivan',
    avatar: 'path/to/avatar.jpg',
    title: '1 point a day',
    goal: '<1',
    trend: 1.1,
    goalCondition: GoalCondition.LESS_THAN,
    data: [
      { id: '1', value: undefined, date: '2022-01-01' },
      { id: '2', value: 0.8, date: '2022-01-02' },
      { id: '3', value: 1, date: '2022-01-03' },
      { id: '4', value: 0.4, date: '2022-01-04' },
      { id: '5', value: undefined, date: '2022-01-05' },
      { id: '6', value: undefined, date: '2022-01-06' }
    ]
  },
  {
    owner: 'Bob Smith',
    avatar: 'path/to/avatar.jpg',
    title: '2 points a day',
    goal: '1-2',
    trend: 1.5,
    goalCondition: GoalCondition.LESS_THAN,
    data: [
      { id: '1', value: 0.6, date: '2022-01-01' },
      { id: '2', value: undefined, date: '2022-01-02' },
      { id: '3', value: 0.8, date: '2022-01-03' },
      { id: '4', value: 0.9, date: '2022-01-04' },
      { id: '5', value: undefined, date: '2022-01-05' },
      { id: '6', value: 1, date: '2022-01-06' }
    ]
  },
  {
    owner: 'Charlie Brown',
    avatar: 'path/to/avatar.jpg',
    title: '3-4 points a day',
    goal: '3-4',
    trend: 3.8,
    goalCondition: GoalCondition.LESS_THAN,
    data: [
      { id: '1', value: 0.7, date: '2022-01-01' },
      { id: '2', value: 0.5, date: '2022-01-02' },
      { id: '3', value: undefined, date: '2022-01-03' },
      { id: '4', value: 0.8, date: '2022-01-04' },
      { id: '5', value: undefined, date: '2022-01-05' },
      { id: '6', value: 1, date: '2022-01-06' }
    ]
  }
];

describe('Scorecard Component', () => {
  it('renders without crashing', () => {
    render(<Daily data={mockData} type="daily" />);
    expect(screen.getByText('Daily')).toBeInTheDocument();
  });
});
