import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useCallback, useState } from 'react';
import { PlusIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { RowDataObject } from './useScorecard';

export interface InlineFormikProps extends RowDataObject {}

interface ScorecardInlineEditCellProps extends Omit<GridProps, 'component'> {
  type?: 'title' | 'data';
  initialValue: RowDataObject;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => void;
  component: any;
  closeOnSave: boolean;
  canEdit: boolean;
  allowEmptyText: boolean;
}

const ScorecardInlineEditCell = ({
  type,
  initialValue,
  onSave,
  component,
  closeOnSave = true,
  canEdit = true,
  allowEmptyText = false,
  ...props
}: ScorecardInlineEditCellProps) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(canEdit);
  }, []);

  const onCloseEditor = () => {
    setIsEditing(false);
  };

  const handleSubmit = useCallback(
    (values: InlineFormikProps, form: FormikHelpers<InlineFormikProps>) => {
      onSave(values, form, onCloseEditor);
      if (closeOnSave) onCloseEditor();
    },
    [onSave]
  );

  const sx =
    initialValue?.value || allowEmptyText
      ? { pl: isEditing ? 0 : 2 }
      : { justifyContent: 'center' };

  return (
    <Grid
      onDoubleClick={handleDoubleClick}
      sx={{ display: 'flex', flex: 1, ...sx }}
      {...props}
    >
      {isEditing ? (
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          {({
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
            submitForm,
            isSubmitting
          }) => (
            <Form style={{ display: 'flex', flex: 1 }}>
              <Field
                component={component}
                id="value"
                name="value"
                value={values.value}
                onChange={handleChange}
                onBlur={(e: FocusEvent) => {
                  handleBlur(e);
                  submitForm();
                }}
                error={touched.value && Boolean(errors.value)}
                helperText={touched.value && errors.value}
                autoFocus
                onKeyPress={(event: KeyboardEvent) => {
                  if (event.key === 'Enter') {
                    handleBlur(event);
                    submitForm();
                  }
                }}
                disabled={isSubmitting}
                sx={{
                  display: 'flex',
                  flex: 1,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: theme.borderRadius.xs
                  }
                }}
              />
            </Form>
          )}
        </Formik>
      ) : initialValue?.value || allowEmptyText ? (
        <Typography
          variant={type === 'title' ? 'textSmMedium' : 'textSmRegular'}
          noWrap
        >
          {initialValue.value ?? '\u00A0'}
        </Typography>
      ) : (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <PlusIcon sx={{ '&': { color: theme.palette.grey[500] } }} />
        </Grid>
      )}
    </Grid>
  );
};

export default ScorecardInlineEditCell;
