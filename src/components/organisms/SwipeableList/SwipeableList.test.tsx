import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SwipeableListStories from './SwipeableList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { WithImage } = composeStories(SwipeableListStories);

describe('SwipeableList', () => {
  test('renders the card list', () => {
    render(<WithImage data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
