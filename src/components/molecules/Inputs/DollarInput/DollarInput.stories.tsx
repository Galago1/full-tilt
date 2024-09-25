import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { DollarInputProps } from './DollarInput';
import DollarInput from './DollarInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Dollar Input',
  component: DollarInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DollarInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DollarInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={DollarInput} name="name" {...args} />
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom',
  placeholder: '$0.00'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Custom',
  placeholder: '$0.00',
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Custom',
  placeholder: '$0.00',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom',
  placeholder: '$0.00',
  value: '500',
  InputProps: {
    readOnly: true
  }
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here',
  placeholder: '$0.00'
};
