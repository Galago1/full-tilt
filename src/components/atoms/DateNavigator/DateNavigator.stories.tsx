import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DateNavigatorProps } from './DateNavigator';
import DateNavigator from './DateNavigator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Date Navigator',
  component: DateNavigator
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DateNavigator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DateNavigatorProps> = (args) => {
  const date = '2024-01-01';
  return (
    <Formik initialValues={{ name: date }} onSubmit={(v) => {}}>
      <Field component={DateNavigator} name="name" {...args} />
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {};
