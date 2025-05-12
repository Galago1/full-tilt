import { Theme } from '@mui/material';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import type { ComponentMeta, Story } from '@storybook/react';
import Button from 'src/components/atoms/Button/Button';
import Breadcrumbs from 'src/components/molecules/Breadcrumbs/Breadcrumbs';
import { IconButtonWithAvatar } from 'src/components/molecules/Dropdown/DropdownAnchor/DropdownAnchor.stories';
import { Bell01Icon } from 'src/components/particles/theme/icons/AlertsAndFeedback/bell-01';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { Settings01Icon } from 'src/components/particles/theme/icons/General/settings-01';
import { GalagoFullIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { TopNavProps } from './TopNav';
import TopNav from './TopNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Top Nav',
  component: TopNav
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TopNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TopNavProps> = (args) => <TopNav {...args} />;

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  logo: (
    <GalagoFullIcon
      // Use overflow="visible" + chrome tools to get the viewbox dimentions
      // svg widthXheight need to roughly match the viewbox dimentions

      viewBox="0 0 160 48"
      sx={{
        '&.MuiSvgIcon-root': { width: 160, height: 48 }
      }}
    />
  ),
  buttonListProps: {
    buttons: [
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Settings01Icon />
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Bell01Icon />
      }
    ]
  },
  dropdownProps: { ...(IconButtonWithAvatar.args as any) }
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  logo: (
    <GalagoFullIcon
      // Use overflow="visible" + chrome tools to get the viewbox dimentions
      // svg widthXheight need to roughly match the viewbox dimentions
      viewBox="0 0 160 48"
      sx={{
        '&.MuiSvgIcon-root': { width: 160, height: 48 }
      }}
      // overflow="visible"
    />
  ),
  buttonListProps: {
    buttons: [
      {
        label: 'Upgrade Now',
        color: 'secondary',
        variant: 'outlined',
        startIcon: <Settings01Icon />,
        sx: { mr: (theme: Theme) => theme.spacing(1.5) }
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Settings01Icon />
      },
      {
        label: '',
        color: 'secondary',
        endIcon: <Bell01Icon />
      }
    ],
    buttonSpacing: 0.5
  },
  dropdownProps: { ...(IconButtonWithAvatar.args as any) }
};

export const Loggedout = Template.bind({});
Loggedout.args = {
  logo: (
    <GalagoFullIcon
      // Use overflow="visible" + chrome tools to get the viewbox dimentions
      // svg widthXheight need to roughly match the viewbox dimentions
      viewBox="0 0 160 48"
      sx={{
        '&.MuiSvgIcon-root': { width: 160, height: 48 }
      }}
    />
  ),
  buttonListProps: {
    buttons: [
      {
        label: 'Login',
        color: 'secondary',
        variant: 'text'
      },
      {
        label: 'Signup',
        color: 'primary',
        variant: 'contained'
      }
    ],
    buttonSpacing: 0.5
  }
};

export const LeftBreadCrumbs = Template.bind({});
LeftBreadCrumbs.args = {
  avatarAndTextProps: {
    sx: {
      my: 'auto'
    },
    title: (
      <Breadcrumbs
        breadcrumbs={[
          {
            label: '',
            href: 'storePage',
            children: (
              <Button
                startIcon={<ArrowLeftIcon />}
                variant="outlined"
                size={'small'}
              />
            )
          },
          { label: 'Main' }
        ]}
        separator={<ChevronRightIcon color={'secondary'} />}
      />
    )
  },
  buttonListProps: {
    buttons: [
      {
        label: 'Button CTA',
        color: 'secondary',
        variant: 'text'
      },
      {
        label: 'Button CTA',
        color: 'secondary',
        variant: 'outlined'
      },
      {
        label: 'Add New',
        color: 'primary',
        variant: 'contained'
      }
    ],
    buttonSpacing: 2
  }
};

export const IndividualBreadCrumb = Template.bind({});
IndividualBreadCrumb.args = {
  avatarAndTextProps: {
    sx: {
      my: 'auto'
    },
    title: (
      <Breadcrumbs
        breadcrumbs={[{ label: 'Main' }]}
        separator={<ChevronRightIcon color={'secondary'} />}
      />
    )
  },
  buttonListProps: {
    buttons: [
      {
        label: 'Button CTA',
        color: 'secondary',
        variant: 'text'
      },
      {
        label: 'Button CTA',
        color: 'secondary',
        variant: 'outlined'
      },
      {
        label: 'Add New',
        color: 'primary',
        variant: 'contained'
      }
    ],
    buttonSpacing: 2
  }
};
