import type { ComponentMeta, Story } from '@storybook/react';
import { FastField, Formik } from 'formik';
import { CheckboxInputBaseProps } from '../CheckboxInputBase/CheckboxInputBase';
import { Normal } from '../CheckboxInputBase/CheckboxInputBase.stories';
import CheckboxList, { CheckboxListProps } from './CheckboxList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Checkbox List',
  component: CheckboxList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CheckboxList>;

const one: CheckboxInputBaseProps = {
  ...(Normal.args as CheckboxInputBaseProps),
  // @ts-ignore
  checkbox: true
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CheckboxListProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <>
        <CheckboxList {...args} />
      </>
    </Formik>
  );
};
export const OneCheckbox = Template.bind({});
OneCheckbox.args = {
  labelProps: {
    children: 'Type',
    variant: 'textSmRegular',
    sx: { mb: 0.75 }
  },
  checkboxInputs: [{ ...one }]
};

export const TwoCheckboxes = Template.bind({});
TwoCheckboxes.args = {
  labelProps: {
    children: 'Type',
    variant: 'textSmRegular',
    sx: { mb: 0.75 }
  },
  TheField: FastField,

  checkboxInputs: Array.from({ length: 1000 }).map((_, index) => {
    return {
      ...one,
      checkbox: true,
      labelProps: { ...one.labelProps, label: `Checkbox ${index}` }
    };
  }),
  slots: {
    itemProps: {
      xs: 12
    }
  }
};
