import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import CloseButton, { CloseButtonProps } from './CloseButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CloseButton',
  component: CloseButton
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CloseButton>;

const Template: Story<CloseButtonProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <CloseButton {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {};
