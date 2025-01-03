import type { Story, ComponentMeta } from '@storybook/react';
import type { LoginSectionProps } from './LoginSection';
import LoginSection from './LoginSection';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Login Form',
  component: LoginSection
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LoginSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoginSectionProps> = (args) => <LoginSection {...args} />;

export const Blank = Template.bind({});
Blank.args = {};
