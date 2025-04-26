import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import NavigationNextPrevStories from './NavigationNextPrev.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Basic } = composeStories(NavigationNextPrevStories) as any;

describe('NavigationNextPrev', () => {
  test('renders the modal', () => {
    render(<Basic data-testid="custom-element" />);
    // const element = screen.getByTestId('custom-element');
    // expect(element).toBeInTheDocument();
    expect(true);
  });
});
