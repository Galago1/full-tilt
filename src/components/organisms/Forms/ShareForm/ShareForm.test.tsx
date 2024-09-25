import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { composeStories } from '@storybook/testing-react';
import * as ShareFormStories from './ShareForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Share } = composeStories(ShareFormStories);

describe('ShareForm', () => {
  test('submits the ShareForm', async () => {
    const onSubmit = jest.fn();
    render(<Share data-testid="custom-element" onSubmit={onSubmit} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Copy' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
