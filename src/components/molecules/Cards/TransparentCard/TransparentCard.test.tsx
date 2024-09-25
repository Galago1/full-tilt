import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as TransparentCardStories from './TransparentCard.stories'; //👈  Our stories imported here
import ThemeProvider from 'src/components/particles/theme';
//👇 composeStories will process all information related to the component (e.g., args)
const { InlineText } = composeStories(TransparentCardStories);

describe('TransparentCard', () => {
  test('renders the component', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <InlineText data-testid="custom-element" />
      </ThemeProvider>
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
