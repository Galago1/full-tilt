import type { Story, ComponentMeta } from '@storybook/react';
import type { SignupFormProps } from './SignupForm';
import SignupForm from './SignupForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Signup Form',
  component: SignupForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SignupForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SignupFormProps> = (args) => <SignupForm {...args} />;

export const Blank = Template.bind({});
Blank.args = {};
