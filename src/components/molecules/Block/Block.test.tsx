import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as HeaderStories from './Block.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(HeaderStories);

describe('Block', () => {
  test('renders the nav', () => {
    render(<Default data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
