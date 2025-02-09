import { ListItemIcon, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';
import type { DropdownListProps } from './DropdownList';
import { DropdownList } from './DropdownList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown/Dropdown List',
  component: DropdownList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownListProps> = (args) => <DropdownList {...args} />;
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

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  dropdownListItems: []
};

export const WithMenuItemsAndDivider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMenuItemsAndDivider.args = WithMenuItemsAndDividerArgs;
