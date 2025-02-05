import type { ComponentMeta, Story } from '@storybook/react';
import type { ScorecardsCardProps } from './ScorecardsCard';
import ScorecardsCard from './ScorecardsCard';
import ThemeProvider from 'src/components/particles/theme';
import { scorecardsCardProps } from '../helpers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/MyOs/ScorecardsCard',
  component: ScorecardsCard,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ScorecardsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ScorecardsCardProps> = (args) => {
  return (
    <ThemeProvider>
      <ScorecardsCard {...args} />
    </ThemeProvider>
  );
};

export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {};

export const Daily = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Daily.args = {
  ...scorecardsCardProps
  // scorecardsContentProps: ScorecardsContentProps[];
  // loading?: boolean;
  // onClickEmptyState?: () => void;
  // emptyStateSubtitle?: any;
};
