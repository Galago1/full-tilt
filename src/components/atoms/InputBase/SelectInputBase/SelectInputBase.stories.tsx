import type { Story, ComponentMeta } from '@storybook/react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import { Formik, Field } from 'formik';
import type { SelectInputBaseProps, SelectOption } from './SelectInputBase';
import SelectInputBase from './SelectInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Select Input Base',
  component: SelectInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SelectInputBase>;

const basicOptions: SelectOption[] = [
  { value: 1, label: { value: 'Basic Label' } }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: 'none' }} onSubmit={(v) => {}}>
      <Field {...args} name="name">
        {({ field }: any) => {
          return <SelectInputBase {...args} {...field} />;
        }}
      </Field>
    </Formik>
  );
};

export const NoneSelected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoneSelected.args = {
  defaultOptionLabel: 'Select an op',
  value: 'none',
  options: basicOptions
};

export const CheckSelected = Template.bind({});
CheckSelected.args = {
  options: [
    {
      value: '1',
      label: {
        value: 'value',
        subvalue: 'other val',
        icon: (
          <Avatar sx={{ height: 24, width: 24 }}>
            <>HR</>
          </Avatar>
        )
        // checked: true
      }
    },
    {
      value: '2',
      label: {
        value: 'Other value',
        subvalue: 'Other other val',
        icon: (
          <Avatar sx={{ height: 24, width: 24 }}>
            <>HK</>
          </Avatar>
        )
        // checked: false
      }
    }
  ],
  value: '1',
  label: 'Custom',
  checkSelected: true
};

export const Required = Template.bind({});
Required.args = {
  options: basicOptions,
  label: 'Custom',
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: basicOptions,
  label: 'Custom',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  options: basicOptions,
  label: 'Custom',
  InputProps: { readOnly: true },
  value: 1
};

export const Error = Template.bind({});
Error.args = {
  options: basicOptions,
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};

export const DisableSpecific = Template.bind({});
DisableSpecific.args = {
  options: [
    ...basicOptions,
    {
      value: 1,
      label: { value: 'Disabled Label' },
      menuItem: { disabled: true }
    }
  ],
  label: 'Custom'
};