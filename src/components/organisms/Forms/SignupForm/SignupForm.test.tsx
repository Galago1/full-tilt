import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { composeStories } from '@storybook/testing-react';
import * as SignupFormStories from './SignupForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(SignupFormStories);

describe('SignupForm', () => {
  test('submits the SignupForm', async () => {
    const onSubmit = jest.fn();
    await act(async () => {
      render(<Blank onSubmit={onSubmit} isLoading={false} linkProps={{}} />);
    });

    const user = userEvent.setup();

    // Fill in form fields with valid data
    await act(async () => {
      await user.type(
        screen.getByPlaceholderText('Enter your name'),
        'Bill Gates'
      );
      await user.type(
        screen.getByPlaceholderText('Enter your email'),
        'bill@gates.com'
      );
      await user.type(
        screen.getByPlaceholderText('Mobile number'),
        '(623) 345-3456'
      );
    });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /get started/i });
    await act(async () => {
      await user.click(submitButton);
    });

    // Verify form submission
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: 'Bill Gates',
          email: 'bill@gates.com',
          phone: '(623) 345-3456'
        }),
        expect.any(Object)
      );
    });
  });
});
