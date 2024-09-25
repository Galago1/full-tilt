import type { Story, ComponentMeta } from '@storybook/react';
import type { BlockContainerProps } from './BlockContainer';
import BlockContainer from './BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Block Container',
  component: BlockContainer
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof BlockContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BlockContainerProps> = (args) => (
  <BlockContainer {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Icons',
  description: 'Generic Description'
};
