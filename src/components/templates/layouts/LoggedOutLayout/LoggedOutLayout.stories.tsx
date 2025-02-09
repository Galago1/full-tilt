import { Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import image from 'src/assets/images/testbg.png';
import { Menu01Icon } from 'src/components/particles/theme/icons/General/menu-01';
import {
  GalagoFullIcon,
  GalagoLogoIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { LoggedOutListItems } from 'src/utils/users/menu';
import type { LoggedOutLayoutProps } from './LoggedOutLayout';
import LoggedOutLayout from './LoggedOutLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Layouts/Logged Out Layout',
  component: LoggedOutLayout,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LoggedOutLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoggedOutLayoutProps> = (args) => {
  return <LoggedOutLayout {...args} />;
};

export const LoggedOutLayoutTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedOutLayoutTemplate.args = {
  image,
  topNavProps: {
    showDivider: true,
    largeToolbar: true,
    sx: { position: { xs: 'fixed', sm: 'fixed', md: 'relative' } },
    logo: (
      <GalagoFullIcon
        viewBox="0 0 145 32"
        sx={{
          '&.MuiSvgIcon-root': { width: 145, height: 38, pt: 0.625 }
        }}
      />
    )
  }
};
export const LoggedOutLayoutMobileTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedOutLayoutMobileTemplate.args = {
  image,
  topNavProps: {
    showDivider: true,
    largeToolbar: true,
    sx: { position: { xs: 'fixed', sm: 'fixed', md: 'relative' } },
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
      label: <Menu01Icon />,
      dropdownListItems: [
        ...LoggedOutListItems({
          login: () => {},
          signup: () => {}
        })
      ]
    }
  }
};
