import type { Story, ComponentMeta } from '@storybook/react';
import type { VerifyFormProps } from './VerifyForm';
import VerifyForm from './VerifyForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Verify Form',
  component: VerifyForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof VerifyForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<VerifyFormProps> = (args) => <VerifyForm {...args} />;

export const Blank = Template.bind({});
Blank.args = {};
