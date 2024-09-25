import { render, screen } from '@testing-library/react';
import Chip from './Chip';

import { composeStories } from '@storybook/testing-react';
import * as ChipStories from './Chip.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { BaseFilledBasic } = composeStories(ChipStories);
describe('Chip', () => {
  test('renders the Chip', () => {
    render(<Chip data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the Badge, determinant', () => {
    render(<BaseFilledBasic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
