import type { Story, ComponentMeta } from '@storybook/react';
import { Field, FieldAttributes, Formik } from 'formik';
import type { TextInputBaseProps } from './TextInputBase';
import TextInputBase from './TextInputBase';
import { InputAdornment } from '@mui/material';
import Button from '../../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Text Input Base',
  component: TextInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TextInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TextInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ somename: args.value || '' }} onSubmit={(v) => {}}>
      {(formik) => (
        <Field name="somename">
          {(field: FieldAttributes<any>) => (
            <TextInputBase
              {...args}
              {...field} // Spread Formik field props to TextInputBase
              value={field.value} // Ensure the value is controlled by Formik
              onChange={field.onChange} // Ensure changes are captured by Formik
            />
          )}
        </Field>
      )}
    </Formik>
    // <TextInputBase {...args} />
  );
};

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {};

export const MaxLengthInput = Template.bind({});
MaxLengthInput.args = {
  inputProps: {
    maxLength: 10
  }
};

export const Variant = Template.bind({});
Variant.args = {
  label: 'Custom'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Custom',
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Custom',
  disabled: true
};

export const Password = Template.bind({});
Password.args = {
  label: 'Custom',
  type: 'password'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom',
  InputProps: { readOnly: true },
  value: 'filled'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};

export const StartButton = Template.bind({});
StartButton.args = {
  placeholder: 'example.com',
  variant: 'outlined',
  inputProps: {
    sx: {
      borderLeft: `1px solid red !important`
    }
  },
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <Button variant={'text'}>Button</Button>
      </InputAdornment>
    )
  }
};
