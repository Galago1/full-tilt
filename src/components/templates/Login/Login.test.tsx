import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import ThemeProvider from 'src/components/particles/theme';
import * as LoginStories from './Login.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { LoginTemplate } = composeStories(LoginStories);

describe('Login', () => {
  test('renders the login template', async () => {
    render(
      <ThemeProvider isDarkMode={true}>
        <LoginTemplate
          loggedOutLayoutProps={{ 'data-testid': 'custom-element' }}
        />
      </ThemeProvider>
    );
    await act(() => {
      const element = screen.getByTestId('custom-element');
      expect(element).toBeInTheDocument();
    });
  });
});
