import { render, screen } from '@testing-library/react';
import Divider from './Divider';

import { composeStories } from '@storybook/testing-react';
import * as DividerStories from './Divider.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Basic } = composeStories(DividerStories);
describe('Divider', () => {
  test('renders the Divider', () => {
    render(<Divider data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the Divider, determinant', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
