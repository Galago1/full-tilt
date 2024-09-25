import type { Story, ComponentMeta } from '@storybook/react';
import { Formik, Field } from 'formik';
import type { CardExpiryElementProps } from './CardExpiryElement';
import CardExpiryElement from './CardExpiryElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Card Expiry Element',
  component: CardExpiryElement
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardExpiryElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardExpiryElementProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={CardExpiryElement} name="name" {...args} />
    </Formik>
  );
};

export const Blank = Template.bind({});
Blank.args = {};
