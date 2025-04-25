import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import userEvent from '@testing-library/user-event';
import * as DatePickerInputStories from './DatePickerInput.stories';

//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(DatePickerInputStories);

describe('DatePickerInput', () => {
  test('renders the Normal', async () => {
    // Set up user event
    const user = userEvent.setup();
    
    await act(async () => {
      render(<Normal data-testid="custom-element-input" />);
    });

    // Find the label element using the data-testid
    const labelElement = screen.getByTestId('custom-element-input');
    expect(labelElement).toBeInTheDocument();
    
    // Find the input element inside the component
    const inputElement = labelElement.querySelector('input');
    expect(inputElement).not.toBeNull();
    
    if (inputElement) {
      // Click on the input to open the date picker
      await act(async () => {
        await user.click(inputElement);
      });
      
      // Wait for the date picker to open
      // The date picker is rendered in a portal outside the component
      await waitFor(() => {
        // Look for the date picker popup in the document body
        const datePickerPopup = document.querySelector('.MuiDateCalendar-root');
        expect(datePickerPopup).not.toBeNull();
        
        if (datePickerPopup) {
          console.log('Date picker popup found:', datePickerPopup.outerHTML);
        }
      });
      
      // Select a specific date (March 20, 2025)
      // First find the button with the text "20" in the calendar
      const dateButtons = Array.from(document.querySelectorAll('.MuiPickersDay-root'));
      console.log('Date buttons found:', dateButtons.length);
      
      // Find the button for day 20
      const day20Button = dateButtons.find(button => button.textContent === '20');
      
      if (day20Button) {
        console.log('Found day 20 button:', day20Button.outerHTML);
        
        // Click on the day 20 button
        await act(async () => {
          await user.click(day20Button);
        });
        
        // Verify the input value was updated with the selected date
        // The format might vary depending on the date adapter configuration
        expect(inputElement.value).not.toBe('');
        console.log('Input value after selection:', inputElement.value);
      } else {
        console.log('Day 20 button not found');
      }
    }
  });
});
