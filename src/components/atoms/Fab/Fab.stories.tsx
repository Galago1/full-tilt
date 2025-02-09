import type { ComponentMeta, Story } from '@storybook/react';
import { User01Icon } from 'src/components/particles/theme/icons/Users/user-01';
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
  children: <User01Icon />,
  color: 'default'
};

export const FabBaseIconLabel = Template.bind({});
FabBaseIconLabel.args = {
  children: (
    <>
      <User01Icon />
      Disabled
    </>
  ),
  variant: 'extended',
  disabled: true
};

export const FabSize = Template.bind({});
FabSize.args = {
  children: <User01Icon />,
  color: 'info',
  size: 'large'
};

export const FabSizeSmallExtended = Template.bind({});
FabSizeSmallExtended.args = {
  children: (
    <>
      <User01Icon />
      Wake up
    </>
  ),
  color: 'info',
  size: 'large',
  variant: 'extended'
};

export const FabColors = Template.bind({});
FabColors.args = {
  children: <User01Icon />,
  color: 'warning'
};

export const FabColorsExtended = Template.bind({});
FabColorsExtended.args = {
  variant: 'extended',
  children: (
    <>
      <User01Icon />
      Wake up
    </>
  ),
  color: 'warning'
};
