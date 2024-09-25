import type { ComponentMeta, Story } from '@storybook/react';
import type { SwitchProps } from './Switch';
import Switch from './Switch';
import { Box } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Switch',
  component: Switch
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Switch>;

// Basic
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateBasic: Story<{
  switchOne: SwitchProps;
  switchTwo: SwitchProps;
  switchThree: SwitchProps;
  switchFour: SwitchProps;
  switchFive: SwitchProps;
}> = ({ switchOne, switchTwo, switchThree, switchFour, switchFive }) => {
  return (
    <Box>
      <Switch {...switchOne} />
      <Switch {...switchTwo} />
      <Switch {...switchThree} />
      <Switch {...switchFour} />
      <Switch {...switchFive} />
    </Box>
  );
};

export const Basic = TemplateBasic.bind({});
Basic.args = {
  switchOne: { defaultChecked: true },
  switchTwo: {},
  switchThree: { disabled: true },
  switchFour: { disabled: true, defaultChecked: true },
  switchFive: { defaultChecked: true, color: 'default' }
};
