import type { Story, ComponentMeta } from '@storybook/react';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';
import { Formik, Field } from 'formik';
import type { RadioGroupProps } from './RadioGroup';
import RadioGroup from './RadioGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Radio Group',
  component: RadioGroup
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RadioGroupProps> = (args) => {
  return (
    <Formik
      initialValues={{ name: args.defaultValue || '' }}
      onSubmit={(v) => {}}
    >
      <Field component={RadioGroup} {...args} name="name" />
    </Formik>
  );
};

export const OneOption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OneOption.args = {
  radios: [
    {
      children: <RadioButton sx={{ padding: 0 }} value="name" />,
      title: 'Remember me',
      description: 'Save my login details for next time.'
    }
  ]
};
export const TwoOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TwoOptions.args = {
  defaultValue: 'public',
  radios: [
    {
      children: <RadioButton sx={{ padding: 0 }} value="public" />,
      title: 'Publish collection and list on my store'
    },
    {
      children: <RadioButton sx={{ padding: 0 }} value="private" />,
      title: 'Keep private',
      description:
        'The collection will only be avaliable through private link.',
      sx: { mt: 1 }
    }
  ]
};
