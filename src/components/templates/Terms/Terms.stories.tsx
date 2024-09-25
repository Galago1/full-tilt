import type { ComponentMeta, Story } from '@storybook/react';
import type { TermsProps } from './Terms';
import Terms from './Terms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Terms',
  component: Terms,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Terms>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TermsProps> = (args) => {
  return <Terms {...args} />;
};

export const TermsTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TermsTemplate.args = {};
