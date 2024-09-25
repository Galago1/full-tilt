import type { ComponentMeta, Story } from '@storybook/react';
import type { NotFoundProps } from './NotFound';
import NotFound from './NotFound';
import image from 'src/assets/images/404-illustration.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Not Found',
  component: NotFound,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof NotFound>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<NotFoundProps> = (args) => {
  return <NotFound {...args} />;
};

export const NotFoundTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotFoundTemplate.args = {
  image
};
