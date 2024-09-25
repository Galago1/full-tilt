import { FieldInputProps, FormikProps } from 'formik';
import minMaxLengthRequired from './minMaxRequired';
import { get } from 'lodash';

const textareaHelperText = (
  form: FormikProps<any>,
  field: FieldInputProps<any>,
  useHelper: boolean,

  minLength = 10,
  maxLength = 500,
  prependText = ''
): { minLength?: number; maxLength?: number; helperText?: any } => {
  const error = form?.errors ? form?.errors[field.name] : '';
  // const helperText = error;
  if (!useHelper || error) return {};
  const fieldValue = get(form.values, field.name, '');

  return {
    helperText: minMaxLengthRequired(
      fieldValue,
      minLength,
      maxLength,
      prependText
    )
  };
};

export default textareaHelperText;
