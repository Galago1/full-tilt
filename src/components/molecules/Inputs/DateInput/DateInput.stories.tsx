import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DateInputProps } from './DateInput';
import DateInput from './DateInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Date Input',
  component: DateInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DateInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={DateInput} name="name" {...args} />
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
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

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom',
  value: '500',
  InputProps: {
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
