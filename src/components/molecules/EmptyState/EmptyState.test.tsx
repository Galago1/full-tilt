import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import ThemeProvider from 'src/components/particles/theme';
import BreakpointProvider from 'src/providers/BreakpointProvider/BreakpointProvider';
import { createMatchMedia, resizeWindow } from 'src/utils/tests/mediaQuery';
import * as EmptyStateStories from './EmptyState.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { PrimaryIcon } = composeStories(EmptyStateStories);

describe('EmptyState', () => {
  beforeAll(() => {
    resizeWindow();
    (window as any).matchMedia = createMatchMedia(window.innerWidth);
  });
  test('renders the EmptyState', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <BreakpointProvider>
          <PrimaryIcon data-testid="custom-element" />
        </BreakpointProvider>
      </ThemeProvider>
    );

    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
