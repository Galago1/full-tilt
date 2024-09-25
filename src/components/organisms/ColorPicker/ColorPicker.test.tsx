import { fireEvent, render, screen } from '@testing-library/react';
import { Default } from './ColorPicker.stories';

describe('ColorPicker Component', () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF'];
  test('renders correctly with initial color selected', () => {
    render(<Default colors={colors} />);
    const initialColorButton = screen.getAllByRole('button')[0]; // Assuming the first color is selected by default
    expect(initialColorButton).toHaveStyle(`background-color: ${colors[0]}`);
  });

  test('changes selection on button click', () => {
    render(<Default colors={colors} />);
    const secondColorButton = screen.getAllByRole('button')[1]; // Access the button for the second color

    // Click the second color button
    fireEvent.click(secondColorButton);

    // Check if the second color is now selected
    expect(secondColorButton).toHaveStyle(`background-color: ${colors[1]}`);
  });
});
