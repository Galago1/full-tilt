import type { ComponentMeta, Story } from '@storybook/react';
import type { LoggedOutLayoutColumnProps } from './LoggedOutLayoutColumn';
import LoggedOutLayoutColumn from './LoggedOutLayoutColumn';
import {
  GalagoFullIcon,
  GalagoLogoIcon,
  MenuIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { Theme } from '@mui/material';
import { LoggedOutListItems } from 'src/utils/users/menu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Layouts/Logged Out Layout Column',
  component: LoggedOutLayoutColumn,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LoggedOutLayoutColumn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoggedOutLayoutColumnProps> = (args) => {
  return <LoggedOutLayoutColumn {...args} />;
};

export const LoggedOutLayoutColumnTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedOutLayoutColumnTemplate.args = {
  topNavProps: {
    showDivider: true,
    largeToolbar: true,
    logo: (
      <GalagoLogoIcon
        viewBox="0 0 32 32"
        sx={{
          '&.MuiSvgIcon-root': {
            width: (theme: Theme) => theme.spacing(4),
            height: (theme: Theme) => theme.spacing(4),
            '& svg': { width: '100%', height: '100%' }
          }
        }}
      />
    ),

    dropdownProps: {
      iconButtonProps: {
        size: 'small'
      },
      label: <MenuIcon />,
      dropdownListItems: [
        ...LoggedOutListItems({
          login: () => {},
          signup: () => {}
        })
      ]
    }
  }
};

export const LoggedOutLayoutColumnFullTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedOutLayoutColumnFullTemplate.args = {
  topNavProps: {
    showDivider: true,
    largeToolbar: true,
    logo: (
      <GalagoFullIcon
        viewBox="0 0 145 32"
        sx={{
          '&.MuiSvgIcon-root': { width: 145, height: 38, pt: 0.625 }
        }}
      />
    ),

    buttonListProps: {
      buttons: [
        {
          label: 'Login',
          color: 'secondary',
          variant: 'text',
          onClick: () => {}
        },
        {
          label: 'Signup',
          color: 'primary',
          variant: 'contained',
          onClick: () => {}
        }
      ],
      buttonSpacing: 0.5
    },
    dropdownProps: {
      iconButtonProps: {
        size: 'small'
      },
      label: <MenuIcon />,
      dropdownListItems: [
        ...LoggedOutListItems({
          login: () => {},
          signup: () => {}
        })
      ]
    }
  }
};
