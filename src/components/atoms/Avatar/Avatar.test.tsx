import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

import { composeStories } from '@storybook/testing-react';
import * as AvatarStories from './Avatar.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Basic } = composeStories(AvatarStories);
describe('Avatar', () => {
  test('renders the Avatar', () => {
    render(<Avatar data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the Avatar, determinant', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
