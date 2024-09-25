import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as AutocompleteStories from './Autocomplete.stories'; //👈  Our stories imported here
import userEvent from '@testing-library/user-event';
//👇 composeStories will process all information related to the component (e.g., args)
const { Multiple } = composeStories(AutocompleteStories);

describe('Autocomplete', () => {
  it('renders the Autocomplete with multiple selection enabled', async () => {
    render(<Multiple />);
    // Assuming the TextInput component renders an input field, let's interact with it
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();

    // Focus the input to open the dropdown
    userEvent.click(input);

    // Check if options are rendered. This assumes your Autocomplete options are presented in a list.
    // Note: The actual query might need to be adjusted based on how your Autocomplete renders options.
    const options = await screen.findAllByRole('option');
    expect(options.length).toBeGreaterThan(0); // Assuming you have options to display

    // Select the first option
    userEvent.click(options[0]);
    // Verify the first option has been selected.
    // This step might need adjustments based on how your component reflects selections.
    // For example, checking if the Chip component for the selected option is rendered.
    expect(
      screen.getByText((options[0] as any).textContent)
    ).toBeInTheDocument();
  });

  // Add more tests as needed to cover other functionalities and edge cases.
});
