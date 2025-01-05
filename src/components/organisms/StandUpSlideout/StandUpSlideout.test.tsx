import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as StandUpSlideoutStories from './StandUpSlideout.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(StandUpSlideoutStories) as any;

describe('Default', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onSubmit: jest.fn(),
    date: '04/20/2022'
  };

  test('renders the component with all elements', () => {
    render(<Default {...defaultProps} />);

    // Check if all text elements are rendered
    expect(screen.getByText(/Edit Daily Standup/)).toBeInTheDocument();
    expect(screen.getByText('Results visible to everyone')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Update')).toBeInTheDocument();
  });

  test('toggles the switches and updates the text', () => {
    const { container } = render(<Default {...defaultProps} />);

    // Find checkboxes by their name attributes
    const goalsCheckbox = container.querySelector('input[name="metGoals"]') as HTMLInputElement;
    const alignedCheckbox = container.querySelector('input[name="alignedOnTrack"]') as HTMLInputElement;
    const blockersCheckbox = container.querySelector('input[name="haveBlockers"]') as HTMLInputElement;
    const questionsCheckbox = container.querySelector('input[name="haveQuestions"]') as HTMLInputElement;

    expect(goalsCheckbox).toBeInTheDocument();
    expect(alignedCheckbox).toBeInTheDocument();
    expect(blockersCheckbox).toBeInTheDocument();
    expect(questionsCheckbox).toBeInTheDocument();

    // Initially all checkboxes should be unchecked or have default value
    expect(goalsCheckbox.value).toBe('none');
    expect(alignedCheckbox.value).toBe('none');
    expect(blockersCheckbox.value).toBe('none');
    expect(questionsCheckbox.value).toBe('none');

    // Change values and verify
    fireEvent.change(goalsCheckbox, { target: { value: 'yes' } });
    expect(goalsCheckbox.value).toBe('yes');

    fireEvent.change(alignedCheckbox, { target: { value: 'yes' } });
    expect(alignedCheckbox.value).toBe('yes');

    fireEvent.change(blockersCheckbox, { target: { value: 'yes' } });
    expect(blockersCheckbox.value).toBe('yes');

    fireEvent.change(questionsCheckbox, { target: { value: 'yes' } });
    expect(questionsCheckbox.value).toBe('yes');
  });
});
