import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { MegaInputBaseProps } from './MegaInputBase';
import MegaInputBase from './MegaInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Mega Text Input',
  component: MegaInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof MegaInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MegaInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '' }} onSubmit={(v) => {}}>
      <Field component={MegaInputBase} name="name" {...args} />
    </Formik>
  );
};

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {};

export const Required = Template.bind({});
Required.args = {
  required: true,
  size: 'large'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Password = Template.bind({});
Password.args = {
  type: 'password'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  InputProps: { readOnly: true },
  value: '9'
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: 'Error over here'
};
