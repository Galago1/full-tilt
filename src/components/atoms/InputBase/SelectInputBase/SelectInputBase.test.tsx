import { render, within, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SelectInputBaseStories from './SelectInputBase.stories'; //👈  Our stories imported here
import userEvent from '@testing-library/user-event';
//👇 composeStories will process all information related to the component (e.g., args)
const { NoneSelected, CheckSelected } = composeStories(SelectInputBaseStories);

describe('SelectInputBase', () => {
  test('renders the NoneSelected', () => {
    render(<NoneSelected />);
    const elem = screen.getByRole('combobox');
    expect(elem).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  test('changes the NoneSelected', async () => {
    render(<NoneSelected />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('combobox'));

    const listbox = within(screen.getByRole('listbox'));
    await user.click(listbox.getByText(/Basic Label/i));

    expect(screen.getByRole('combobox')).toHaveTextContent(/Basic Label/i);
  });

  test('changes the CheckSelected', async () => {
    render(<CheckSelected />);
    const user = userEvent.setup();

    // Find and open the select using the combobox
    const selectInput = screen.getByLabelText('Custom');
    await user.click(selectInput);

    // Click the option with "Other value"
    const listbox = within(screen.getByRole('listbox'));
    const option = listbox.getByRole('option', {
      name: /HK Other value Other other val/i
    });
    await user.click(option);

    // Verify the selected value using the hidden input
    const input = screen.getByRole('textbox', { hidden: true });
    expect(input).toHaveValue('none,2');

    // Verify the selected value appears in the select
    const selectedValues = screen.getAllByText('Other value', {
      selector: '.MuiTypography-root'
    });
    expect(selectedValues[0]).toBeInTheDocument();
    expect(selectedValues).toHaveLength(2); // Since we expect two elements with this text
  });
});
