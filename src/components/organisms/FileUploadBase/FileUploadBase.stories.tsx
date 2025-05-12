import { ComponentMeta, Story } from '@storybook/react';
import FileUploadBase, { FileUploadBaseProps } from './FileUploadBase';
import image from 'src/assets/images/horizontal-test.png';
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';

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

// Story that demonstrates the onChange functionality
export const WithOnChangeHandler: Story<FileUploadBaseProps> = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(files);
  };
  
  return (
    <Grid container flexDirection="column" gap={2}>
      <Grid item>
        <FileUploadBase
          onFilesUploaded={handleFilesUploaded}
          acceptedText="Upload any file to see the onChange event in action"
        />
      </Grid>
      
      {uploadedFiles.length > 0 && (
        <Grid item>
          <Grid container flexDirection="column" gap={1}>
            <Grid item>
              <Typography variant="textMdSemibold">Uploaded Files:</Typography>
            </Grid>
            {uploadedFiles.map((file, index) => (
              <Grid item key={`file-${index}`}>
                <Typography variant="textSmRegular">
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
