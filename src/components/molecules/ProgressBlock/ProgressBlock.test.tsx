import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ProgressBlockStories from './ProgressBlock.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ProgressBlockStories);

describe('Default', () => {
  test('renders the nav', () => {
    render(<Default data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
