import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as LoginSectionStories from './LoginSection.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(LoginSectionStories);

describe('LoginSection', () => {
  test('submits the LoginSection', async () => {
    render(<Blank data-testid="custom-element" />);
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
});
