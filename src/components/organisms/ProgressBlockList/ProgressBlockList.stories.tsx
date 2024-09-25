/* eslint-disable react/no-children-prop */
import type { Story, ComponentMeta } from '@storybook/react';
import {
  Completed,
  Default as PropgressBlockDefault
} from '../../molecules/ProgressBlock/ProgressBlock.stories';
import type { ProgressBlockListProps } from './ProgressBlockList';
import ProgressBlockList from './ProgressBlockList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Progress Block List',
  component: ProgressBlockList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ProgressBlockList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ProgressBlockListProps> = (args) => (
  <ProgressBlockList {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  progressBlockProps: [{ ...Completed.args }, { ...PropgressBlockDefault.args }]
};
