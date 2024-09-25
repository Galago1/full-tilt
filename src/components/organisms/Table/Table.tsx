import {
  Box,
  SxProps,
  TableProps as MuiTableProps,
  TableContainerProps,
  Theme
} from '@mui/material';
import { Table as MuiTable, TableContainer } from '@mui/material';
import type { TableHeaderProps } from 'src/components/molecules/Table/TableHeader/TableHeader';
import TableHeader from 'src/components/molecules/Table/TableHeader/TableHeader';
import type { TableBodyProps } from 'src/components/molecules/Table/TableBody/TableBody';
import TableBody from 'src/components/molecules/Table/TableBody/TableBody';
import type { TablePaginationProps } from 'src/components/molecules/Table/TablePagination/TablePagination';
import TablePagination from 'src/components/molecules/Table/TablePagination/TablePagination';
import TablePaginationWave from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import type { TableToolbarProps } from 'src/components/molecules/Table/TableToolbar/TableToolbar';
import TableToolbar from 'src/components/molecules/Table/TableToolbar/TableToolbar';
import useSortableTable from 'src/hooks/useSortableTable';
import TableSnackbar, {
  TableSnackbarProps
} from 'src/components/molecules/Table/TableSnackbar/TableSnackbar';

export interface Tbase {
  // [x: string]: string | number | TableCellProps | boolean | JSX.Element | any;
  // [x: number]: string | number | TableCellProps | boolean | JSX.Element | any;
  // [x: symbol]: string | number | TableCellProps | boolean | JSX.Element | any;
  [x: string]: any;
  [x: number]: any;
  [x: symbol]: any;
}

export interface TableProps<T extends Tbase> extends MuiTableProps {
  rows: T[];
  /**
   * Table Header Props of type
   */
  tableHeaderProps?: TableHeaderProps<T>;
  /**
   * Table Body Props of type
   */
  tableBodyProps: TableBodyProps<T>;
  /**
   * Table Pagination Props
   */
  tablePaginationProps?: TablePaginationProps;

  /**
   * Table Pagination Props
   */
  tableToolbarProps?: TableToolbarProps;
  /**
   * Box stylex
   */
  boxProps: SxProps<Theme>;
  /**
   * Table Snackbar Props
   */
  tableSnackbarProps?: TableSnackbarProps;
  /**
   * Table Container Props
   */
  tableContainerProps?: TableContainerProps;
  variant?: 'default' | 'wave';
}

const Table = <T extends Tbase>({
  rows,
  tableHeaderProps,
  tableBodyProps,
  tablePaginationProps,
  tableToolbarProps,
  tableSnackbarProps,
  boxProps,
  tableContainerProps,
  variant = 'default',
  ...props
}: TableProps<T>) => {
  const {
    handleChangePage,
    handleTableRowClick,
    handleSelectAllClick,
    handleRequestSort,
    page,
    selected,
    order,
    orderBy,
    rowsPerPage
  } = useSortableTable<T>(rows, tableBodyProps.rowsPerPage || 8);

  return (
    <Box sx={boxProps}>
      {tableToolbarProps && <TableToolbar {...tableToolbarProps} />}
      <TableContainer {...tableContainerProps}>
        <MuiTable {...props}>
          {tableHeaderProps && (
            <TableHeader
              {...tableHeaderProps}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
            />
          )}
          <TableBody
            {...tableBodyProps}
            handleClick={handleTableRowClick}
            page={page}
            selected={selected}
            order={order}
            orderBy={orderBy}
            rows={rows}
            rowsPerPage={tableBodyProps.rowsPerPage || rowsPerPage}
          />
        </MuiTable>
      </TableContainer>
      {tableSnackbarProps && <TableSnackbar {...tableSnackbarProps} />}
      {tablePaginationProps &&
        (variant === 'default' ? (
          <TablePagination
            {...tablePaginationProps}
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        ) : (
          <TablePaginationWave
            {...tablePaginationProps}
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        ))}
    </Box>
  );
};

export default Table;
