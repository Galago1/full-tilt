import type { ComponentMeta, Story } from '@storybook/react';
import FiveSelect, { FiveSelectProps } from './FiveSelect';
import { Formik, Field } from 'formik';

export default {
  title: 'Atoms/FiveSelect',
  component: FiveSelect
} as ComponentMeta<typeof FiveSelect>;

const Template: Story<FiveSelectProps> = (args) => (
  <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
    <Field name={'name'} component={FiveSelect} {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  labels: {
    1: 'Strongly disagree',
    2: 'Disagree',
    3: 'Neutral',
    4: 'Agree',
    5: 'Strongly agree'
  }
};
