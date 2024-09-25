import { ComponentMeta, Story } from '@storybook/react';
import FileUploadBase, { FileUploadBaseProps } from './FileUploadBase';
import image from 'src/assets/images/horizontal-test.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/File Upload Base',
  component: FileUploadBase
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FileUploadBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FileUploadBaseProps> = (args) => (
  <FileUploadBase {...args} />
);

export const FileUploadBaseTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FileUploadBaseTemplate.args = {};

export const DisabledBasic = Template.bind({});
DisabledBasic.args = {
  disabled: true
};

export const PreviewImage = Template.bind({});
PreviewImage.args = {
  showContent: false,
  boxSx: { p: 0 },
  imagePreviews: [
    {
      src: image,
      width: '100%',
      height: 400,
      style: { objectFit: 'fill', borderRadius: '12px' }
    }
  ]
};
