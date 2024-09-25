import { render, within, screen, waitFor } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SelectInputBaseStories from './SelectInputBase.stories'; //👈  Our stories imported here
import userEvent from '@testing-library/user-event';
//👇 composeStories will process all information related to the component (e.g., args)
const { NoneSelected, CheckSelected } = composeStories(SelectInputBaseStories);

describe('SelectInputBase', () => {
  test('renders the NoneSelected', () => {
    render(<NoneSelected />);
    const elem = screen.getByRole('button', { name: 'Select an option' });
    expect(elem).toBeInTheDocument();
  });

  test('changes the NoneSelected', async () => {
    render(<NoneSelected />);
    const user = userEvent.setup();

    await waitFor(() => user.click(screen.getByRole('button')));

    const listbox = within(screen.getByRole('listbox'));

    await waitFor(() => user.click(listbox.getByText(/Basic Label/i)));

    expect(screen.getByRole('button')).toHaveTextContent(/Basic Label/i);
  });

  test('changes the CheckSelected', async () => {
    render(<CheckSelected />);
    const user = userEvent.setup();

    await waitFor(() => user.click(screen.getByRole('button')));

    const listbox = within(screen.getByRole('listbox'));

    await waitFor(() => user.click(listbox.getByText(/Other value/i)));

    expect(screen.getByRole('button')).toHaveTextContent(/Other value/i);
  });
});
