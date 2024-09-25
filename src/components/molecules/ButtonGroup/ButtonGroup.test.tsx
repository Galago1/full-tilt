import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from './ButtonGroup.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ButtonStories);

describe('ButtonGroup', () => {
  test('renders the Default button', () => {
    render(<Default />);
    const buttonElement = screen.getByText(/Button One/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
