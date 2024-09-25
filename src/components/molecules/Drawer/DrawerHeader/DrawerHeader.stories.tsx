import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import DrawerHeader, { DrawerHeaderProps } from './DrawerHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Drawer/Drawer Header',
  component: DrawerHeader
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DrawerHeader>;

const Template: Story<DrawerHeaderProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <DrawerHeader {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Drawer Header',
      subtitle: 'Subtitle'
    }
  }
};

export const WithShow = Template.bind({});
WithShow.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Drawer Header',
      subtitle: 'Subtitle'
    }
  }
};

export const WithoutPaddingBottom = Template.bind({});
WithoutPaddingBottom.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Drawer Header',
      subtitle: 'Subtitle'
    }
  },
  paddingBottom: { xs: 0 }
};
