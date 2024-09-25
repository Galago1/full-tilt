import { render, screen } from '@testing-library/react';
import { CustomSelectOption } from './CustomSelectOption';

import { composeStories } from '@storybook/testing-react';
import * as CustomSelectOptionStories from './CustomSelectOption.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Basic } = composeStories(CustomSelectOptionStories);

describe('CustomSelectOption', () => {
  test('renders the CustomSelectOption', () => {
    render(<CustomSelectOption value="custom-element" />);
    const element = screen.getByText('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Basic', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
