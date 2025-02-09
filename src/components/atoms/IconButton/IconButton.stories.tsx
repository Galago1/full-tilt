import type { IconButtonProps } from '@mui/material';
import { IconButton } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button/IconButton',
  component: IconButton
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <PlusIcon />
  </IconButton>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Small = Template.bind({});
Small.args = {
  color: 'warning',
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'warning',
  size: 'small',
  disabled: true
};
