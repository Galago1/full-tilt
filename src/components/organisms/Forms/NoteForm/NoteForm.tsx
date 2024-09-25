import { Grid } from '@mui/material';
import {
  Field,
  FieldAttributes,
  Form,
  Formik,
  FormikHelpers,
  FormikValues
} from 'formik';
import TextAreaInput from 'src/components/molecules/Inputs/TextAreaInput';
import { TextAreaInputProps } from 'src/components/molecules/Inputs/TextAreaInput/TextAreaInput';
import AttachmentContainer, {
  AttachmentContainerProps
} from '../../AttachmentContainer/AttachmentContainer';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';

export interface NoteFormProps<T> {
  /**
   * Text area field props
   */
  textAreaFieldProps: FieldAttributes<T>;
  /**
   * Initial values
   */
  initialValues: FormikValues & T;
  /**
   * the submit handler
   * @param values
   * @returns
   */
  onSubmit: (
    values: FormikValues & T,
    formikHelpers: FormikHelpers<FormikValues & T>
  ) => void;

  /**
   * Text area input props
   */
  textAreaInputProps: TextAreaInputProps;
  /**
   * The attachment container props
   */
  attachmentContainerProps: AttachmentContainerProps;
  /**
   * The button props
   */
  buttonProps: ButtonProps;
  logoAttributes: any;
}

const NoteForm = <T extends any>({
  textAreaFieldProps,
  textAreaInputProps,
  logoAttributes,
  buttonProps,
  initialValues,
  onSubmit,
  ...props
}: NoteFormProps<T>) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form {...props}>
          <Grid container flexDirection={'column'} gap={2}>
            <Grid item>
              <Field {...textAreaFieldProps}>
                {({ form, field, meta }: FieldAttributes<any>) => {
                  return (
                    <TextAreaInput
                      fullWidth={true}
                      rows={5}
                      onChange={(e) => {
                        form.setFieldTouched(
                          textAreaFieldProps.name,
                          e.target.value
                        );
                        form.setFieldValue(
                          textAreaFieldProps.name,
                          e.target.value
                        );
                      }}
                      {...textAreaInputProps}
                      form={form}
                      field={field}
                      meta={meta}
                    />
                  );
                }}
              </Field>
            </Grid>
            <Grid item>
              {/* <AttachmentContainer {...attachmentContainerProps} /> */}
              <Field {...logoAttributes} />
            </Grid>
            <Grid item>
              <Button disabled={isSubmitDisabled(formik)} {...buttonProps} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
export default NoteForm;
