import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as AccountSettingsTemplateStories from './AccountSettings.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { AccountSettingsTemplate } = composeStories(
  AccountSettingsTemplateStories
);

describe('AccountSettingsTemplate', () => {
  test('submit the form', async () => {
    const onSubmit = jest.fn();
    render(<AccountSettingsTemplate onSubmit={onSubmit} />);
    const user = userEvent.setup();

    const fullName = screen.getByPlaceholderText('Enter your name');
    const phone = screen.getByPlaceholderText('Mobile number');

    await user.type(fullName, 'Bill Gates');
    await user.type(phone, '6233453456');

    await user.click(screen.getByRole('button', { name: 'Save changes' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
