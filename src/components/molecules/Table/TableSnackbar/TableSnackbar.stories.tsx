import type { ComponentMeta, Story } from '@storybook/react';
import type { TableSnackbarProps } from './TableSnackbar';
import TableSnackbar from './TableSnackbar';
import { alpha } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Snackbar',
  component: TableSnackbar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TableSnackbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableSnackbarProps> = (args) => (
  <TableSnackbar {...args} />
);

export const DefaultTableSnackbar = Template.bind({});
DefaultTableSnackbar.args = {
  sx: {
    minHeight: 'auto',
    p: 2
  },
  paperSx: {
    display: 'inline-block',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.8),
    bottom: '3rem'
  },
  typographyProps: {
    color: 'white',
    variant: 'textSmMedium',
    children: '1 selected'
  },
  buttonListProps: {
    buttons: [
      {
        label: 'Generate Invoice(s)',
        variant: 'contained',
        color: 'primary'
      }
    ]
  }
};
