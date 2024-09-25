import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { composeStories } from '@storybook/testing-react';
import * as SignupFormStories from './SignupForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(SignupFormStories);

describe('SignupForm', () => {
  test('submits the SignupForm', async () => {
    const onSubmit = jest.fn();
    render(<Blank onSubmit={onSubmit} />);
    const user = userEvent.setup();

    const fullName = screen.getByPlaceholderText('Enter your name');
    const email = screen.getByPlaceholderText('Enter your email');
    const phone = screen.getByPlaceholderText('Mobile number');

    await user.type(fullName, 'Bill Gates');
    await user.type(email, 'bill@gates.com');
    await user.type(phone, '6233453456');

    await user.click(screen.getByRole('button'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
