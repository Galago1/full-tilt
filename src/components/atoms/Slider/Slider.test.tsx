import { render, screen } from '@testing-library/react';
import Slider from './Slider';

import { composeStories } from '@storybook/testing-react';
import * as SliderStories from './Slider.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { BasicSlider } = composeStories(SliderStories);
describe('Slider', () => {
  test('renders the Slider', () => {
    render(<Slider data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  test('renders the CircularProgress, determinant', () => {
    render(<BasicSlider data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
