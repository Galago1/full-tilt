import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as FooterStories from './Footer.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { TwoIcons } = composeStories(FooterStories);

describe('Footer', () => {
  test('renders the TwoIcons footer', () => {
    render(<TwoIcons data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
