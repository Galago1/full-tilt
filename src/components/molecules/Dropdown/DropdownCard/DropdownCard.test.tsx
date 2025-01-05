import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import { act, useState } from 'react';
import * as HeaderStories from './DropdownCard.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { IconButtonWithIcon } = composeStories(HeaderStories);

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconButtonWithIcon
      slots={{
        dropdownAnchorProps: {
          isOpen: isOpen,
          onClick: () => setIsOpen(!isOpen)
        },
        popperProps: {
          open: isOpen,
          role: 'menu',
          children: <div>Menu Content</div>
        }
      }}
    />
  );
};

describe('DropdownCard', () => {
  test('opens the menu', async () => {
    render(<TestComponent />);

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });
  });

  test('closes the menu', async () => {
    render(<TestComponent />);

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });

    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const menu = screen.queryByRole('menu');
      expect(menu).not.toBeInTheDocument();
    });
  });
});
