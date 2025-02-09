import type { ComponentMeta, Story } from '@storybook/react';
import { CheckCircleIcon } from 'src/components/particles/theme/icons/General/check-circle';
import type { FeaturedIconProps } from './FeaturedIcon';
import FeaturedIcon from './FeaturedIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon/Featured Icon',
  component: FeaturedIcon
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FeaturedIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FeaturedIconProps> = (args) => <FeaturedIcon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <CheckCircleIcon />
};

export const Dual = Template.bind({});
Dual.args = {
  color: 'primary',
  dual: true,
  children: <CheckCircleIcon />
};

export const XSmall = Template.bind({});
XSmall.args = {
  color: 'warning',
  size: 'xs',
  children: <CheckCircleIcon />
};

export const Small = Template.bind({});
Small.args = {
  color: 'warning',
  size: 'sm',
  children: <CheckCircleIcon />
};

export const Medium = Template.bind({});
Medium.args = {
  color: 'warning',
  size: 'md',
  children: <CheckCircleIcon />
};

export const Large = Template.bind({});
Large.args = {
  color: 'warning',
  size: 'lg',
  children: <CheckCircleIcon />
};

export const XLarge = Template.bind({});
XLarge.args = {
  color: 'warning',
  size: 'xl',
  children: <CheckCircleIcon />
};
