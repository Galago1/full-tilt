import { composeStories } from '@storybook/testing-react';
import { render, screen, within } from '@testing-library/react';
import { act } from 'react';
import * as HeaderStories from './DropdownUncontrolled.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { IconButtonWithIcon } = composeStories(HeaderStories);

describe('DropdownUncontrolled', () => {
  test('opens the menu', () => {
    render(<IconButtonWithIcon />);
    const element = screen.getByRole('button');
    act(() => {
      element.click();
    });
    const menu = screen.getByRole('presentation');
    expect(menu).toBeInTheDocument();
  });
  test('closes the menu', () => {
    render(<IconButtonWithIcon />);
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