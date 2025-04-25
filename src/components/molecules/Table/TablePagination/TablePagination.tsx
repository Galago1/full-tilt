import {
  PaginationProps as MuiPaginationProps,
  Pagination,
  PaginationItem
} from '@mui/material';
import type { ButtonProps } from 'src/components/atoms/Button/Button';
import Button from 'src/components/atoms/Button/Button';
import { ArrowLeftIcon } from 'src/components/particles/theme/icons/Arrows/arrow-left';
import { ArrowRightIcon } from 'src/components/particles/theme/icons/Arrows/arrow-right';

export interface TablePaginationProps extends MuiPaginationProps {
  /**
   * The total number of pages.
   */
  count: number;
  /**
   * The zero-based index of the current page.
   */
  page: number;
  /**
   * Next/Previous button props
   */
  buttonProps: ButtonProps;
}

const TablePagination = ({
  onChange,
  buttonProps,
  page,
  ...props
}: TablePaginationProps) => {
  return (
    <Pagination
      {...props}
      onChange={(e, thePage) => onChange?.(e, thePage - 1)}
      page={page + 1}
      sx={{
        ...props.sx,
        '& .MuiPagination-ul li:first-of-type': { flexGrow: 1 },
        '& .MuiPagination-ul li:last-of-type': { flexGrow: 1, textAlign: 'end' }
      }}
      renderItem={(item) => (
        <PaginationItem
          component={'div'}
          components={{
            next: (props) => (
              <Button
                {...props}
                {...buttonProps}
                sx={{
                  p: 6 / 8,
                  ...buttonProps.sx
                }}
                endIcon={<ArrowRightIcon />}
                label={'Next'}
                data-testid="table-pag-next-button"
              />
            ),
            previous: (props) => (
              <Button
                {...props}
                {...buttonProps}
                sx={{
                  p: 6 / 8,
                  ...buttonProps.sx
                }}
                startIcon={<ArrowLeftIcon />}
                label={'Previous'}
                data-testid="table-pag-previous-button"
              />
            )
          }}
          {...item}
        />
      )}
    />
  );
};
export default TablePagination;
