import type { Story, ComponentMeta } from '@storybook/react';
import type { SimpleDropzoneProps } from './SimpleDropzone';
import SimpleDropzone from './SimpleDropzone';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SimpleDropzone',
  component: SimpleDropzone
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SimpleDropzone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SimpleDropzoneProps> = (args) => {
  return <SimpleDropzone {...args} />;
};

// basic
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
