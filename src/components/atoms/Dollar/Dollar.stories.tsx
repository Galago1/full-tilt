import type { ComponentMeta, Story } from '@storybook/react';
import type { DollarProps } from './Dollar';
import Dollar from './Dollar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Dollar Formatting',
  component: Dollar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Dollar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DollarProps> = (args) => {
  return <Dollar {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  amount: 0
};
