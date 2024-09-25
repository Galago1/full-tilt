import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import * as DrawerStories from './Drawer.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(DrawerStories);

describe('Default', () => {
  test('renders the drawer', async () => {
    render(<Default />);
    const trigger = screen.getByTestId('open-drawer');
    act(() => {
      trigger.click();
    });
    await waitFor(() =>
      expect(screen.getByTestId('custom-element')).toBeInTheDocument()
    );
  });
});
