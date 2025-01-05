import type { Story, ComponentMeta } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DatePickerInputBaseProps } from './DatePickerInputBase';
import DatePickerInputBase from './DatePickerInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Date Picker Input Base',
  component: DatePickerInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DatePickerInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DatePickerInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '' }} onSubmit={(v) => {}}>
      <Field component={DatePickerInputBase} name="name" {...args} />
    </Formik>
  );
};

export const DateInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateInput.args = {};

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
  readOnly: true
};

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Custom',
//   error: true,
//   helperText: 'Error over here'
// };
