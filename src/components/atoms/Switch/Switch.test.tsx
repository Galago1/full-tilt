import { render, screen } from '@testing-library/react';
import Switch from './Switch';

import { composeStories } from '@storybook/testing-react';
import * as SwitchStories from '../../molecules/Switch.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { PlacementSwitch } = composeStories(SwitchStories);
describe('Checkbox', () => {
  test('renders the Checkbox', () => {
    render(<Switch data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders placement radio', () => {
    render(<PlacementSwitch />);
    const element = screen.getByText(/Top/);
    expect(element).toBeInTheDocument();
  });
});
