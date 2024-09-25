import type { ComponentMeta, Story } from '@storybook/react';
import type { AttachmentInputProps } from './AttachmentInput';
import AttachmentInput from './AttachmentInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Attachment Input',
  component: AttachmentInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AttachmentInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AttachmentInputProps> = (args) => {
  return <AttachmentInput {...args} />;
};
export const Normal = Template.bind({});
Normal.args = {
  labelProps: { label: 'Custom' },
  error: 'test'
};
