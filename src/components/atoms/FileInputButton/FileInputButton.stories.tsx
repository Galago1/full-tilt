import { ComponentMeta, Story } from '@storybook/react';
import { User01Icon } from 'src/components/particles/theme/icons/Users/user-01';
import FileInputButton, { FileInputButtonProps } from './FileInputButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/File Input Button',
  component: FileInputButton
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FileInputButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FileInputButtonProps> = (args) => (
  <FileInputButton {...args}>{args.children}</FileInputButton>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: 'basic',
  variant: 'contained'
};

export const ButtonVideoFile = Template.bind({});
ButtonVideoFile.args = {
  children: 'Video',
  variant: 'contained',
  accept: 'video/*',
  color: 'primary'
};

export const ButtonImageFile = Template.bind({});
ButtonImageFile.args = {
  children: 'Image',
  variant: 'contained',
  accept: 'image/*',
  color: 'secondary'
};

export const ButtonAudioFile = Template.bind({});
ButtonAudioFile.args = {
  children: 'Audio',
  variant: 'contained',
  accept: 'audio/*',
  color: 'success'
};

export const ButtonIconVideoFile = Template.bind({});
ButtonIconVideoFile.args = {
  children: <User01Icon />,
  inputButtonType: 'buttonIcon',
  accept: 'video/*',
  color: 'primary',
  size: 'large'
};

export const ButtonIconImageFile = Template.bind({});
ButtonIconImageFile.args = {
  children: <User01Icon />,
  inputButtonType: 'buttonIcon',
  accept: 'image/*',
  color: 'success',
  size: 'large'
};

export const ButtonIconAudioFile = Template.bind({});
ButtonIconAudioFile.args = {
  children: <User01Icon />,
  inputButtonType: 'buttonIcon',
  accept: 'audio/*',
  color: 'success',
  size: 'large'
};
