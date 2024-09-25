import type { Story, ComponentMeta } from '@storybook/react';
import uploadedImage from 'src/mocks/images/uploadedImage';
import type { SwipeableListProps } from './SwipeableList';
import SwipeableList from './SwipeableList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Swipeable List',
  component: SwipeableList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SwipeableList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SwipeableListProps> = (args) => (
  <SwipeableList {...args} />
);

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  images: [uploadedImage],
  index: 0,
  heightOverride: 544
};
