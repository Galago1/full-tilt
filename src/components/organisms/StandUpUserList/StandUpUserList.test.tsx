import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as StandUpUserListStories from './StandUpUserList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(StandUpUserListStories) as any;

describe('StandUpUserList', () => {
  test('submits the form', async () => {
    render(<Default data-testid="custom-element" />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
