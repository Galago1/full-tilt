import type { Story, ComponentMeta } from '@storybook/react';
import type { LinkProps } from './Link';
import Link from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Link',
  component: Link
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'inherit',
  color: 'primary',
  children: 'Link',
  target: '_blank'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'inherit',
  color: 'secondary',
  children: 'Link'
};

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  color: 'error',
  children: 'Link'
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  color: 'error',
  variant: 'textXlSemibold',
  children: 'Link'
};

export const Basic = Template.bind({});
Basic.args = {
  href: '#',
  children: 'Link'
};

export const colorInherit = Template.bind({});
colorInherit.args = {
  href: '#',
  children: 'color="inherit"',
  color: 'inherit'
};

export const Body2 = Template.bind({});
Body2.args = {
  href: '#',
  children: 'variant="textSmMedium"',
  variant: 'textSmRegular'
};

export const UnderLineHover = Template.bind({});
UnderLineHover.args = {
  href: '#',
  children: 'underline="hover"',
  underline: 'hover'
};

export const UnderLineAlways = Template.bind({});
UnderLineAlways.args = {
  href: '#',
  children: 'underline="always"',
  underline: 'always'
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  component: 'button',
  children: 'Button Link',
  variant: 'textSmRegular',
  onClick: () => {}
};
