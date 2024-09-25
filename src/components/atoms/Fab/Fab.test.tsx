import { render, screen } from '@testing-library/react';
import Fab from './Fab';

import { composeStories } from '@storybook/testing-react';
import * as FabStories from './Fab.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Basic } = composeStories(FabStories);
describe('Fab', () => {
  test('renders the Fab', () => {
    render(<Fab data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Fab, determinant', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
