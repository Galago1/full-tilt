import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { composeStories } from '@storybook/testing-react';
import * as LoginFormStories from './LoginForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(LoginFormStories);

describe('LoginForm', () => {
  test('submits the LoginForm', async () => {
    const onSubmit = jest.fn();
    render(<Blank data-testid="custom-element" onSubmit={onSubmit} />);
    const user = userEvent.setup();

    const phone = screen.getByPlaceholderText('Mobile number');

    await user.type(phone, '6233453456');

    await user.click(screen.getByRole('button'));

    await waitFor(() =>
      // expect(onSubmit).toHaveBeenCalledWith(
      //   expect.objectContaining({
      //     phone: '6233453456'
      //   })
      // )
      expect(onSubmit).toHaveBeenCalled()
    );
  });
});
