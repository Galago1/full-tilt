import { render, screen, fireEvent, act } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as OKRModalStories from './OKRModal.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(OKRModalStories) as any;

describe('OKRModal', () => {
  const mockOnClose = jest.fn();

  it('renders', () => {
    render(<Default open={true} onClose={mockOnClose} />);
    expect(screen.getByText('OKR Title')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Please name your metric')
    ).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockOnSubmit = jest.fn();
    render(
      <Default open={true} onClose={mockOnClose} onSubmit={mockOnSubmit} />
    );

    const input = screen.getByPlaceholderText('Please name your metric');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Test OKR' } });
    });

    const form = document.querySelector('form');
    await act(async () => {
      fireEvent.submit(form!);
    });

    expect(mockOnSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        okrTitle: 'Test OKR',
        champion: 'none',
        team: 'none',
        category: 'none',
        description: ''
      })
    );
  });
});
