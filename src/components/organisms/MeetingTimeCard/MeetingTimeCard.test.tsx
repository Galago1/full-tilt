import { composeStories } from '@storybook/testing-react';
import * as MeetingTimeCardStories from './MeetingTimeCard.stories'; //👈  Our stories imported here
import { render, screen } from '@testing-library/react';
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(MeetingTimeCardStories);

describe('MeetingTimeCard', () => {
  it('renders correctly with initial data', async () => {
    render(<Default data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
