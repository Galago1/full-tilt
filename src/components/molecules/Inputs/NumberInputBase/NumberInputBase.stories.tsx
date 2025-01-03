import { InputAdornment } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { NumberInputBaseProps } from './NumberInputBase';
import NumberInputBase from './NumberInputBase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Number Input Base',
  component: NumberInputBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof NumberInputBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<NumberInputBaseProps> = (args) => {
  return (
    <Formik
      initialValues={{ somename: args.value || '90' }}
      onSubmit={(v) => {}}
      validate={(value) => {
        const errors: any = {};
        if (!value.somename) {
          errors.somename = 'Required';
        }
        return errors;
      }}
    >
      <Field {...args} name="somename" component={NumberInputBase} />
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom',

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

export const StartButton = Template.bind({});
StartButton.args = {
  label: 'Amount',
  placeholder: '0.00',
  startButtonProps: {
    label: '$',
    variant: 'outlined',
    disabled: true,
    sx: {
      borderRight: 'none',
      py: '8.5px',
      '&.Mui-disabled': { borderRight: 'none' }
    }
  }
};

export const EndButton = Template.bind({});
EndButton.args = {
  label: 'Percentage',
  placeholder: '0',
  endButtonProps: {
    label: '%',
    variant: 'outlined',
    disabled: true,
    sx: {
      borderLeft: 'none',
      py: '8.5px',
      px: 0,
      minWidth: '39px',
      '&.Mui-disabled': { borderLeft: 'none' }
    }
  }
};
