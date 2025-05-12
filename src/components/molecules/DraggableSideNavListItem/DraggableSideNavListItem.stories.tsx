import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import DraggableSideNavListItem, {
  DraggableSideNavListItemProps
} from './DraggableSideNavListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Drawer/Draggable Side Nav List Item',
  component: DraggableSideNavListItem
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DraggableSideNavListItem>;

const Template: Story<DraggableSideNavListItemProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <DraggableSideNavListItem {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {};
