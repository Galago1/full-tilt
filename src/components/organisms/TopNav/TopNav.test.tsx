import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TopNavStories from './TopNav.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Loggedout } = composeStories(TopNavStories);

describe('TopNav', () => {
  test('renders the Loggedout nav', () => {
    render(<Loggedout data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
