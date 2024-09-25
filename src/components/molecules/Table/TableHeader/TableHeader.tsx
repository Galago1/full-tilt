import type {
  TableHeadProps as MuiTableHeadProps,
  SxProps,
  TableCellProps,
  Theme
} from '@mui/material';
import {
  TableHead as MuiTableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Typography
} from '@mui/material';
import { Field, Formik } from 'formik';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';

export type TableOrder = 'asc' | 'desc';

export interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string | JSX.Element;
  alignRight: boolean;
  sx?: SxProps<Theme>;
  extra?: TableCellProps;
  tableSortLabelProps?: any;
}

export interface TableHeaderProps<T> extends MuiTableHeadProps {
  /**
   * List of header cells
   */
  headCells: readonly HeadCell<T>[];
  /**
   * Number of rows selected, used with showCheckbox
   */
  numSelected?: number;
  /**
   * Current sort direction
   */
  order: TableOrder;
  /**
   * The columns to sort by
   */
  orderBy: keyof T | undefined;
  /**
   * Total number of rows, used with showCheckbox
   */
  rowCount?: number;
  /**
   * Shows the select all cheeckbox
   * @default
   * true
   */
  showCheckbox?: boolean;
  /**
   * End column for actions
   */
  hasActions?: boolean;
  /**
   * Handle column sort change
   */
  onRequestSort?: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  /**
   * Handle checkbox change,
   * TODO: fix the type
   */
  onSelectAllClick?: (event: any) => void;
}

const TableHeader = <T extends unknown>({
  headCells,
  numSelected = 0,
  order,
  orderBy,
  rowCount = 0,
  showCheckbox = true,
  hasActions = false,
  onSelectAllClick,
  onRequestSort,
  ...props
}: TableHeaderProps<T>) => {
  const createSortHandler =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
      onRequestSort?.(event, property);
    };

  return (
    <MuiTableHead {...props}>
      <TableRow>
        {showCheckbox && (
          <TableCell padding="checkbox">
            <Formik initialValues={{}} onSubmit={() => {}}>
              <Field
                name={'table'}
                component={Checkbox}
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                type="checkbox"
                checked={rowCount > 0 && numSelected === rowCount}
                onClick={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts'
                }}
                data-testid="table-header-checkbox"
              ></Field>
            </Formik>
          </TableCell>
        )}
        {headCells.map((headCell: HeadCell<T>) => (
          <TableCell
            key={String(headCell.id)}
            align={headCell.alignRight ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            {...headCell.extra}
            sx={headCell.sx}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              {...headCell.tableSortLabelProps}
            >
              <Typography variant="textXsRegular" sx={{ whiteSpace: 'nowrap' }}>
                {headCell.label}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
        {hasActions && <TableCell></TableCell>}
      </TableRow>
    </MuiTableHead>
  );
};
export default TableHeader;
