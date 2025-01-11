import type { ComponentMeta, Story } from '@storybook/react';
import type { MeetingsCardProps } from './MeetingsCard';
import MeetingsCard from './MeetingsCard';
import ThemeProvider from 'src/components/particles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/MyOs/MeetingsCard',
  component: MeetingsCard,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof MeetingsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MeetingsCardProps> = (args) => {
  return (
    <ThemeProvider>
      <MeetingsCard {...args} />
    </ThemeProvider>
  );
};

export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {};
