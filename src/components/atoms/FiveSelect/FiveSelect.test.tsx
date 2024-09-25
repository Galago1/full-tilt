import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as FiveSelectStories from './FiveSelect.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(FiveSelectStories);
import { FiveSelectProps } from './FiveSelect';

const labels: FiveSelectProps['labels'] = {
  1: 'Option 1',
  2: 'Option 2',
  3: 'Option 3',
  4: 'Option 4',
  5: 'Option 5'
};

describe('Default', () => {
  it('renders all labels correctly', () => {
    const { getByText } = render(<Default labels={labels} />);
    Object.values(labels).forEach((label) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it('renders circles correctly', () => {
    const { getAllByRole } = render(<Default labels={labels} />);
    const circles = getAllByRole('button');
    expect(circles.length).toBe(5);
  });
});
