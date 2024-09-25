import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from './Breadcrumbs.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ArrowSeparator } = composeStories(ButtonStories);

describe('Breadcrumbs', () => {
  test('renders the button', () => {
    render(<ArrowSeparator />);
    const buttonElement = screen.getByText(/Middle/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
