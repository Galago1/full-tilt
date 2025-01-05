import type { ComponentMeta, Story } from '@storybook/react';
import DropdownCard, { DropdownCardProps } from './DropdownCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown Uncontrolled',
  component: DropdownCard
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownCardProps> = (args) => <DropdownCard {...args} />;

export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {};
