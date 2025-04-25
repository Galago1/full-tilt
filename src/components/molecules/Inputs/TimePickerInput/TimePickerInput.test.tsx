import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TimePickerInputStories from './TimePickerInput.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(TimePickerInputStories);

describe('TimePickerInput', () => {
  test('renders the Normal', () => {
    render(<Normal data-testid="custom-element-input" />);
    const labelElement = screen.getByTestId('custom-element-input');
    expect(labelElement).toBeInTheDocument();

    // Find the input element inside the component
    const inputElement = labelElement.querySelector('input');
    expect(inputElement).not.toBeNull();
  });
});
