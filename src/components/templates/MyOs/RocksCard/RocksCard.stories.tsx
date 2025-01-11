import type { ComponentMeta, Story } from '@storybook/react';
import type { RocksCardProps } from './RocksCard';
import RocksCard from './RocksCard';
import ThemeProvider from 'src/components/particles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/MyOs/RocksCard',
  component: RocksCard,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RocksCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RocksCardProps> = (args) => {
  return (
    <ThemeProvider>
      <RocksCard {...args} />
    </ThemeProvider>
  );
};

export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {};
