import type { Story, ComponentMeta } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { PhoneInputProps } from './PhoneInput';
import PhoneInput from './PhoneInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Phone Input',
  component: PhoneInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof PhoneInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PhoneInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '0' }} onSubmit={(v) => {}}>
      <Field component={PhoneInput} name="name" {...args} />
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
  value: '2128971964',
  InputProps: {
    readOnly: true
  },
  helperText: 'Who you gonna call?'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};
