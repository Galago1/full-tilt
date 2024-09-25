import { ListItemIcon, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import {
  DotsVerticalIcon,
  FaceSmileIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import DropdownCard, { DropdownCardProps } from './DropdownCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown Uncontrolled',
  component: DropdownCard
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownCard>;
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
  DropdownCardListItems: [
    divider,
    menuItem,
    menuItem,
    menuItem,
    divider,
    menuItem
  ]
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownCardProps> = (args) => <DropdownCard {...args} />;

export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {};
