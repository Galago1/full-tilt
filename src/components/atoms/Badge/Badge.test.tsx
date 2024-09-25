import { render, screen } from '@testing-library/react';
import Badge from './Badge';

import { composeStories } from '@storybook/testing-react';
import * as BadgeStories from './Badge.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Basic } = composeStories(BadgeStories);
describe('Badge', () => {
  test('renders the Badge', () => {
    render(<Badge data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the Badge, determinant', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
