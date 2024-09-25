import type { ComponentMeta, Story } from '@storybook/react';
import type { LoggedInLayoutProps } from './LoggedInLayout';
import LoggedInLayout from './LoggedInLayout';
import {
  GalagoLogoIcon,
  ChevronLeftIcon,
  GalagoFullIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { Theme } from '@mui/material';
import Button from 'src/components/atoms/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Layouts/Logged In Layout',
  component: LoggedInLayout,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LoggedInLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoggedInLayoutProps> = (args) => {
  return <LoggedInLayout {...args} />;
};

export const LoggedInLayoutTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedInLayoutTemplate.args = {
  topNavProps: {
    sx: {
      '& .MuiToolbar-root': {
        px: { xs: 0, sm: 0, md: 1 }
      }
    },
    showDivider: true,
    // buttonListProps={buttonListProps || { buttons: [] }}
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
    )
  }
};
export const LoggedInLayoutAsUser = Template.bind({});
LoggedInLayoutAsUser.args = {
  topNavProps: {
    sx: {
      '& .MuiToolbar-root': {
        px: { xs: 0, sm: 0, md: 1 }
      }
    },
    showDivider: true,
    // buttonListProps={buttonListProps || { buttons: [] }}
    logo: (
      <Button
        startIcon={<ChevronLeftIcon />}
        label={'Revert admin'}
        onClick={() => {}}
      />
    )
  }
};
export const LoggedInLayoutFullLogo = Template.bind({});
LoggedInLayoutFullLogo.args = {
  topNavProps: {
    sx: {
      '& .MuiToolbar-root': {
        px: { xs: 0, sm: 0, md: 1 }
      }
    },
    showDivider: true,
    // buttonListProps={buttonListProps || { buttons: [] }}
    logo: (
      <GalagoFullIcon
        viewBox="0 0 145 38"
        sx={{
          '&.MuiSvgIcon-root': { width: 145, height: 38, pt: 0.625 }
        }}
      />
    )
  }
};
