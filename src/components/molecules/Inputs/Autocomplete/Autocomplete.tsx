import { Field, FieldAttributes, FieldProps } from 'formik';

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from '@mui/material';
import TextInput from '../TextInput';
import { TextInputProps } from '../TextInput/TextInput';

export interface AutocompleteProps
  extends MuiAutocompleteProps<any, any, any, any> {
  /**
   * Field attributes
   */
  fieldAttributes: FieldAttributes<any>;
  /**
   * Text input props
   */
  textInputProps: Omit<TextInputProps, 'field' | 'form' | 'meta'>;
}

/**
 * Primary UI component for user interaction
 */
const Autocomplete = ({
  fieldAttributes,
  textInputProps,
  ...props
}: AutocompleteProps) => {
  return (
    <Field {...fieldAttributes}>
      {({ field, form, meta }: FieldProps<any>) => {
        return (
          <MuiAutocomplete
            {...props}
            renderInput={(params) => (
              <TextInput
                {...params}
                {...textInputProps}
                InputProps={{
                  ...params.InputProps,
                  ...textInputProps?.InputProps,
                  endAdornment:
                    textInputProps?.InputProps?.endAdornment ||
                    params.InputProps?.endAdornment
                }}
                field={field}
                form={form}
                meta={meta}
                disabled={props.disabled || form.isSubmitting}
              />
            )}
          />
        );
      }}
    </Field>
  );
};
export default Autocomplete;
