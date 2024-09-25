import type { ComponentMeta, Story } from '@storybook/react';
import Switch from 'src/components/atoms/Switch/Switch';
import type { TitleWithDefaultsProps } from './TitleWithDefaults';
import TitleWithDefaults from './TitleWithDefaults';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Title With Defaults',
  component: TitleWithDefaults
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TitleWithDefaults>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TitleWithDefaultsProps> = (args) => (
  <TitleWithDefaults {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <Switch size={'small'} />,
  title: 'Remember me'
};
