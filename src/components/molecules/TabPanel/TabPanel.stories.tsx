import type { ComponentMeta, Story } from '@storybook/react';
import type { TabPanelProps } from './TabPanel';
import TabPanel from './TabPanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/TabPanel',
  component: TabPanel
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TabPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TabPanelProps> = (args) => {
  return <TabPanel {...args} />;
};

export const Displayed = Template.bind({});
Displayed.args = {
  value: 0,
  index: 0,
  children: 'Displayed'
};

export const Hidden = Template.bind({});
Hidden.args = {
  value: 0,
  index: 1,
  children: 'Displayed'
};
