import {
  Grid,
  GridProps,
  SxProps,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useCallback, useState } from 'react';
import { PlusIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { RowDataObject } from './useScorecard';

interface ScorecardInlineEditCellContentProps {
  type: 'title' | 'data';
  isEditing: boolean;
  initialValue: RowDataObject;
  handleSubmit: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>
  ) => void;
  component: any;
  allowEmptyText: boolean;
  fieldSx: SxProps<Theme>;
}
const ScorecardInlineEditCellContent = ({
  type,
  isEditing,
  initialValue,
  handleSubmit,
  component,
  allowEmptyText,
  fieldSx
}: ScorecardInlineEditCellContentProps) => {
  const theme = useTheme();
  if (isEditing)
    return (
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
                },
                ...fieldSx
              }}
            />
          </Form>
        )}
      </Formik>
    );

  if (initialValue?.value || allowEmptyText)
    return (
      <Typography
        variant={type === 'title' ? 'textSmMedium' : 'textSmRegular'}
        noWrap
      >
        {initialValue.value ?? '\u00A0'}
      </Typography>
    );
  return (
    <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <PlusIcon sx={{ '&': { color: theme.palette.grey[500] } }} />
    </Grid>
  );
};

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
  fieldSx?: SxProps<Theme>;
}

const ScorecardInlineEditCell = ({
  type,
  initialValue,
  onSave,
  component,
  closeOnSave = true,
  canEdit = true,
  allowEmptyText = false,
  fieldSx,
  ...props
}: ScorecardInlineEditCellProps) => {
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
      <ScorecardInlineEditCellContent
        type={type!}
        isEditing={isEditing}
        initialValue={initialValue}
        handleSubmit={handleSubmit}
        component={component}
        allowEmptyText={allowEmptyText}
        fieldSx={fieldSx!}
      />
    </Grid>
  );
};
export default ScorecardInlineEditCell;
