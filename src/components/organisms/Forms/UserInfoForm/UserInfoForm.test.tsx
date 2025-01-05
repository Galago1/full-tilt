import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { composeStories } from '@storybook/testing-react';
import * as UserInfoFormStories from './UserInfoForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(UserInfoFormStories);

describe('UserInfoForm', () => {
  test('submits the UserInfoForm', async () => {
    const onSubmit = jest.fn();
    render(<Blank onSubmit={onSubmit} isLoading={false} />);
    const user = userEvent.setup();

    // Fill in form fields with valid data
    await user.type(
      screen.getByPlaceholderText('Enter your name'),
      'Bill Gates'
    );
    await user.type(
      screen.getByPlaceholderText('Enter your email'),
      'bill@gates.com'
    );
    await user.type(
      screen.getByPlaceholderText('Enter your store name'),
      'Store name'
    );

    // Type phone number and wait for formatting
    const phoneInput = screen.getByPlaceholderText('Mobile number');
    await user.type(phoneInput, '6233453456');

    // Wait for validation to complete
    await waitFor(
      async () => {
        expect(phoneInput).toHaveValue('(623) 345-3456');
        const submitButton = screen.getByRole('button', {
          name: /save changes/i
        });
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 3000 }
    );

    // Submit form
    await user.click(screen.getByRole('button', { name: /save changes/i }));

    // Verify submission
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: 'Bill Gates',
          phone: '(623) 345-3456',
          email: 'bill@gates.com',
          storeName: 'Store name'
        }),
        expect.any(Object)
      );
    });
  });
});
