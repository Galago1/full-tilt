import { ComponentMeta, Story } from '@storybook/react';
import FileInput, { FileInputProps } from './FileInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/FileInput',
  component: FileInput
} as ComponentMeta<typeof FileInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FileInputProps> = (args) => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (files) => {
    console.warn(files);
  }
};
