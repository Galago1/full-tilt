import { act } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useSortableTable from 'src/hooks/useSortableTable';

describe('Signup', () => {
  test('should set the sort', () => {
    const { result } = renderHook(() => useSortableTable([]));

    act(() => {
      result.current.handleRequestSort({} as any, 'string');
    });

    expect(result.current.order).toBe('asc');
    expect(result.current.orderBy).toBe('string');
  });
  test('should set the sort, make desc', () => {
    const { result } = renderHook(() => useSortableTable([]));

    act(() => {
      result.current.handleRequestSort({} as any, 'string');
    });
    act(() => {
      result.current.handleRequestSort({} as any, 'string');
    });

    expect(result.current.order).toBe('desc');
    expect(result.current.orderBy).toBe('string');
  });
  test('should select all', () => {
    const { result } = renderHook(() => useSortableTable([{ id: 'blah' }]));

    act(() => {
      result.current.handleSelectAllClick({ target: { checked: true } } as any);
    });

    expect(result.current.selected).toEqual(['blah']);
  });
  test('should select all, name key', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleSelectAllClick({ target: { checked: true } } as any);
    });

    expect(result.current.selected).toEqual(['blah']);

    act(() => {
      result.current.handleSelectAllClick({
        target: { checked: false }
      } as any);
    });
    expect(result.current.selected).toEqual([]);
  });
  test('should change page', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleChangePage({} as any, 1);
    });

    expect(result.current.page).toEqual(1);
  });
  test('should change rowsPerPage', () => {
    const { result } = renderHook(() => useSortableTable([]));

    act(() => {
      result.current.handleChangeRowsPerPage({ target: { value: 23 } } as any);
    });

    expect(result.current.rowsPerPage).toEqual(23);
    expect(result.current.page).toEqual(0);
  });
  test('should select new row', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleTableRowClick({} as any, 'blah');
    });

    expect(result.current.selected).toEqual(['blah']);
  });
  test('should unselect first row', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleTableRowClick({} as any, 'blah');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah');
    });

    expect(result.current.selected).toEqual([]);
  });
  test('should unselect last row', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleTableRowClick({} as any, 'blah');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah2');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah2');
    });

    expect(result.current.selected).toEqual(['blah']);
  });
  test('should unselect middle row', () => {
    const { result } = renderHook(() => useSortableTable([{ name: 'blah' }]));

    act(() => {
      result.current.handleTableRowClick({} as any, 'blah');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah2');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah3');
    });
    act(() => {
      result.current.handleTableRowClick({} as any, 'blah2');
    });

    expect(result.current.selected).toEqual(['blah', 'blah3']);
  });
});
