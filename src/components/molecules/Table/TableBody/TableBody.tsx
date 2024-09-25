import {
  TableBody as MuiTableBody,
  SxProps,
  TableRow,
  TableRowTypeMap,
  Theme
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { OverridableComponent } from '@mui/types';
import { Field, Formik } from 'formik';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';
import type { Tbase } from 'src/components/organisms/Table/Table';
import { actionsMap } from 'src/utils/table/tableActionMap';
import { rowsMap } from 'src/utils/table/tableCellMap';
import { rowDefaultImage } from 'src/utils/users/defaultImage';
import { rowInitials } from 'src/utils/users/initials';
import AvatarAndText from '../../AvatarAndText/AvatarAndText';
import { ButtonListButton } from '../../ButtonList/ButtonList';
import TableCell, { TableCellProps } from '../TableCell/TableCell';
import type { TableOrder } from '../TableHeader/TableHeader';

interface RowContentProps {
  row: any;
  labelId: string;
  showCheckbox: boolean;
  avatarVariant: 'circular' | 'square' | 'rounded';
  avatarSx?: SxProps<Theme>;
}
const RowContent = ({
  row,
  labelId,
  showCheckbox,
  avatarVariant,
  avatarSx
}: RowContentProps) => {
  if (row.nameCell)
    return <TableCell {...(row.nameCell as any)} id={labelId} />;
  return (
    row.name && (
      <TableCell
        component="td"
        id={labelId}
        scope="row"
        padding="none"
        onClick={row.onClick as any}
        typographyProps={{
          component: 'div',
          variant: 'textSmRegular',
          fontWeight: 'light',
          sx: {
            p: (theme: Theme) => theme.spacing(2, 3, 2, showCheckbox ? 0 : 2)
          },
          children: (
            <AvatarAndText
              flexWrap={'nowrap'}
              avatarProps={{
                variant: avatarVariant,
                src: rowDefaultImage({ row }),
                children: <>{rowInitials({ name: row.name })}</>,
                sx: { ...avatarSx }
              }}
              title={!row.hideNameTitle ? (row.name as string) : ''}
              titleTypography={{
                variant: 'textSmRegular',
                sx: { whiteSpace: 'nowrap' }
              }}
              sx={{ my: 'auto' }}
            />
          )
        }}
      />
    )
  );
};

export interface BodyCell {
  alignRight: boolean;
}

function descendingComparator<T>(a: any, b: any, orderBy: any) {
  //keyof T | undefined
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof Tbase>(
  order: TableOrder,
  orderBy: Key | undefined
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T extends Tbase>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]); // -1, 1, 0
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export interface TableBodyProps<T extends Tbase> {
  /**
   * Current sort direction
   * @default
   * asc
   */
  order: TableOrder;
  /**
   * The column to sort by
   */
  orderBy: keyof T | undefined;
  /**
   * The current page
   * @default
   * 0
   */
  page: number;
  /**
   * The rows to display
   */
  rows: T[];
  /**
   * The number of rows to show per page
   */
  rowsPerPage?: number;
  /**
   * The list of selected row
   */
  selected?: Array<keyof T>;
  /**
   * Show the checkbox
   * @default
   * true
   */
  showCheckbox?: boolean;
  /**
   * the order of the cell values from left to right
   * @default
   * []
   */
  rowValues: string[];
  /**
   * The end actions
   */
  buttons: ButtonListButton[];
  /**
   * Highlight a selected row's background
   */
  showSelected?: boolean;
  /**
   * Direction to place cell content
   * @default
   * right
   */
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  /**
   * Avatar image variant
   * @default
   * square
   */
  avatarVariant?: 'circular' | 'square' | 'rounded';
  /**
   * Handle the click action
   */
  handleClick?: (event: React.MouseEvent<unknown>, name: string) => void;
  /**
   * Handle the mouse leave action
   * @param event
   * @param row
   * @returns
   */
  handleMouseEnter?: (
    event: React.MouseEvent<unknown>,
    row: { [key in keyof T]: string | number }
  ) => void;
  /**
   * Handle the mouse leave action
   */
  handleMouseLeave?: (
    event: React.MouseEvent<unknown>,
    row: { [key in keyof T]: string | number }
  ) => void;
  /**
   * Avatar styles
   */
  avatarSx?: SxProps<Theme>;
  /**
   * Fill the table body
   */
  fillAll?: boolean;
  /**
   * Colummn to fill everything
   */
  fillCell?: TableCellProps;
  /**
   * White space
   */
  setWhiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
  /**
   * Table row props
   */
  tableRowProps?: OverridableComponent<TableRowTypeMap<{}, 'tr'>>;
}
const TableBody = <T extends Tbase>({
  order = 'asc',
  orderBy,
  page = 0,
  rows,
  showSelected = true,
  rowsPerPage = 5,
  selected = [],
  showCheckbox = true,
  rowValues = [],
  buttons = [],
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  align = 'right',
  avatarVariant = 'square',
  avatarSx,
  fillAll,
  fillCell,
  setWhiteSpace,
  tableRowProps,
  ...props
}: TableBodyProps<T>) => {
  const isSelected = (name: keyof Tbase) =>
    selected.indexOf(String(name)) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);

  return (
    <MuiTableBody {...props}>
      {/* TODO: Fix this type */}
      {stableSort(rows, getComparator(order, orderBy))
        // 1 * 15, (1 * 15) + 15
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `table-body-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event: any) => handleClick?.(event, row.id as string)}
              onMouseEnter={(event: any) => handleMouseEnter?.(event, row)}
              onMouseLeave={(event: any) => handleMouseLeave?.(event, row)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={labelId}
              selected={isItemSelected}
              data-testid={labelId}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: (theme: Theme) =>
                    showSelected
                      ? alpha(theme.palette.primary[500], 0.16)
                      : 'unset'
                },
                '&.Mui-selected:hover': {
                  backgroundColor: (theme: Theme) =>
                    showSelected
                      ? alpha(theme.palette.primary[500], 0.08)
                      : 'unset'
                },
                '&.MuiTableRow-hover:hover': {
                  backgroundColor: (theme: Theme) =>
                    showSelected
                      ? alpha(theme.palette.primary[500], 0.08)
                      : alpha(theme.palette.grey[500], 0.08)
                }
              }}
              {...tableRowProps}
            >
              {showCheckbox && (
                <TableCell
                  padding="checkbox"
                  typographyProps={{
                    component: 'span',
                    children: (
                      <Formik initialValues={{}} onSubmit={() => {}}>
                        <Field
                          name={`table-body-checkbox-${index}`}
                          component={Checkbox}
                          type="checkbox"
                          color="primary"
                          // checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                        ></Field>
                      </Formik>
                    )
                  }}
                />
              )}
              <RowContent
                row={row}
                labelId={labelId}
                showCheckbox={showCheckbox}
                avatarVariant={avatarVariant}
                avatarSx={avatarSx}
              />

              {rowsMap(row, rowValues, align, setWhiteSpace)}
              {buttons.length ? actionsMap(buttons, row) : null}
            </TableRow>
          );
        })}
      {!fillAll && emptyRows > 0 && (
        <TableRow
          sx={{
            height: 66 * emptyRows
          }}
        >
          <TableCell
            typographyProps={{}}
            colSpan={rowValues.length + (buttons.length ? 1 : 0) + 1}
          />
        </TableRow>
      )}
      {fillAll && (
        <TableRow>
          <TableCell typographyProps={{}} {...fillCell} />
        </TableRow>
      )}
    </MuiTableBody>
  );
};
export default TableBody;
