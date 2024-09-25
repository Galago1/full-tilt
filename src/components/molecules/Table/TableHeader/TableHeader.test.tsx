import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableHeaderStories from './TableHeader.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { DefaultTableHeader } = composeStories(TableHeaderStories);

describe('TableHeader', () => {
  test('handles sort click', () => {
    const onRequestSort = jest.fn();
    render(<DefaultTableHeader onRequestSort={onRequestSort} />);

    const element = screen.getByRole('button', { name: 'Calories' });
    element.click();

    expect(onRequestSort).toHaveBeenCalled();
  });
  test('handles select all click', () => {
    const onSelectAllClick = jest.fn();
    render(<DefaultTableHeader onSelectAllClick={onSelectAllClick} />);
    const element = screen.getByTestId('table-header-checkbox');
    fireEvent.click(element);

    expect(onSelectAllClick).toHaveBeenCalled();
  });
});
