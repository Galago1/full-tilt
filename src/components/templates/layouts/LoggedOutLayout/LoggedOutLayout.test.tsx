import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LoggedOutLayoutTemplateStories from './LoggedOutLayout.stories'; //👈  Our stories imported here
import ThemeProvider from 'src/components/particles/theme';
//👇 composeStories will process all information related to the component (e.g., args)
const { LoggedOutLayoutTemplate } = composeStories(
  LoggedOutLayoutTemplateStories
);

describe('LoggedOutLayoutTemplate', () => {
  test('renders the LoggedOutLayout template', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <LoggedOutLayoutTemplate data-testid="custom-element" />
      </ThemeProvider>
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
