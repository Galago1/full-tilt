import { render, screen } from '@testing-library/react';
import Button from './Button';

import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from './Button.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Primary } = composeStories(ButtonStories);

describe('Button', () => {
  test('renders the button', () => {
    render(<Button label="Da Button" />);
    const buttonElement = screen.getByText(/Da Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the primary button', () => {
    render(<Primary />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
