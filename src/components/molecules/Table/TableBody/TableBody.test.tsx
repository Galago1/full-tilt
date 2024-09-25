import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableBodyStories from './TableBody.stories'; //👈  Our stories imported here
import ThemeProvider from 'src/components/particles/theme';
//👇 composeStories will process all information related to the component (e.g., args)
const { DefaultTableBody } = composeStories(TableBodyStories);

describe('TableBody', () => {
  test('Clicks the row', async () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider isDarkMode={false}>
        <DefaultTableBody handleClick={handleClick} />
      </ThemeProvider>
    );
    const elements = screen.getAllByRole('checkbox');
    fireEvent.click(elements[0]);
    expect(handleClick).toHaveBeenCalled();
  });
});
