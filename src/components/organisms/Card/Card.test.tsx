import { render, screen } from '@testing-library/react';
import { WithHeaderCard } from './Card.stories';

describe('Card', () => {
  test('renders the modal', () => {
    render(<WithHeaderCard data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
