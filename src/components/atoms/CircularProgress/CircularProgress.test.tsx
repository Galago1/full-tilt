import { render, screen } from '@testing-library/react';
import CircularProgress from './CircularProgress';

import { composeStories } from '@storybook/testing-react';
import * as CircularProgressStories from './CircularProgress.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { CircularIndeterminate } = composeStories(CircularProgressStories);
describe('CircularProgress', () => {
  test('renders the CircularProgress', () => {
    render(<CircularProgress data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the CircularProgress, determinant', () => {
    render(<CircularIndeterminate data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
