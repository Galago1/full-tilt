import { fireEvent, render, screen } from '@testing-library/react';
import StandUpSlideout from './StandUpSlideout'; // Adjust the import path as necessary

describe('StandUpSlideout', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onSubmit: jest.fn()
  };

  test('renders the component with all elements', () => {
    render(<StandUpSlideout {...defaultProps} />);

    // Check if all text elements are rendered
    expect(screen.getByText('Daily Stand Up')).toBeInTheDocument();
    expect(screen.getByText('Results visible to everyone')).toBeInTheDocument();
    expect(
      screen.getByText("Did you meet yesterday's goals?")
    ).toBeInTheDocument();
    expect(
      screen.getByText('Do you feel aligned and on track for the week?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('What do you plan to do today?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Do you have any blockers today?')
    ).toBeInTheDocument();
    expect(screen.getByText('Do you have any questions?')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Update')).toBeInTheDocument();
  });

  test('toggles the switches and updates the text', () => {
    render(<StandUpSlideout {...defaultProps} />);

    const goalsSwitch = screen.getAllByRole('checkbox')[0];
    const alignedSwitch = screen.getAllByRole('checkbox')[1];
    const blockersSwitch = screen.getAllByRole('checkbox')[2];
    const questionsSwitch = screen.getAllByRole('checkbox')[3];

    expect(screen.getAllByText('No').length).toBe(4);

    fireEvent.click(goalsSwitch);
    expect(screen.getByText('Yes')).toBeInTheDocument();

    fireEvent.click(alignedSwitch);
    expect(screen.getAllByText('Yes')[1]).toBeInTheDocument();

    fireEvent.click(blockersSwitch);
    expect(screen.getAllByText('Yes')[2]).toBeInTheDocument();

    fireEvent.click(questionsSwitch);
    expect(screen.getAllByText('Yes')[3]).toBeInTheDocument();
  });
});
