import { IconButton } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import {
  MenuIcon,
  PlusIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { TableToolbarProps } from './TableToolbar';
import TableToolbar from './TableToolbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Toolbar',
  component: TableToolbar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TableToolbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableToolbarProps> = (args) => <TableToolbar {...args} />;

export const DefaultTableToolbar = Template.bind({});
DefaultTableToolbar.args = {
  sx: { pl: 0 },
  avatarAndTextProps: {
    title: 'Nutrition',
    titleTypography: {
      sx: { flex: '1 1 100%' },
      variant: 'displayXsRegular'
    }
  },
  tooltipProps: {
    title: 'Filter List',
    children: (
      <IconButton>
        <MenuIcon />
      </IconButton>
    )
  }
};
export const ButtonTableToolbar = Template.bind({});
ButtonTableToolbar.args = {
  sx: { pl: 0 },
  avatarAndTextProps: {
    title: 'Nutrition',
    titleTypography: {
      sx: { flex: '1 1 100%' },
      variant: 'displayXsRegular'
    }
  },
  buttonListProps: {
    justifyContent: 'flex-end',
    buttons: [
      {
        label: 'Add item',
        startIcon: <PlusIcon />
      }
    ]
  }
};
