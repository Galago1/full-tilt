import type { Story, ComponentMeta } from '@storybook/react';
import type { CircularProgressIndicatorProps } from './CircularProgressIndicator';
import CircularProgressIndicator, {
  CircularProgressIndicatorSize
} from './CircularProgressIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Circular Progress Indicator',
  component: CircularProgressIndicator
} as ComponentMeta<typeof CircularProgressIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CircularProgressIndicatorProps> = (args) => (
  <CircularProgressIndicator {...args} />
);

export const Percent75 = Template.bind({});
Percent75.args = {
  value: 75
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  value: 75,
  size: CircularProgressIndicatorSize.MEDIUM
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 75,
  size: CircularProgressIndicatorSize.MEDIUM,
  label: 'Active Users'
};

export const WithSmallLabel = Template.bind({});
WithSmallLabel.args = {
  value: 75,
  size: CircularProgressIndicatorSize.SMALL,
  label: 'Active Users'
};
