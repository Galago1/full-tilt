import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as BasicEmptyStateStories from './BasicEmptyState.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Initial } = composeStories(BasicEmptyStateStories) as any;

describe('BasicEmptyState', () => {
  it('renders successfully', async () => {
    render(<Initial data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
