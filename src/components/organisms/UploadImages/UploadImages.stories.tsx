import { ComponentMeta, Story } from '@storybook/react';
// import image from 'src/assets/images/signup-bg.png';
import UploadImages, { UploadImagesProps } from './UploadImages';

export default {
  title: 'Organisms/Upload Images',
  component: UploadImages,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof UploadImages>;

const DUMMY_IMAGES = [
  {
    src: 'https://robohash.org/2600:8800:468b:dd00:70d4:a424:8983:646f.png',
    name: 'image'
  },
  {
    src: 'https://robohash.org/2600:8800:468b:dd00:70d4:a424:8983:646f.png',
    name: 'image',
    hoverSx: {
      opacity: 1
    },
    hoverState: true
  }
];

const Template: Story<UploadImagesProps> = (args) => {
  return <UploadImages {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  images: DUMMY_IMAGES
};
