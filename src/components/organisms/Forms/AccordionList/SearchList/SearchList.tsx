import { Grid, GridProps, InputAdornment } from '@mui/material';
import { Field, FieldAttributes } from 'formik';
import { memo } from 'react';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import { CheckboxList, EmptyState, TextInput } from 'src/components/molecules';
import { EmptyStateProps } from 'src/components/molecules/EmptyState/EmptyState';
import { CheckboxListProps } from 'src/components/molecules/Inputs/CheckboxList/CheckboxList';
import { SearchMdIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface SearchListProps extends GridProps {
  /**
   * The button props
   */
  buttonProps?: ButtonProps;
  /**
   * The field props
   */
  fieldProps?: FieldAttributes<any>;
  /**
   * The checkbox list props
   */
  checkboxListProps?: CheckboxListProps;
  /**
   * The empty state props
   */
  emptyStateProps?: EmptyStateProps;
}

const SearchList = memo(
  ({
    buttonProps,
    fieldProps,
    checkboxListProps,
    emptyStateProps,
    ...props
  }: SearchListProps) => {
    return (
      <Grid container flexDirection={'column'} spacing={2} {...props}>
        {fieldProps && (
          <Grid item>
            <Field
              name={'search'}
              component={TextInput}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchMdIcon />
                  </InputAdornment>
                )
              }}
              placeholder={'Search'}
              {...fieldProps}
            />
          </Grid>
        )}
        <Grid item>
          <Grid container>
            <Grid item flexGrow={1}>
              {emptyStateProps && <EmptyState {...emptyStateProps} />}
              {checkboxListProps && <CheckboxList {...checkboxListProps} />}
            </Grid>
            {buttonProps && (
              <Grid item>
                <Button {...buttonProps} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
);
export default SearchList;
