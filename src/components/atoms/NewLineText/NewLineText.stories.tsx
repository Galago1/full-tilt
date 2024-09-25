import type { Story, ComponentMeta } from '@storybook/react';
import type { NewlineTextProps } from './NewLineText';
import NewLineText from './NewLineText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Newline Text',
  component: NewLineText
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof NewLineText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<NewlineTextProps> = (args) => {
  return <NewLineText {...args} />;
};

// basic
export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {};

export const OneLine = Template.bind({});
OneLine.args = {
  text: 'This is a one line text'
};
export const TwoLines = Template.bind({});
TwoLines.args = {
  text: 'Line One \n Line Two'
};
