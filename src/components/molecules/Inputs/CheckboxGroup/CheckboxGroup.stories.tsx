import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { CheckboxGroupProps } from './CheckboxGroup';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from 'src/components/atoms/Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Checkbox Group',
  component: CheckboxGroup
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CheckboxGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CheckboxGroupProps> = (args) => {
  return (
    <Formik
      initialValues={{ name: args.defaultValue || '' }}
      onSubmit={(v) => {}}
    >
      <Field component={CheckboxGroup} {...args} name="name" />
    </Formik>
  );
};

export const OneOption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OneOption.args = {
  slots: {
    checkboxInputs: [
      {
        children: <Field component={Checkbox} name="name" type={'checkbox'} />,
        title: 'Remember me',
        description: 'Save my login details for next time.'
      }
    ]
  }
};
export const TwoOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TwoOptions.args = {
  defaultValue: 'public',
  slots: {
    checkboxInputs: [
      {
        children: <Field component={Checkbox} name="name" type={'checkbox'} />,
        title: 'Publish collection and list on my store'
      },
      {
        children: <Field component={Checkbox} name="name" type={'checkbox'} />,
        title: 'Keep private',
        description:
          'The collection will only be avaliable through private link.',
        sx: { mt: 1 }
      }
    ]
  }
};
