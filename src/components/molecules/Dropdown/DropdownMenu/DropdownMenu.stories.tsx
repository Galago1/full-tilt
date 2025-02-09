import { Box, ListItemIcon, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { useLayoutEffect, useRef, useState } from 'react';
import type { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import type { DropdownMenuProps } from './DropdownMenu';
import { DropdownMenu } from './DropdownMenu';
import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown/Dropdown Menu',
  component: DropdownMenu
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownMenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const ref = useRef();
  useLayoutEffect(() => {
    (ref.current as any)?.click();
  }, []);
  return (
    <Box ref={ref} onClick={handleClick}>
      <DropdownMenu {...args} open={!!anchorEl} anchorEl={anchorEl} />
    </Box>
  );
};
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
  } as AvatarAndTextProps,
  dropdownListItems: [divider, menuItem, menuItem, menuItem, divider, menuItem]
};

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  dropdownListItems: []
};

export const WithMenuItemsAndDivider = Template.bind({});
WithMenuItemsAndDivider.args = WithMenuItemsAndDividerArgs;
