import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import { HeartIcon } from 'src/components/particles/theme/icons/General/heart';
import type { CheckboxProps } from './Checkbox';
import Checkbox from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CheckboxProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <Field>
        {(formik: any) => {
          return <Checkbox {...args} {...formik} />;
        }}
      </Field>
    </Formik>
  );
};

// Basic
export const BasicChecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicChecked.args = {
  color: 'success',
  type: 'checkbox'
  // checked: true
};

export const BasicIndeterminate = Template.bind({});
BasicIndeterminate.args = {
  color: 'success',
  indeterminate: true,
  type: 'checkbox'
};

export const basicDisabled = Template.bind({});
basicDisabled.args = {
  disabled: true,
  type: 'checkbox'
};

// Size & Custom Icon
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  color: 'success',
  type: 'checkbox'
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  checkedIcon: <HeartIcon />,
  icon: <HeartIcon />,
  type: 'checkbox'
};

// Adding Colors
export const Success = Template.bind({});
Success.args = {
  color: 'success',
  type: 'checkbox'
};
