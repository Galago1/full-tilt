import { Box, BoxProps, Theme } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Box',
  component: Box
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  color: 'primary',
  sx: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: (theme: Theme) => theme.spacing(0.75)
  }
};
export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  color: 'primary',
  sx: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 0
  }
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  color: 'primary',
  sx: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 0
  }
};
