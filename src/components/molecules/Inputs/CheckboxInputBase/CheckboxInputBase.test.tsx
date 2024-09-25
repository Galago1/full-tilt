import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as DateInputStories from './CheckboxInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(DateInputStories);

describe('DateInput', () => {
  test('renders the Normal', () => {
    render(<Normal data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
