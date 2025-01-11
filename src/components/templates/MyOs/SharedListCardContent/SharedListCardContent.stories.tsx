import type { ComponentMeta, Story } from '@storybook/react';
import type { SharedListCardContentProps } from './SharedListCardContent';
import SharedListCardContent from './SharedListCardContent';
import ThemeProvider from 'src/components/particles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/MyOs/SharedListCardContent',
  component: SharedListCardContent,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SharedListCardContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SharedListCardContentProps> = (args) => {
  return (
    <ThemeProvider>
      <SharedListCardContent {...args} />
    </ThemeProvider>
  );
};

export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {};
