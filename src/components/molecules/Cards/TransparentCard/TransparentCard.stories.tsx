import { Theme } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TransparentCardProps } from './TransparentCard';
import TransparentCard from './TransparentCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Cards/Transparent Card',
  component: TransparentCard
} as ComponentMeta<typeof TransparentCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TransparentCardProps> = (args) => (
  <TransparentCard {...args} />
);

export const InlineText = Template.bind({});
InlineText.args = {
  quote:
    '"Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster."',
  ratingProps: { defaultValue: 5, size: 'small', sx: { mb: 2 } },
  title: '$400',
  description: 'Designer, Layers',
  subdescription: 'Web Design Agency',
  cardContentSx: {},
  titleTypographyProps: {
    variant: 'textXlSemibold',
    mr: (theme: Theme) => theme.spacing(1)
  }
};

export const VerticalText = Template.bind({});
VerticalText.args = {
  title: "We've just released a new update!",
  description: 'Check out the all new dashboard view. Pages now load faster.'
};
