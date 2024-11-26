import type { ComponentMeta, Story } from '@storybook/react';
import BasicEmptyState, { BasicEmptyStateProps } from './BasicEmptyState';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/BasicEmptyState',
  component: BasicEmptyState
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof BasicEmptyState>;

const Template: Story<BasicEmptyStateProps> = (args) => {
  return <BasicEmptyState {...args} />;
};

export const Initial = Template.bind({});
Initial.args = {};
