import { act } from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen, within } from '@testing-library/react';
import * as HeaderStories from './Dropdown.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { IconButtonWithAvatar } = composeStories(HeaderStories);

describe('Dropdown', () => {
  test('opens the menu', () => {
    render(<IconButtonWithAvatar />);
    const element = screen.getByRole('button');
    act(() => {
      element.click();
    });
    const menu = screen.getByRole('presentation');
    expect(menu).toBeInTheDocument();
  });
  test('closes the menu', () => {
    render(<IconButtonWithAvatar />);
    const element = screen.getByRole('button');
    act(() => {
      element.click();
    });
    const menu = within(screen.getByRole('presentation')).getByRole('menu');
    act(() => {
      menu.click();
    });
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});
