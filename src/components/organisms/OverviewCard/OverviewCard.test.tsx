import { render } from '@testing-library/react';
import * as OverviewCardStories from './OverviewCard.stories'; //👈  Our stories imported here
import { composeStories } from '@storybook/testing-react';
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(OverviewCardStories);

describe('OverviewCard', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Default />);

    expect(getByText('Feedback Overview')).toBeInTheDocument();
    expect(getByText('Teams')).toBeInTheDocument();
    expect(getByText('Product Team')).toBeInTheDocument();
    expect(getByText('Productivity & Focus')).toBeInTheDocument();
  });
});
