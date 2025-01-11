import { usePagination } from '@mui/lab';
import { Box, BoxProps, Typography, useTheme } from '@mui/material';
import { MouseEvent } from 'react';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

export interface TablePaginationWaveProps extends Omit<BoxProps, 'onChange'> {
  count?: number;
  page?: number;
  offset?: number;
  onChange?: (event: MouseEvent<HTMLButtonElement>, page: number) => void;
  buttonProps?: ButtonProps;
}

const TablePaginationWave = ({
  count = 0,
  page = 0,
  offset = 1,
  onChange,
  buttonProps,
  ...props
}: TablePaginationWaveProps) => {
  const { items } = usePagination({
    count: count,
    page: page + offset,
    boundaryCount: 1,
    siblingCount: 0,
    hideNextButton: false,
    hidePrevButton: false
  });

  const theme = useTheme();

  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => {
    onChange?.(event, newPage - 1);
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2)
        }}
      >
        <Typography variant="textMdRegular">
          Page {page + offset} of {count}
        </Typography>
        {items.map(({ page: itemPage, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'previous' || type === 'next') {
            children = (
              <Button
                {...item}
                {...buttonProps}
                onClick={(e) =>
                  itemPage !== null && handlePageChange(e, itemPage)
                }
                sx={{
                  minWidth: 36,
                  boxShadow: 'none',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                disabled={
                  type === 'previous' ? itemPage === 0 : itemPage === count + 1
                }
              >
                {type === 'previous' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </Button>
            );

            return <Box key={index}>{children}</Box>;
          }

          return null;
        })}
      </Box>
    </Box>
  );
};

export default TablePaginationWave;
