import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { createMatchMedia, resizeWindow } from 'src/utils/tests/mediaQuery';
import * as DropdownSideNavListItemStories from './DropdownSideNavListItem.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(DropdownSideNavListItemStories);

describe('DropdownSideNavListItem', () => {
  beforeAll(() => {
    resizeWindow();
    (window as any).matchMedia = createMatchMedia(window.innerWidth);
  });
  test('renders the DropdownSideNavListItem', () => {
    render(<Default data-testid="custom-element" />);

    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
