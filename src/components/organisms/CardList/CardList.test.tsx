import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  test('renders the card list', () => {
    render(<CardList cards={[]} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
