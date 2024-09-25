import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { CardNumberElementProps } from './CardNumberElement';
import CardNumberElement from './CardNumberElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Card Number Element',
  component: CardNumberElement
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardNumberElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardNumberElementProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={CardNumberElement} name="name" {...args} />
    </Formik>
  );
};

export const Blank = Template.bind({});
Blank.args = {};
