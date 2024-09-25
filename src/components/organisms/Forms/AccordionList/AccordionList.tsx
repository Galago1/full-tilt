import { Box, BoxProps, Grid, GridProps, SxProps, Theme } from '@mui/material';
import { Formik } from 'formik';
import SearchList, { SearchListProps } from './SearchList/SearchList';

export interface AccordionListProps extends BoxProps {
  /**
   * Children
   */
  children?: React.ReactNode;
  /**
   * Search list props
   */
  searchListProps: SearchListProps;
  /**
   * Grid sx
   */
  gridSx?: SxProps<Theme>;
  /**
   *  Grid container props
   */
  gridContainerProps?: GridProps;
  childrenGridProps?: GridProps;
}

const AccordionList = ({
  searchListProps,
  gridSx,
  children,
  gridContainerProps,
  childrenGridProps,
  ...props
}: AccordionListProps) => {
  return (
    <Box {...props}>
      <Grid container flexDirection={'column'} {...gridContainerProps}>
        <Grid item sx={gridSx}>
          <Formik initialValues={{ name: '', search: '' }} onSubmit={() => {}}>
            {(formik) => {
              return <SearchList {...searchListProps} />;
            }}
          </Formik>
        </Grid>
        <Grid item {...childrenGridProps}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
export default AccordionList;
