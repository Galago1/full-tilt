import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as CloseButtonStories from './CloseButton.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Initial } = composeStories(CloseButtonStories) as any;

describe('CloseButton', () => {
  it('renders successfully', async () => {
    render(<Initial data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
