import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { TimePickerInputProps } from './TimePickerInput';
import TimePickerInput from './TimePickerInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Time Picker Input',
  component: TimePickerInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TimePickerInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TimePickerInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '' }} onSubmit={(v) => {}}>
      <Field component={TimePickerInput} name="name" {...args} />
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
  value: new Date(new Date().setHours(12, 0, 0, 0)),
  readOnly: true
  // helperText: 'How much does a dog weigh?'
};
