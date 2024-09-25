import type { Story, ComponentMeta } from '@storybook/react';
import type { BadgeProps } from './Badge';
import Badge from './Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Badge',
  component: Badge
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  color: 'primary',
  badgeContent: 4
};

export const MaximumValue = Template.bind({});
MaximumValue.args = {
  color: 'primary',
  badgeContent: 100,
  max: 99
};

export const DotBadge = Template.bind({});
DotBadge.args = {
  color: 'primary',
  badgeContent: ' ',
  variant: 'dot'
};

export const BadgeOverlapCircular = Template.bind({});
BadgeOverlapCircular.args = {
  color: 'primary',
  badgeContent: ' ',
  overlap: 'circular'
};

export const BadgeOverlapRectangular = Template.bind({});
BadgeOverlapRectangular.args = {
  color: 'primary',
  badgeContent: ' ',
  overlap: 'rectangular'
};
