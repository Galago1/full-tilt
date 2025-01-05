import { render, screen, waitFor, within } from '@testing-library/react';
import Tabs from './Tabs';

import { composeStories } from '@storybook/testing-react';
import * as TabsStories from './Tabs.stories'; //👈  Our stories imported here
import { resizeWindow, createMatchMedia } from 'src/utils/tests/mediaQuery';
import BreakpointProvider from 'src/providers/BreakpointProvider/BreakpointProvider';
import ThemeProvider from 'src/components/particles/theme';
import userEvent from '@testing-library/user-event';
//👇 composeStories will process all information related to the component (e.g., args)
const { BottomBorder } = composeStories(TabsStories);

describe('Tabs', () => {
  const handleSubmit = jest.fn();
  test('renders the button', () => {
    render(
      <Tabs
        value={0}
        tabs={[{ label: 'Tabs', value: 0 }]}
        handleSubmit={handleSubmit}
      />
    );
    const buttonElement = screen.getByText(/Tabs/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the BottomBorder button', () => {
    render(<BottomBorder handleSubmit={handleSubmit} />);
    const buttonElement = screen.getByText(/Uno/i);
    expect(buttonElement).toBeInTheDocument();
  });
  describe('small screen', () => {
    beforeAll(() => {
      resizeWindow(500, 500);
      (window as any).matchMedia = createMatchMedia(window.innerWidth);
    });

    test('selects an option', async () => {
      render(
        <ThemeProvider isDarkMode={false}>
          <BreakpointProvider>
            <BottomBorder />
          </BreakpointProvider>
        </ThemeProvider>
      );
      const user = userEvent.setup();

      await waitFor(() => user.click(screen.getByRole('combobox')));
      const listbox = within(screen.getByRole('listbox'));

      await waitFor(() => user.click(listbox.getByText(/Dos/i)));

      expect(screen.getByRole('combobox')).toHaveTextContent(/Dos/i);
    });
  });
});
