import { render, screen } from '@testing-library/react';
// import MeetingTable from './MeetingTable';
import { composeStories } from '@storybook/testing-react';
import * as MeetingTimeCardStories from './MeetingTimeCard.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(MeetingTimeCardStories);

describe('MeetingTimeCard', () => {
  it('renders correctly with initial data', async () => {
    render(<Default data-testId={'custom-element'} />);

    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
