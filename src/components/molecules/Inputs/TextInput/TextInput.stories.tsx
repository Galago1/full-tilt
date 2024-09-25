import { InputAdornment } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { TextInputProps } from './TextInput';
import TextInput from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Text Input',
  component: TextInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TextInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={TextInput} name="name" {...args} />
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom',

  InputProps: {
    endAdornment: <InputAdornment position="end">kg</InputAdornment>
  }
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
  value: '500',
  InputProps: {
    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
    readOnly: true
  },
  helperText: 'How much does a dog weigh?'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};
