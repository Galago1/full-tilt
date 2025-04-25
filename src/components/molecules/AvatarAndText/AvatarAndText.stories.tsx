import { Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { XCloseIcon } from 'src/components/particles/theme/icons/General/x-close';
import { Image01Icon } from 'src/components/particles/theme/icons/Images/image-01';
import type { AvatarAndTextProps } from './AvatarAndText';
import AvatarAndText from './AvatarAndText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Avatar With Text',
  component: AvatarAndText
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AvatarAndText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AvatarAndTextProps> = (args) => (
  <AvatarAndText {...args} />
);

const WithAvatarArgs = {
  avatarProps: {
    children: <> HR</>,
    sx: { width: 56, height: 56 }
  },
  title: 'Olivia Rhye',
  subtitle: 'olivia@rhye.com'
};

export const WithAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAvatar.args = WithAvatarArgs;

export const WithAvatarAndRowText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAvatarAndRowText.args = {
  ...WithAvatarArgs,
  textSx: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center'
  }
};

export const WithoutAvatar = Template.bind({});
WithoutAvatar.args = {
  title: 'Olivia Rhye',
  subtitle: 'olivia@rhye.com'
};
export const WithChildren = Template.bind({});
WithChildren.args = {
  title: 'Olivia Rhye',
  subtitle: 'olivia@rhye.com',
  children: <Image01Icon color={'secondary'} />
};

export const WithClosebutton = Template.bind({});
WithClosebutton.args = {
  title: 'Olivia Rhye',
  subtitle: 'olivia@rhye.com',
  buttonProps: {
    gridProps: {
      position: 'absolute',
      top: 0,
      right: (theme: Theme) => theme.spacing(2.5)
    },
    variant: 'text',
    color: 'secondary',
    startIcon: <XCloseIcon color={'secondary'} />
  }
};

export const WithLeftButtonTooltip = Template.bind({});
WithLeftButtonTooltip.args = {
  title: 'Olivia Rhye',
  subtitle: 'olivia@rhye.com',
  leftButtonTooltipProps: {
    title: 'Delete'
  },
  leftButtonProps: {
    variant: 'text',
    color: 'secondary',
    startIcon: <XCloseIcon color={'secondary'} />
  }
};
