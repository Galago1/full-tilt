import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

import { composeStories } from '@storybook/testing-react';
// import * as RadioButtonStories from './RadioButton.stories'; //👈  Our stories imported here
import * as RadioButtonStoriesMolecules from 'src/components/molecules/RadioButton.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { PlacementRadioButtons } = composeStories(RadioButtonStoriesMolecules);
describe('RadioButton', () => {
  test('renders the RadioButton', () => {
    render(<RadioButton data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders placement radio', () => {
    render(<PlacementRadioButtons />);
    const element = screen.getByText(/Top/);
    expect(element).toBeInTheDocument();
  });
});
