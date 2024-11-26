import { render } from '@testing-library/react';
import OverviewCard from './OverviewCard';
import { mockData } from './helpers';

describe('OverviewCard', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <OverviewCard
        data={mockData}
        selectedQuarter="q1"
        onQuarterChange={() => {}}
        showSwitches={false}
        middleButtonProps={{}}
      />
    );

    expect(getByText('Survey Overview')).toBeInTheDocument();
    expect(getByText('Teams')).toBeInTheDocument();
    expect(getByText('Product Team')).toBeInTheDocument();
    expect(getByText('Productivity & Focus')).toBeInTheDocument();
    expect(getByText('85')).toBeInTheDocument();
  });
});
