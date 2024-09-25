import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { TextAreaInputBaseProps } from './TextAreaInputBase';
import TextAreaInputBase from './TextAreaInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Text Area Input',
  component: TextAreaInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TextAreaInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TextAreaInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ somename: args.value || '' }} onSubmit={(v) => {}}>
      <Field component={TextAreaInputBase} name="somename" {...args} />
    </Formik>
  );
};

export const TextAreaInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextAreaInput.args = {
  label: 'Custom',
  rows: 3
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
  InputProps: { readOnly: true },
  value: 'filled'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};
