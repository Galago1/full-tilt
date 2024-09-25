import type { Story, ComponentMeta } from '@storybook/react';
import type { SliderProps } from './Slider';
import Slider from './Slider';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Slider',
  component: Slider
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const BasicSlider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicSlider.args = {};
