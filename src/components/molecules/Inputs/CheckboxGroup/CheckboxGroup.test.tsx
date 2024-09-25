import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as CheckboxGroupStories from './CheckboxGroup.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { OneOption } = composeStories(CheckboxGroupStories);

describe('Checkbox list', () => {
  test('renders the OneOption', () => {
    render(<OneOption data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
