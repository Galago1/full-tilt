import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import NavigationNextPrev, {
  NavigationNextPrevProps
} from './NavigationNextPrev';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navigation Next Prev',
  component: NavigationNextPrev
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof NavigationNextPrev>;

const Template: Story<NavigationNextPrevProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <NavigationNextPrev {...args} />
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
