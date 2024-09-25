import { render, screen } from '@testing-library/react';
import { Default } from './FileInput.stories';

describe('Input', () => {
  test('renders Inpup', () => {
    render(<Default data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
