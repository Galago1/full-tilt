import { render, screen } from '@testing-library/react';
import Stepper from './Stepper';

describe('Stepper', () => {
  test('renders the Stepper', () => {
    render(<Stepper data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
