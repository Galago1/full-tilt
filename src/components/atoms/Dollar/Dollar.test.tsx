import { act } from 'react';
import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as DollarFormattingStories from './Dollar.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(DollarFormattingStories) as any;

describe('DollarFormatting', () => {
  test('renders the Normal', async () => {
    await act(async () => {
      render(<Normal />);
    });
    const element = screen.getByText('$0.00');
    expect(element).toBeInTheDocument();
  });
});
