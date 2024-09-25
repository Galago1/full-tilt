import UploadAvatar, { UploadAvatarProps } from './UploadAvatar';
const image = 'https://robohash.org/WTN.png?set=set1';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Molecules/Inputs/Upload Avatar',
  component: UploadAvatar
} as ComponentMeta<typeof UploadAvatar>;

const Template: Story<UploadAvatarProps> = (args) => {
  return <UploadAvatar {...args} />;
};
export const Initial = Template.bind({});
export const DefaultImg = Template.bind({});
DefaultImg.args = { image };
