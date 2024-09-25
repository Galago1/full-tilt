import type { Story, ComponentMeta } from '@storybook/react';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';
import Switch from 'src/components/atoms/Switch/Switch';
import type { SelectWithTextProps } from './SelectWithText';
import SelectWithText from './SelectWithText';
import { Field, Formik } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Select With Text',
  component: SelectWithText
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SelectWithText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectWithTextProps> = (args) => (
  <SelectWithText {...args} />
);

export const SwitchWithDescription = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitchWithDescription.args = {
  children: <Switch size={'small'} />,
  title: 'Remember me',
  description: 'Save my login details for next time.'
};

export const RadioWithDescription = Template.bind({});
RadioWithDescription.args = {
  children: <RadioButton sx={{ padding: 0 }} />,
  title: 'Remember me',
  description: 'Save my login details for next time.'
};

export const CheckboxWithDescription = Template.bind({});
CheckboxWithDescription.args = {
  children: (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Field component={Checkbox} sx={{ padding: 0 }} />
    </Formik>
  ),
  title: 'Remember me',
  description: 'Save my login details for next time.'
};
export const SwitchWithoutDescription = Template.bind({});
SwitchWithoutDescription.args = {
  children: <Switch size={'small'} />,
  title: 'Remember me'
};
