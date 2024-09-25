import {
  Box,
  BoxProps,
  Grid,
  Pagination,
  PaginationItem,
  PaginationItemProps,
  Typography,
  TypographyProps
} from '@mui/material';
import { GridFooterContainer } from '@mui/x-data-grid-premium';
import { isEmpty } from 'lodash';
import { ChangeEvent, useState } from 'react';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import useIsSize from 'src/hooks/useIsSize';

interface CustomPaginationProps extends BoxProps {
  paginationPlaced?: 'left' | 'right' | 'center';
  slots?: {
    leftPaginationItemProps: PaginationItemProps;
    rightPaginationItemProps: PaginationItemProps;
    typographyProps: TypographyProps;
  };
}
const CustomPagination = ({
  paginationPlaced = 'right',
  slots,
  ...props
}: CustomPaginationProps) => {
  const { leftPaginationItemProps, rightPaginationItemProps, typographyProps } =
    slots || {};
  const [page, setPage] = useState(1);
  const count = 10;

  const handlePageChange = (
    event: null | ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={'center'}
      {...props}
    >
      {paginationPlaced === 'left' && (
        <Typography
          variant="textSmRegular"
          color="text.primary"
          sx={{ alignSelf: 'center', mr: responsiveSpacing }}
          {...typographyProps}
        >
          Page {page} of {count}
        </Typography>
      )}
      <PaginationItem
        page={page - 1}
        type="previous"
        disabled={page === 1}
        onClick={() => handlePageChange(null, page - 1)}
        {...leftPaginationItemProps}
      />

      {paginationPlaced === 'center' && (
        <Typography
          variant="textSmRegular"
          color="text.primary"
          sx={{ alignSelf: 'center', mr: { xs: 2, sm: 2, md: 0 } }}
          {...typographyProps}
        >
          Page {page} of {count}
        </Typography>
      )}

      <PaginationItem
        page={page + 1}
        type="next"
        disabled={page === count}
        onClick={() => handlePageChange(null, page + 1)}
        {...rightPaginationItemProps}
      />

      {paginationPlaced === 'right' && (
        <Typography
          variant="textSmRegular"
          color="text.primary"
          sx={{ alignSelf: 'center', mr: responsiveSpacing }}
          {...typographyProps}
        >
          Page {page} of {count}
        </Typography>
      )}
    </Box>
  );
};

export interface DatagridFooterProps {
  useRightJustification: boolean;
  rowCount: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  slots?: {
    buttonProps?: ButtonProps;
    customPaginationProps: CustomPaginationProps;
  };
}

const DatagridFooter = ({
  useRightJustification = true,
  slots = { buttonProps: {}, customPaginationProps: {} },
  ...props
}: DatagridFooterProps) => {
  const { buttonProps, customPaginationProps } = slots || {};
  const { isXSmall, isMobile, isTablet } = useIsSize();
  const mobile = useRightJustification
    ? isXSmall || isMobile || isTablet
    : false;
  return (
    <GridFooterContainer {...props}>
      <Grid container display="flex" justifyContent="flex-start" mt={2} mb={2}>
        {!mobile && <Grid item flexGrow={1}></Grid>}
        {customPaginationProps && (
          <Grid item flexGrow={mobile ? 1 : 0}>
            <CustomPagination
              sx={{
                justifyContent: mobile ? 'flex-start' : 'center'
              }}
              {...customPaginationProps}
            />
          </Grid>
        )}
        {mobile && !isEmpty(buttonProps) && (
          <Grid item width={'100%'}>
            <Button {...buttonProps} />
          </Grid>
        )}
      </Grid>
    </GridFooterContainer>
  );
};

export default DatagridFooter;
