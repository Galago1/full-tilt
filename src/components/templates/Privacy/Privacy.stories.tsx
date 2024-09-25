import type { ComponentMeta, Story } from '@storybook/react';
import type { PrivacyProps } from './Privacy';
import Privacy from './Privacy';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Privacy',
  component: Privacy,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Privacy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PrivacyProps> = (args) => {
  return <Privacy {...args} />;
};

export const PrivacyTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrivacyTemplate.args = {};
