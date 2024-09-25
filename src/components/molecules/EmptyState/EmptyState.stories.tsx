import type { Story, ComponentMeta } from '@storybook/react';
import { Dual } from 'src/components/atoms/FeaturedIcon/FeaturedIcon.stories';
import {
  PlusIcon,
  SearchLgIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { EmptyStateProps } from './EmptyState';
import EmptyState from './EmptyState';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Empty State',
  component: EmptyState
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof EmptyState>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<EmptyStateProps> = (args) => <EmptyState {...args} />;

export const PrimaryIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryIcon.args = {
  alignItems: 'center',
  featuredIconProps: { ...(Dual.args as any), children: <SearchLgIcon /> },
  avatarAndTextProps: {
    title: 'No projects found',
    titleTypography: { sx: { textAlign: 'center' } },
    subtitle:
      'Your search "Landing page design" did not match any projects. Please try again.',
    subtitleTypography: { sx: { textAlign: 'center' } }
  },

  buttonListProps: {
    buttons: [
      {
        label: 'Clear search',
        color: 'secondary',
        variant: 'outlined',
        fullWidth: true
      },
      {
        startIcon: <PlusIcon />,
        label: 'New project',
        color: 'primary',
        variant: 'contained',
        fullWidth: true
      }
    ]
  }
};

export const SecondaryIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryIcon.args = {
  alignItems: 'center',
  featuredIconProps: {
    ...(Dual.args as any),
    children: <SearchLgIcon />,
    color: 'secondary'
  },
  avatarAndTextProps: {
    title: 'No projects found',
    titleTypography: { sx: { textAlign: 'center' } },
    subtitle:
      'Your search "Landing page design" did not match any projects. Please try again.',
    subtitleTypography: { sx: { textAlign: 'center' } }
  },

  buttonListProps: {
    buttons: [
      {
        label: 'Clear search',
        color: 'secondary',
        variant: 'outlined'
      },
      {
        startIcon: <PlusIcon />,
        label: 'New project',
        color: 'primary',
        variant: 'contained'
      }
    ]
  }
};

export const SecondaryLeftJustified = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryLeftJustified.args = {
  featuredIconProps: {
    ...(Dual.args as any),
    children: <SearchLgIcon />,
    color: 'secondary'
  },
  avatarAndTextProps: {
    title: 'No projects found',
    subtitle:
      'Your search "Landing page design" did not match any projects. Please try again.'
  },

  buttonListProps: {
    buttons: [
      {
        label: 'Clear search',
        color: 'secondary',
        variant: 'outlined'
      },
      {
        startIcon: <PlusIcon />,
        label: 'New project',
        color: 'primary',
        variant: 'contained'
      }
    ]
  }
};

export const PrimaryTextOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryTextOnly.args = {
  avatarAndTextProps: {
    title: 'No projects found',
    subtitle:
      'Your search "Landing page design" did not match any projects. Please try again.'
  }
};
