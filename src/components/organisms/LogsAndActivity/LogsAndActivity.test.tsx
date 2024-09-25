import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as LogsAndActivityStories from './LogsAndActivity.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Empty } = composeStories(LogsAndActivityStories);

describe('LogsAndActivity', () => {
  test('renders the card list', () => {
    render(<Empty data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
