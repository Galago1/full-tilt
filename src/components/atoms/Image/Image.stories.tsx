import type { Story, ComponentMeta } from '@storybook/react';
import type { ImageProps } from './Image';
import Image from './Image';
const image = 'https://robohash.org/WTN.png?set=set1';
import { Grid } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Image',
  component: Image
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ImageProps> = (args) => {
  return <Image {...args} />;
};
const LayoutTemplate: Story<ImageProps> = (args) => {
  return (
    <Grid
      sx={{ position: 'relative', width: 300, height: 300 }}
      data-testid="box-img"
    >
      <Image {...args} />
    </Grid>
  );
};

export const BasicImages = Template.bind({});
BasicImages.args = {
  alt: 'user',
  src: image,
  width: 300,
  height: 300
};

export const LayoutImages = LayoutTemplate.bind({});
LayoutImages.args = {
  alt: 'user',
  src: image
};
