import type { Story, ComponentMeta } from '@storybook/react';
import type { LoginFormProps } from './LoginForm';
import LoginForm from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Login Form',
  component: LoginForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Blank = Template.bind({});
Blank.args = {};
