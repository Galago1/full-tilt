import type { Story, ComponentMeta } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { TimePickerInputBaseProps } from './TimePickerInputBase';
import TimePickerInputBase from './TimePickerInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Time Picker Input Base',
  component: TimePickerInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TimePickerInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TimePickerInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '' }} onSubmit={(v) => {}}>
      <Field component={TimePickerInputBase} name="name" {...args} />
    </Formik>
  );
};

export const TimeInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TimeInput.args = {};

export const Variant = Template.bind({});
Variant.args = {
  label: 'Custom'
};

// export const Required = Template.bind({});
// Required.args = {
//   label: 'Custom',
//   required: true
// };

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Custom',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom',
  readOnly: true,
  value: 'filled'
};

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Custom',
//   error: true,
//   helperText: 'Error over here'
// };
