import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import ModalHeader, { ModalHeaderProps } from './ModalHeader';
import { Dual } from 'src/components/atoms/FeaturedIcon/FeaturedIcon.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Modal/Modal Header',
  component: ModalHeader
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ModalHeader>;

const Template: Story<ModalHeaderProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <ModalHeader {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    }
  }
};

export const WithShowCloseEnabled = Template.bind({});
WithShowCloseEnabled.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    }
  },
  showClose: true
};
export const WithShowCloseEnabledAbsolute = Template.bind({});
WithShowCloseEnabledAbsolute.args = {
  slots: {
    closeButtonProps: {
      useAbsolutePosition: true
    },
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    }
  },
  showClose: true
};

export const WithShowDividerEnabled = Template.bind({});
WithShowDividerEnabled.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    }
  },
  showDivider: true
};

export const WithShowFeaturedIcon = Template.bind({});
WithShowFeaturedIcon.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    },
    featuredIconProps: Dual.args
  },
  showDivider: true,
  showFeaturedIcon: true
};

export const WithoutPaddingBottom = Template.bind({});
WithoutPaddingBottom.args = {
  slots: {
    avatarAndTextProps: {
      title: 'Modal Header',
      subtitle: 'Subtitle'
    }
  },
  paddingBottom: 0
};
