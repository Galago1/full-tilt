import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import ThemeProvider from 'src/components/particles/theme';
import * as SignupStories from './Signup.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { SignupTemplate } = composeStories(SignupStories);

describe('Signup', () => {
  test('renders the signup template', async () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <SignupTemplate
          loggedOutLayoutProps={{
            'data-testid': 'custom-element'
          }}
        />
      </ThemeProvider>
    );
    await act(() => {
      const element = screen.getByTestId('custom-element');
      expect(element).toBeInTheDocument();
    });
  });
});
