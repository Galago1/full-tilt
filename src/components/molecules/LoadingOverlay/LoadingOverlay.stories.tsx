import { ComponentMeta, Story } from '@storybook/react';

import LoadingOverlay, { LoadingOverlayProps } from './LoadingOverlay';

export default {
  title: 'Molecules/Loading Overlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof LoadingOverlay>;

const Template: Story<LoadingOverlayProps> = (args) => {
  return <LoadingOverlay {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
