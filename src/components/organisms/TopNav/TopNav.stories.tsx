import { Theme } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import { IconButtonWithAvatar } from 'src/components/molecules/Dropdown/Dropdown.stories';
import {
  BellIcon,
  SettingsIcon,
  CatalogFullIcon,
  ChevronRightIcon,
  ArrowLeftIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { TopNavProps } from './TopNav';
import TopNav from './TopNav';
import Breadcrumbs from 'src/components/molecules/Breadcrumbs/Breadcrumbs';
import Button from 'src/components/atoms/Button/Button';

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
    <CatalogFullIcon
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
        endIcon: <SettingsIcon />
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <BellIcon />
      }
    ]
  },
  dropdownProps: { ...(IconButtonWithAvatar.args as any) }
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  logo: (
    <CatalogFullIcon
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
        startIcon: <SettingsIcon />,
        sx: { mr: (theme: Theme) => theme.spacing(1.5) }
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <SettingsIcon />
      },
      {
        label: '',
        color: 'secondary',
        endIcon: <BellIcon />
      }
    ],
    buttonSpacing: 0.5
  },
  dropdownProps: { ...(IconButtonWithAvatar.args as any) }
};

export const Loggedout = Template.bind({});
Loggedout.args = {
  logo: (
    <CatalogFullIcon
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