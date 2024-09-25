import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { CardCvcElementProps } from './CardCvcElement';
import CardCvcElement from './CardCvcElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Card Cvc Element',
  component: CardCvcElement
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardCvcElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardCvcElementProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={CardCvcElement} name="name" {...args} />
    </Formik>
  );
};

export const Blank = Template.bind({});
Blank.args = {};
