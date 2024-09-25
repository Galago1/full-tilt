import { InputAdornment } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Field, FieldAttributes, Formik } from 'formik';
import SelectInput from './SwitchInput';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { SelectInputProps } from '../SelectInput/SelectInput';

const basicOptions: SelectOption[] = [
  { value: 1, label: { value: 'Basic Label' } }
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Select Input',
  component: SelectInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SelectInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectInputProps> = (args) => {
  return (
    // `none` is the default initial value for the field
    <Formik initialValues={{ name: args.value || 'none' }} onSubmit={(v) => {}}>
      <Field name="name" {...args}>
        {({ field }: FieldAttributes<any>) => {
          return <SelectInput {...args} options={basicOptions} {...field} />;
        }}
      </Field>
    </Formik>
  );
};
export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom',
  // Not sure if this or the initialValues is the right setup
  // This one works in a formik Form though
  defaultValue: 'none',
  defaultOptionLabel: 'Custom Default',

  InputProps: {
    endAdornment: <InputAdornment position="end">kg</InputAdornment>
  }
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
    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
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
