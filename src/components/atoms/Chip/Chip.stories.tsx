import { Avatar } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { CheckIcon } from 'src/components/particles/theme/icons/General/check';
import { XCloseIcon } from 'src/components/particles/theme/icons/General/x-close';
import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';
import type { ChipProps } from './Chip';
import Chip from './Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Chip',
  component: Chip
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChipProps> = (args) => {
  return <Chip {...args} />;
};

// Filled Base
export const BaseFilledBasic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseFilledBasic.args = {
  label: 'basic',
  onDelete: undefined
};

export const BaseFilledDisabled = Template.bind({});
BaseFilledDisabled.args = {
  label: 'disabled',
  disabled: true,
  onDelete: undefined
};

export const BaseFilledClickable = Template.bind({});
BaseFilledClickable.args = {
  label: 'clickable',
  clickable: true,
  onDelete: undefined,
  avatar: <Avatar>B</Avatar>
};

export const BaseFilledDeletable = Template.bind({});
BaseFilledDeletable.args = {
  label: 'Deletable',
  clickable: true,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  avatar: <Avatar src="assets/icons/Users/face-smile.svg"></Avatar>
};

export const BaseFilledCustomDeleteIcon = Template.bind({});
BaseFilledCustomDeleteIcon.args = {
  label: 'Custom delete icon',
  onDelete: () => {},
  deleteIcon: <CheckIcon />
};

export const BaseFilledClickableLink = Template.bind({});
BaseFilledClickableLink.args = {
  label: 'Clickable Link',
  component: 'a',
  href: '#basic-chip',
  onDelete: undefined,
  clickable: true
};

// Filled Size
export const SizeFilledNormal = Template.bind({});
SizeFilledNormal.args = {
  label: 'Normal',
  size: 'medium',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const SizeFilledSmall = Template.bind({});
SizeFilledSmall.args = {
  label: 'Small',
  size: 'small',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const SizeFilledLarge = Template.bind({});
SizeFilledLarge.args = {
  label: 'Large',
  size: 'large',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const FilledAvatarOnly = Template.bind({});
FilledAvatarOnly.args = {
  avatar: <Avatar>M</Avatar>,
  onDelete: undefined
};

export const FilledIconOnly = Template.bind({});
FilledIconOnly.args = {
  icon: <FaceSmileIcon />,
  onDelete: undefined
};

// Outlined Base
export const BaseOutlinedBasic = Template.bind({});
BaseOutlinedBasic.args = {
  label: 'basic',
  onDelete: undefined,
  variant: 'outlined'
};

export const BaseOutlinedDisabled = Template.bind({});
BaseOutlinedDisabled.args = {
  label: 'disabled',
  disabled: true,
  onDelete: undefined,
  variant: 'outlined'
};

export const BaseOutlinedClickable = Template.bind({});
BaseOutlinedClickable.args = {
  label: 'clickable',
  clickable: true,
  onDelete: undefined,
  avatar: <Avatar>B</Avatar>,
  variant: 'outlined'
};

export const BaseOutlinedDeletable = Template.bind({});
BaseOutlinedDeletable.args = {
  label: 'Deletable',
  clickable: true,
  onDelete: () => {},
  avatar: <Avatar src="assets/icons/Users/face-smile.svg"></Avatar>,
  variant: 'outlined'
};

export const BaseOutlinedCustomDeleteIcon = Template.bind({});
BaseOutlinedCustomDeleteIcon.args = {
  label: 'Custom delete icon',
  onDelete: () => {},
  deleteIcon: <CheckIcon />,
  variant: 'outlined'
};

export const BaseOutlinedClickableLink = Template.bind({});
BaseOutlinedClickableLink.args = {
  label: 'Clickable Link',
  component: 'a',
  href: '#basic-chip',
  onDelete: undefined,
  clickable: true,
  variant: 'outlined'
};

// Outlined Size
export const SizeOutlinedNormal = Template.bind({});
SizeOutlinedNormal.args = {
  label: 'Normal',
  size: 'medium',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const SizeOutlinedSmall = Template.bind({});
SizeOutlinedSmall.args = {
  label: 'Small',
  size: 'small',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const SizeOutlinedIconSmall = Template.bind({});
SizeOutlinedSmall.args = {
  label: 'Small',
  size: 'small',
  icon: <FaceSmileIcon />,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const OutlinedAvatarOnly = Template.bind({});
OutlinedAvatarOnly.args = {
  avatar: <Avatar>M</Avatar>,
  variant: 'outlined',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedIconOnly = Template.bind({});
OutlinedIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedLargeIconOnly = Template.bind({});
OutlinedLargeIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  size: 'large',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedSmallIconOnly = Template.bind({});
OutlinedSmallIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  size: 'small',
  onDelete: undefined,
  deleteIcon: null as any
};
