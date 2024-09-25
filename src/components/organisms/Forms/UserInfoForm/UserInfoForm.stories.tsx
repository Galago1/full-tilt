import type { Story, ComponentMeta } from '@storybook/react';
import type { UserInfoFormProps } from './UserInfoForm';
import UserInfoForm from './UserInfoForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/User Info Form',
  component: UserInfoForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof UserInfoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<UserInfoFormProps> = (args) => <UserInfoForm {...args} />;

export const Blank = Template.bind({});
Blank.args = {};

export const Filled = Template.bind({});
Filled.args = {
  initialValues: {
    fullName: 'Bill Gates',
    phone: '6233453456',
    email: 'bill@gates.com'
  }
};
