import { Meta, Story } from '@storybook/react';
import { Card } from '../../../organisms';
import CardContent, { CardContentProps } from './CardContent';

export default {
  title: 'Molecules/Card/CardContent',
  component: CardContent
} as Meta;

const Template: Story<CardContentProps> = (args) => (
  <Card
    showActions={false}
    slots={{ cardHeaderProps: { paddingBottom: { xs: 0, sm: 0, md: 0 } } }}
  >
    <CardContent {...args} />
  </Card>
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
