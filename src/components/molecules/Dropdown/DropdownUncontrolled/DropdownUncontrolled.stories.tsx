import { ListItemIcon, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { DotsVerticalIcon } from 'src/components/particles/theme/icons/General/dots-vertical';
import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';
import DropdownUncontrolled, {
  DropdownUncontrolledProps
} from './DropdownUncontrolled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown/Dropdown Uncontrolled',
  component: DropdownUncontrolled
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownUncontrolled>;
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
  DropdownUncontrolledListItems: [
    divider,
    menuItem,
    menuItem,
    menuItem,
    divider,
    menuItem
  ]
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownUncontrolledProps> = (args) => (
  <DropdownUncontrolled {...args} />
);

export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {
  open: false,
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
  dropdownListItems: WithMenuItemsAndDividerArgs.DropdownUncontrolledListItems
};
