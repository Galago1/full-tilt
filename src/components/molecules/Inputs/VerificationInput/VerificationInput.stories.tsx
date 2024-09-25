import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { VerificationInputProps } from './VerificationInput';
import VerificationInput from './VerificationInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Verification Input',
  component: VerificationInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof VerificationInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<VerificationInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={VerificationInput} name="name" {...args} />
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

export const Password = Template.bind({});
Password.args = {
  label: 'Custom',
  type: 'password'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};
