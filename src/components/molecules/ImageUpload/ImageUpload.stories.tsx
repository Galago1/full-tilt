import { ComponentMeta, Story } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from './ImageUpload';
const image = 'https://robohash.org/WTN.png?set=set1';

export default {
  title: 'Molecules/Image Upload',
  component: ImageUpload,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof ImageUpload>;

const Template: Story<ImageUploadProps> = (args) => {
  return <ImageUpload {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Uploaded = Template.bind({});
Uploaded.args = {
  defaultSrc: image
};
