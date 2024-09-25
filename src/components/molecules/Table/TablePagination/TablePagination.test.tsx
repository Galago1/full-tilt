import { render, screen } from '@testing-library/react';

import TablePagination from './TablePagination';
describe('TablePagination', () => {
  test('next page', () => {
    const onChange = jest.fn();
    render(
      <TablePagination
        page={0}
        count={5}
        onChange={onChange}
        buttonProps={{ variant: 'outlined', color: 'secondary' }}
      />
    );

    const element = screen.getByTestId('table-pag-next-button');
    element.click();

    expect(onChange).toHaveBeenCalled();
  });
  test('previous page', () => {
    const onChange = jest.fn();
    render(
      <TablePagination
        page={1}
        count={5}
        onChange={onChange}
        buttonProps={{ variant: 'outlined', color: 'secondary' }}
      />
    );

    const element = screen.getByTestId('table-pag-previous-button');
    element.click();

    expect(onChange).toHaveBeenCalled();
  });
});
