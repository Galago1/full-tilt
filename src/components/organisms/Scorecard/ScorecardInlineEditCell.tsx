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
import LoadingOverlay from 'src/components/molecules/LoadingOverlay/LoadingOverlay';

interface ScorecardInlineEditCellContentProps {
  isEditing: boolean;
  initialValue: RowDataObject;
  isLoading: boolean;
  isSuccess: boolean;
  handleSubmit: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>
  ) => void;
  component: any;
  allowEmptyText: boolean;
  fieldSx: SxProps<Theme>;
  suffix?: string;
  prefix?: string;
}
const ScorecardInlineEditCellContent = ({
  isEditing,
  initialValue,
  isLoading,
  isSuccess,
  handleSubmit,
  component,
  allowEmptyText,
  fieldSx,
  suffix,
  prefix
}: ScorecardInlineEditCellContentProps) => {
  const theme = useTheme();
  if (isEditing)
    return (
      <>
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
            <Form
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Field
                component={component}
                labelSx={{
                  display: isLoading || isSuccess ? 'none' : 'flex'
                }}
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
                  display: isLoading || isSuccess ? 'none' : 'flex',
                  flex: 1,
                  opacity: isLoading || isSuccess ? 0.5 : 1,
                  transition: 'opacity 200ms ease-in-out',

                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: theme.borderRadius.xs
                  },
                  ...fieldSx
                }}
              />
              <LoadingOverlay isLoading={isLoading} isSuccess={isSuccess} />
            </Form>
          )}
        </Formik>
      </>
    );

  if (initialValue?.value || initialValue?.value === 0 || allowEmptyText)
    return (
      <Typography variant={'textMdRegular'} noWrap>
        {prefix}
        {initialValue.value ?? '\u00A0'}
        {suffix}
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
  initialValue: RowDataObject;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => Promise<void>;
  component: any;
  closeOnSave: boolean;
  canEdit: boolean;
  allowEmptyText: boolean;
  fieldSx?: SxProps<Theme>;
  disabled?: boolean;
  suffix?: string;
  prefix?: string;
}

const ScorecardInlineEditCell = ({
  initialValue,
  onSave,
  component,
  closeOnSave = true,
  canEdit = true,
  allowEmptyText = false,
  fieldSx,
  disabled = false,
  suffix,
  prefix,
  ...props
}: ScorecardInlineEditCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(canEdit);
  }, []);

  const onCloseEditor = () => {
    setIsEditing(false);
  };

  const handleSubmit = useCallback(
    async (
      values: InlineFormikProps,
      form: FormikHelpers<InlineFormikProps>
    ) => {
      setIsLoading(true);
      setIsSuccess(false);
      try {
        await onSave(values, form, onCloseEditor);
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          if (closeOnSave) {
            onCloseEditor();
          }
        }, 300); // Show checkmark for 300ms
      } catch (error) {
        setIsLoading(false);
        setIsSuccess(false);
      }
    },
    [onSave, closeOnSave]
  );

  const sx =
    initialValue?.value || initialValue?.value === 0 || allowEmptyText
      ? { pl: isEditing ? 0 : 2 }
      : { justifyContent: 'center' };

  return (
    <Grid
      onClick={handleDoubleClick}
      sx={{
        display: 'flex',
        cursor: disabled ? 'default' : 'pointer',
        flex: 1,
        ...sx
      }}
      {...props}
    >
      <ScorecardInlineEditCellContent
        isEditing={isEditing}
        isLoading={isLoading}
        isSuccess={isSuccess}
        initialValue={initialValue}
        handleSubmit={handleSubmit}
        component={component}
        allowEmptyText={allowEmptyText}
        fieldSx={fieldSx!}
        suffix={suffix}
        prefix={prefix}
      />
    </Grid>
  );
};
export default ScorecardInlineEditCell;
