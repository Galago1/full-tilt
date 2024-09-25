import { SvgIcon } from '@mui/material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckCircleIcon } from 'src/components/particles/theme/overrides/CustomIcons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: SvgIcon
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SvgIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <CheckCircleIcon {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
  fontSize: 'large'
};

export const Small = Template.bind({});
Small.args = {
  color: 'warning',
  fontSize: 'small'
};
