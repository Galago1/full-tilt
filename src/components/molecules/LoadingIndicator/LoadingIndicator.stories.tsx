import type { Story, ComponentMeta } from '@storybook/react';
import { CircularProgressIndicatorSize } from '../CircularProgressIndicator/CircularProgressIndicator';
import type { LoadingIndicatorProps } from './LoadingIndicator';
import LoadingIndicator from './LoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Loading Indicator',
  component: LoadingIndicator
} as ComponentMeta<typeof LoadingIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoadingIndicatorProps> = (args) => (
  <LoadingIndicator {...args} />
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
  label: 'Active Users'
};

export const WithSmallLabel = Template.bind({});
WithSmallLabel.args = {
  value: 75,
  label: 'Active Users',
  size: CircularProgressIndicatorSize.SMALL,
  variant: 'indeterminate'
};
