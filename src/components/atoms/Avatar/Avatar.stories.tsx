import type { ComponentMeta, Story } from '@storybook/react';
import image from 'src/assets/images/blurbackground.png';
import { UserIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { AvatarProps } from './Avatar';
import Avatar from './Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Avatar',
  component: Avatar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />;
};

// basic
export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const ImageAvatars = Template.bind({});
ImageAvatars.args = {
  alt: 'Eduardo',
  src: image
};

export const LetterAvatars = Template.bind({});
LetterAvatars.args = {
  children: <>H</>
};

export const IconAvatars = Template.bind({});
IconAvatars.args = {
  children: <UserIcon />,
  sx: { bgcolor: '#00AB55', color: 'white' }
};

export const VariantAvatars = Template.bind({});
VariantAvatars.args = {
  children: <UserIcon />,
  sx: { bgcolor: '#00AB55', color: 'white' },
  variant: 'rounded'
};

export const SizeAvatars = Template.bind({});
SizeAvatars.args = {
  alt: 'Eduardo',
  src: image,
  sx: { width: 128, height: 128 }
};
