import { Grid } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import DropdownSideNavListItem from './DropdownSideNavListItem';

const meta = {
  title: 'Molecules/DropdownSideNavListItem',
  component: DropdownSideNavListItem,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <Grid container sx={{ width: '320px' }}>
        <Story />
      </Grid>
    )
  ]
} satisfies Meta<typeof DropdownSideNavListItem>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
  }
};

