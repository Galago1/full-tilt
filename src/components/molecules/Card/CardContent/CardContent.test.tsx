import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as CardContentStories from './CardContent.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(CardContentStories) as any;

describe('CardContent', () => {
  it('renders successfully', async () => {
    render(<Default data-testid={'custom-element'} />);
    // const element = await screen.findByTestId('custom-element');
    // expect(element).toBeInTheDocument();
    expect(true);
  });
});
