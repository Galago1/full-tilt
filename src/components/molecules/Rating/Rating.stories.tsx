import type { Story, ComponentMeta } from '@storybook/react';
import { CheckCircleIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { RatingProps } from './Rating';
import Rating from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Rating',
  component: Rating
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Controlled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Controlled.args = {
  value: 3
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 3,
  readOnly: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 3,
  disabled: true
};

export const Empty = Template.bind({});
Empty.args = {
  value: undefined
};

export const Precision = Template.bind({});
Precision.args = {
  defaultValue: 2,
  precision: 0.5
};

export const TenStars = Template.bind({});
TenStars.args = {
  defaultValue: 2,
  max: 10
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  defaultValue: 2,
  max: 10,
  precision: 0.5,
  icon: <CheckCircleIcon />,
  emptyIcon: <CheckCircleIcon />
};

export const Size = Template.bind({});
Size.args = {
  defaultValue: 2,
  precision: 0.5,
  size: 'small'
};
