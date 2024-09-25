import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableStories from './Table.stories'; //👈  Our stories imported here
import ThemeProvider from 'src/components/particles/theme';
//👇 composeStories will process all information related to the component (e.g., args)
const { TableDefault } = composeStories(TableStories);

describe('Table', () => {
  test('renders the TableDefault', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <TableDefault data-testid="custom-element" />
      </ThemeProvider>
    );
    const element = screen.getByTestId(/custom-element/i);
    expect(element).toBeInTheDocument();
  });
});
