import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import ModalActions, { ModalActionsProps } from './ModalActions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Modal/Modal Actions',
  component: ModalActions
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ModalActions>;

const Template: Story<ModalActionsProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <ModalActions {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {};

export const ShowDivider = Template.bind({});
ShowDivider.args = {
  showDivider: true
};

export const HideButtons = Template.bind({});
HideButtons.args = {
  slots: {
    actionsProps: {
      hideButtons: true
    }
  }
};
export const DestructiveButtons = Template.bind({});
DestructiveButtons.args = {
  slots: {
    actionsProps: {
      destructiveButton: true
    }
  }
};
