import type { ComponentMeta, Story } from '@storybook/react';
import type { HorizontalInputProps } from './HorizontalInput';
import HorizontalInput from './HorizontalInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/HorizontalInput',
  component: HorizontalInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof HorizontalInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HorizontalInputProps> = (args) => {
  return <HorizontalInput {...args} />;
};
export const Normal = Template.bind({});
Normal.args = {};
