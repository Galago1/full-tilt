import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as CheckboxStories from './Checkbox.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { BasicChecked } = composeStories(CheckboxStories);
describe('Checkbox', () => {
  test('renders the Badge, determinant', () => {
    render(<BasicChecked data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
