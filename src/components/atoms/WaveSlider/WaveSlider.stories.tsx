import { Meta, Story } from '@storybook/react';
import WaveSlider, { WaveSliderProps } from './WaveSlider';
import { Field, Formik } from 'formik';
import ThemeProvider from 'src/components/particles/theme';

export default {
  title: 'Organisms/WaveSlider',
  component: WaveSlider
} as Meta;

const Template: Story<WaveSliderProps> = (args) => (
  <ThemeProvider>
    <Formik initialValues={{ name: '' }} onSubmit={() => console.log('test')}>
      <Field name="name" component={WaveSlider} {...args} />
    </Formik>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 10,
  step: 1,
  minLabel: 'Not likely at all',
  maxLabel: 'Very likely'
  // onChange: (form, field, value, changeType) => {
  //   console.log('value', value);
  //   console.log('changeType', changeType);
  // }
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 10,
  step: 1,
  minLabel: 'Not likely at all',
  maxLabel: 'Very likely',
  disabled: true
};
