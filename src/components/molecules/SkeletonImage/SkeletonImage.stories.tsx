import { ComponentStory, ComponentMeta } from '@storybook/react';
import SkeletonImage from './SkeletonImage';
const image = 'https://robohash.org/WTN.png?set=set1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Skeleton',
  component: SkeletonImage
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SkeletonImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkeletonImage> = (args) => (
  <SkeletonImage
    {...args}
    // children={<Image src={img} alt={'Included alt'} />}
  />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  boxSx: {
    width: 200,
    height: 200
  },
  skeletonOnly: false,
  skeletonProps: {
    width: 200,
    height: 200
  }
  // isLoaded: true
};

export const SkeletonOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SkeletonOnly.args = {
  boxSx: {},
  skeletonOnly: true,
  skeletonProps: {
    width: 200,
    height: 200
  }
  // isLoaded: false
};

export const RawImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RawImage.args = {
  boxSx: {},
  raw: true,
  skeletonOnly: false,
  skeletonProps: {
    width: 200,
    height: 200
  }
  // isLoaded: true
};

export const AvatarPropsImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AvatarPropsImage.args = {
  boxSx: {},
  raw: true,
  skeletonOnly: false,
  skeletonProps: {
    width: 200,
    height: 200
  },
  avatarProps: {
    src: image
  }
  // isLoaded: true
};
