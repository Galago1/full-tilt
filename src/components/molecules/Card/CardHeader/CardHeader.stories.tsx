import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import CardHeader, { CardHeaderProps } from './CardHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Card/Card Header',
  component: CardHeader
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardHeader>;

const Template: Story<CardHeaderProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <CardHeader {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Card Header',
      subtitle: 'Subtitle'
    }
  }
};

export const WithShow = Template.bind({});
WithShow.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Card Header',
      subtitle: 'Subtitle'
    }
  }
};

export const WithoutPaddingBottom = Template.bind({});
WithoutPaddingBottom.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Card Header',
      subtitle: 'Subtitle'
    }
  },
  paddingBottom: 0
};
