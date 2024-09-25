import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as DateInputStories from './CheckboxList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { OneCheckbox } = composeStories(DateInputStories);

describe('Checkbox list', () => {
  test('renders the OneCheckbox', () => {
    render(<OneCheckbox data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
