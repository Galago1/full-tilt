import type { Story, ComponentMeta } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DateRangePickerInputBaseProps } from './DateRangePickerInputBase';
import DateRangePickerInputBase from './DateRangePickerInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Date Range Picker Input Base',
  component: DateRangePickerInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DateRangePickerInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DateRangePickerInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: args.value || '' }} onSubmit={(v) => {}}>
      <Field
        component={DateRangePickerInputBase}
        name="name"
        localeText={{ start: 'Check-in', end: 'Check-out' }}
        {...args}
      />
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
  // value: new Date('2022-01-01T00:00:00.000Z')
};

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Custom',
//   error: true,
//   helperText: 'Error over here'
// };
