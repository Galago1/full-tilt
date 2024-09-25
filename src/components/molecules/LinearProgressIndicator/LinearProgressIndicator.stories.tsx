import type { Story, ComponentMeta } from '@storybook/react';
import type { LinearProgressIndicatorProps } from './LinearProgressIndicator';
import LinearProgressIndicator from './LinearProgressIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Linear Progress Indicator',
  component: LinearProgressIndicator
} as ComponentMeta<typeof LinearProgressIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LinearProgressIndicatorProps> = (args) => (
  <LinearProgressIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 75,
  displayValue: '75%'
};

export const DisplayValueTop = Template.bind({});
DisplayValueTop.args = {
  value: 75,
  displayLabel: 'Progress',
  displayValue: '75%',
  displayPosition: 'top'
};

export const DisplayValueBottom = Template.bind({});
DisplayValueBottom.args = {
  value: 75,
  displayValue: '75%',
  displayPosition: 'bottom'
};

export const DisplayPositionNone = Template.bind({});
DisplayPositionNone.args = {
  value: 75,
  displayLabel: 'Progress',
  displayValue: '75%',
  displayPosition: ''
};
