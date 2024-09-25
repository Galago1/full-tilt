import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SideNavStories from './SideNav.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Overview } = composeStories(SideNavStories);

describe('SideNav', () => {
  test('renders the Overview nav', () => {
    render(<Overview data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
