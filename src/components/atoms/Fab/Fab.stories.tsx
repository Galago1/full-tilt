import type { ComponentMeta, Story } from '@storybook/react';
import { UserIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { FabProps } from './Fab';
import Fab from './Fab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Fab',
  component: Fab
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Fab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FabProps> = (args) => (
  <Fab {...args}>{args.children}</Fab>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: 'basic'
};

export const FabBaseIcon = Template.bind({});
FabBaseIcon.args = {
  children: <UserIcon />,
  color: 'default'
};

export const FabBaseIconLabel = Template.bind({});
FabBaseIconLabel.args = {
  children: (
    <>
      <UserIcon />
      Disabled
    </>
  ),
  variant: 'extended',
  disabled: true
};

export const FabSize = Template.bind({});
FabSize.args = {
  children: <UserIcon />,
  color: 'info',
  size: 'large'
};

export const FabSizeSmallExtended = Template.bind({});
FabSizeSmallExtended.args = {
  children: (
    <>
      <UserIcon />
      Wake up
    </>
  ),
  color: 'info',
  size: 'large',
  variant: 'extended'
};

export const FabColors = Template.bind({});
FabColors.args = {
  children: <UserIcon />,
  color: 'warning'
};

export const FabColorsExtended = Template.bind({});
FabColorsExtended.args = {
  variant: 'extended',
  children: (
    <>
      <UserIcon />
      Wake up
    </>
  ),
  color: 'warning'
};
