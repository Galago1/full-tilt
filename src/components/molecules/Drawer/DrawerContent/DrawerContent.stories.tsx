import { Meta, Story } from '@storybook/react';
import DrawerContent, { DrawerContentProps } from './DrawerContent';
import Drawer from 'src/components/organisms/Drawer/Drawer';

export default {
  title: 'Molecules/Drawer/DrawerContent',
  component: DrawerContent
} as Meta;

const Template: Story<DrawerContentProps> = (args) => (
  <Drawer
    showActions={false}
    slots={{ drawerHeaderProps: { paddingBottom: { xs: 0, sm: 0, md: 0 } } }}
  >
    <DrawerContent {...args} />
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {};

export const WithAvatarAndTextTitle = Template.bind({});
WithAvatarAndTextTitle.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Default Title'
    }
  }
};

export const WithAvatarAndTextTitleAndSubtitle = Template.bind({});
WithAvatarAndTextTitleAndSubtitle.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Title',
      subtitle: 'Subtitle'
    }
  }
};

export const WithTitleOnly = Template.bind({});
WithTitleOnly.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Title Only'
    }
  }
};
