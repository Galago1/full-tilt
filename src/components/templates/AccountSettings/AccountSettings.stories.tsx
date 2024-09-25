import type { ComponentMeta, Story } from '@storybook/react';
import type { AccountSettingsProps } from './AccountSettings';
import AccountSettings from './AccountSettings';
const image = 'https://robohash.org/WTN.png?set=set1';
import { Tbase } from '../../organisms/Table/Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Account Settings',
  component: AccountSettings,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AccountSettings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AccountSettingsProps<Tbase>> = (args) => {
  return <AccountSettings {...args} />;
};

export const AccountSettingsTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccountSettingsTemplate.args = {};

export const AccountSettingsInitialValues = Template.bind({});
AccountSettingsInitialValues.args = {
  initialValues: { fullName: 'Bill Gates', phone: '6233453456' },
  image: image as unknown as string
};
