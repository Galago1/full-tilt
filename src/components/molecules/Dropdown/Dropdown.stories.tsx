import { ListItemIcon, Typography } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  FaceSmileIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { DropdownProps } from './Dropdown';
import Dropdown from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown',
  component: Dropdown
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Dropdown>;
const menuItem = {
  menuItemProps: {
    sx: { padding: (theme: any) => theme.spacing(1.375, 2) },
    children: (
      <>
        <ListItemIcon>
          <FaceSmileIcon />
        </ListItemIcon>
        <Typography variant="textSmMedium">View Profile</Typography>
      </>
    )
  }
};

const divider = {
  dividerProps: { sx: { mb: (theme: any) => theme.spacing(0.5) } }
};
const WithMenuItemsAndDividerArgs = {
  dropdownListItems: [divider, menuItem, menuItem, menuItem, divider, menuItem]
};
const TwoColWithMenuItemsAndDividerArgs = {
  dropdownListItems: [menuItem, menuItem, menuItem, menuItem]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const ButtonWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonWithIcon.args = {
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />,
    color: 'secondary'
  },
  label: 'Account',

  avatarAndTextProps: {
    avatarProps: {
      children: <> HR</>,
      sx: { width: 40, height: 40 }
    },
    title: 'Olivia Rhye',
    subtitle: 'olivia@rhye.com',
    sx: { padding: (theme: any) => theme.spacing(1.5, 2) },
    titleTypography: { variant: 'textSmSemibold' },
    subtitleTypography: { variant: 'textSmRegular' }
  },
  dropdownListItems: WithMenuItemsAndDividerArgs.dropdownListItems
};

export const ButtonWithIconTwoCol = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonWithIconTwoCol.args = {
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />,
    color: 'secondary'
  },
  label: 'Account',

  gridItemProps: { xs: 12, sm: 12, md: 6 },
  gridContainerProps: { flexDirection: 'row' },
  dropdownListItems: TwoColWithMenuItemsAndDividerArgs.dropdownListItems
};

export const ManuallyOpen = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ManuallyOpen.args = {
  isOpen: true,
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />,
    color: 'secondary'
  },
  label: 'Account',

  avatarAndTextProps: {
    avatarProps: {
      children: <> HR</>,
      sx: { width: 40, height: 40 }
    },
    title: 'Olivia Rhye',
    subtitle: 'olivia@rhye.com',
    sx: { padding: (theme: any) => theme.spacing(1.5, 2) },
    titleTypography: { variant: 'textSmSemibold' },
    subtitleTypography: { variant: 'textSmRegular' }
  },
  dropdownListItems: WithMenuItemsAndDividerArgs.dropdownListItems
};
export const ButtonFullWidthIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonFullWidthIcon.args = {
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />,
    color: 'secondary',
    sx: {
      padding: (theme) => theme.spacing(1.125, 1.25, 1.125, 1)
    }
  },
  label: (
    <Typography
      component={'span'}
      variant={'textMdRegular'}
      sx={{
        minWidth: 264,
        textAlign: 'left',
        padding: 0,
        lineHeight: '1.1875rem'
      }}
    >
      Account
    </Typography>
  ),

  dropdownMenuProps: {
    onClick: () => {}
  },
  dropdownListItems: WithMenuItemsAndDividerArgs.dropdownListItems
};

export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {
  iconButtonProps: {
    size: 'small'
  },
  label: <DotsVerticalIcon />,

  avatarAndTextProps: {
    avatarProps: {
      children: <> HR</>,
      sx: { width: 40, height: 40 }
    },
    title: 'Olivia Rhye',
    subtitle: 'olivia@rhye.com',
    sx: { padding: (theme: any) => theme.spacing(1.5, 2) },
    titleTypography: { variant: 'textSmSemibold' },
    subtitleTypography: { variant: 'textSmRegular' }
  },
  dropdownListItems: WithMenuItemsAndDividerArgs.dropdownListItems
};

export const IconButtonWithAvatar = Template.bind({});
IconButtonWithAvatar.args = {
  iconButtonProps: {
    size: 'small'
  },
  label: (
    <Avatar>
      <>HR</>
    </Avatar>
  ),

  avatarAndTextProps: {
    avatarProps: {
      children: <> HR</>,
      sx: { width: 40, height: 40 }
    },
    title: 'Olivia Rhye',
    subtitle: 'olivia@rhye.com',
    sx: { padding: (theme: any) => theme.spacing(1.5, 2) },
    titleTypography: { variant: 'textSmSemibold' },
    subtitleTypography: { variant: 'textSmRegular' }
  },
  dropdownListItems: WithMenuItemsAndDividerArgs.dropdownListItems
};