import { render, screen } from '@testing-library/react';
import LinearProgressBar from './LinearProgressBar';

import { composeStories } from '@storybook/testing-react';
import * as LinearProgressBarStories from './LinearProgress.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { LinearIndeterminate } = composeStories(LinearProgressBarStories);
describe('LinearProgressBar', () => {
  test('renders the LinearProgressBar', () => {
    render(<LinearProgressBar data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the LinearProgressBar, determinant', () => {
    render(<LinearIndeterminate data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
