import { ComponentMeta, Story } from '@storybook/react';
import SwipeableImage, { SwipeableImageProps } from './SwipeableImage';
const image = 'https://robohash.org/WTN.png?set=set1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Swipeable Image',
  component: SwipeableImage
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SwipeableImage>;

const Template: Story<SwipeableImageProps> = (_args) => {
  return (
    <SwipeableImage imageUrl={image} onNext={() => {}} onPrevious={() => {}} />
  );
};
export const Default = Template.bind({});
