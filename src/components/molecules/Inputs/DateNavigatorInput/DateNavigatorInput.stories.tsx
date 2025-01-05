import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DateNavigatorInputProps } from './DateNavigatorInput';
import DateNavigatorInput from './DateNavigatorInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Date Navigator Input',
  component: DateNavigatorInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DateNavigatorInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DateNavigatorInputProps> = (args) => {
  const date = '2024-01-01';
  return (
    <Formik initialValues={{ name: date }} onSubmit={(v) => {}}>
      <Field component={DateNavigatorInput} name="name" {...args} />
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
  slots: {
    labelProps: {
      required: true
    }
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Custom',
  slots: {
    horizontalInput: {
      slots: {
        formLabelProps: {
          disabled: true
        }
      }
    }
  }
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom',
  slots: {
    horizontalInput: {
      slots: {
        formLabelProps: {
          disabled: true
        }
      }
    }
  }
};

export const Error = Template.bind({});
Error.args = {
  label: 'Custom',
  slots: {
    horizontalInput: {
      slots: {
        formLabelProps: {
          error: true
        }
      }
    }
  }
};
