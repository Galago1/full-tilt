import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LoadingOverlayStories from './LoadingOverlay.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(LoadingOverlayStories);

describe('LoadingOverlay', () => {
  test('renders the LoadingOverlay', async () => {
    render(<Default data-testid="filter-list" />);
    const element = await screen.findByTestId('filter-list');
    expect(element).toBeInTheDocument();
  });
});
