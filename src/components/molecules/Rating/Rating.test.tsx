import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as RatingStories from './Rating.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ReadOnly } = composeStories(RatingStories);

describe('Rating', () => {
  test('renders the Rating', () => {
    render(<ReadOnly data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
