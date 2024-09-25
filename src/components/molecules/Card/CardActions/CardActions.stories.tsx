import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import CardActions, { CardActionsProps } from './CardActions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Card/Card Actions',
  component: CardActions
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardActions>;

const Template: Story<CardActionsProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <CardActions {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {};

export const ShowDivider = Template.bind({});
ShowDivider.args = {
  showDivider: true
};

export const ShowDividerWithSpace = Template.bind({});
ShowDividerWithSpace.args = {
  showDivider: true,
  slots: {
    dividerProps: {
      sx: { mt: 2, mb: 2 }
    }
  }
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
