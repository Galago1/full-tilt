import { Grid } from '@mui/material';
import {
  Field,
  FieldAttributes,
  Form,
  Formik,
  FormikHelpers,
  FormikValues
} from 'formik';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import SelectInput from 'src/components/molecules/Inputs/SelectInput';
import TextAreaInput from 'src/components/molecules/Inputs/TextAreaInput';
import { TextAreaInputProps } from 'src/components/molecules/Inputs/TextAreaInput/TextAreaInput';
import TextInput from 'src/components/molecules/Inputs/TextInput/TextInput';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';
import AttachmentContainer, {
  AttachmentContainerProps
} from '../../AttachmentContainer/AttachmentContainer';

export interface CommunicationLogFormProps<T> {
  /**
   * Contact input field props
   */
  contactFieldProps: FieldAttributes<T>;
  /**
   * Position input field props
   */
  positionFieldProps: FieldAttributes<T>;
  /**
   * Communication input field props
   */
  communicationFieldProps: FieldAttributes<T>;
  /**
   * Category input field props
   */
  categoryFieldProps: FieldAttributes<T>;
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
}

const CommunicationLogForm = <T extends any>({
  textAreaFieldProps,
  contactFieldProps,
  positionFieldProps,
  communicationFieldProps,
  categoryFieldProps,
  textAreaInputProps,
  attachmentContainerProps,
  buttonProps,
  initialValues,
  onSubmit,
  ...props
}: CommunicationLogFormProps<T>) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form {...props}>
          <Grid container flexDirection={'column'} gap={2}>
            <Grid item>
              <Field component={SelectInput} {...contactFieldProps} />
            </Grid>
            <Grid item>
              <Field component={TextInput} {...positionFieldProps} />
            </Grid>
            <Grid item>
              <Field component={SelectInput} {...communicationFieldProps} />
            </Grid>
            <Grid item>
              <Field component={SelectInput} {...categoryFieldProps} />
            </Grid>
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
              <AttachmentContainer {...attachmentContainerProps} />
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
export default CommunicationLogForm;
