import type { ComponentMeta, Story } from '@storybook/react';
import Stars, { StarsProps } from './Stars';
import { Field, Formik } from 'formik';

export default {
  title: 'Atoms/Stars',
  component: Stars,
  argTypes: {
    totalStars: { control: 'number' }
  }
} as ComponentMeta<typeof Stars>;

export const Default: Story<StarsProps> = () => (
  <Formik initialValues={{ name: '' }} onSubmit={() => console.log('asdcads')}>
    <Field name={'name'} component={Stars} totalStars={5} />
  </Formik>
);
export const WithTenStars: Story<StarsProps> = () => (
  <Formik initialValues={{ name: '' }} onSubmit={() => console.log('asdcads')}>
    <Field name={'name'} component={Stars} totalStars={10} />
  </Formik>
);
