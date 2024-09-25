import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field, FieldAttributes } from 'formik';
import type { TextAreaInputProps } from './TextAreaInput';
import TextAreaInput from './TextAreaInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Text Area Input',
  component: TextAreaInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TextAreaInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TextAreaInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field name="name">
        {({ form, field, meta }: FieldAttributes<any>) => {
          return (
            <TextAreaInput
              {...args}
              form={form}
              field={field}
              meta={meta}
              onChange={(e) => {
                // Text area is not working like normal for some reason
                form.setFieldTouched('name', true);
                form.setFieldValue('name', e.target.value);
                // form.handleChange(e);
              }}
            />
          );
        }}
      </Field>
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom',
  helperText: 'Do this then that'
};

export const SetRows = Template.bind({});
SetRows.args = {
  label: 'Custom',
  rows: 5
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
  helperText: 'Helper text'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};
