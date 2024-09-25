import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableCELLStories from './TableCell.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { TextCell } = composeStories(TableCELLStories);

describe('TableCell', () => {
  test('Clicks the row', async () => {
    const handleClick = jest.fn();
    render(<TextCell onClick={handleClick} />);
    const element = screen.getByRole('cell');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });
});
