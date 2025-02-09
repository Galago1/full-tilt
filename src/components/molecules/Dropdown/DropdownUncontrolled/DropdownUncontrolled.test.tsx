import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act, useState } from 'react';
import * as HeaderStories from './DropdownUncontrolled.stories'; //👈  Our stories imported here
import { DotsVerticalIcon } from 'src/components/particles/theme/icons/General/dots-vertical';
//👇 composeStories will process all information related to the component (e.g., args)
const { IconButtonWithIcon } = composeStories(HeaderStories);

const menuItems = [
  {
    menuItemProps: {
      children: 'Test Item'
    }
  }
];

const TestWrapper = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IconButtonWithIcon
      label={<DotsVerticalIcon />}
      dropdownListItems={menuItems}
      handleClick={handleClick}
      handleClose={handleClose}
      anchorEl={anchorEl}
      open={open}
    />
  );
};

describe('DropdownUncontrolled', () => {
  test('opens the menu', async () => {
    render(<TestWrapper />);

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const menuItem = screen.getByText('Test Item');
      expect(menuItem).toBeInTheDocument();
    });
  });

  test('closes the menu', async () => {
    render(<TestWrapper />);

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const menuItem = screen.getByText('Test Item');
      expect(menuItem).toBeInTheDocument();
    });

    // Click the backdrop to close the menu
    const backdrop = document.querySelector('.MuiBackdrop-root');
    await act(async () => {
      if (backdrop) {
        fireEvent.click(backdrop);
      }
    });

    await waitFor(() => {
      const menuItem = screen.queryByText('Test Item');
      expect(menuItem).not.toBeInTheDocument();
    });
  });
});
