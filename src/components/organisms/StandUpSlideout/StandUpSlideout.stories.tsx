import { ComponentMeta, Story } from '@storybook/react';
import StandUpSlideout, { StandUpSlideoutProps } from './StandUpSlideout';
import { ThemeProvider } from 'src/components/particles';

export default {
  title: 'Templates/StandUpSlideout',
  component: StandUpSlideout
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof StandUpSlideout>;

const Template: Story<StandUpSlideoutProps> = (args) => {
  return (
    <ThemeProvider>
      <StandUpSlideout {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  // date: '04/20/2022',
  date: new Date('2022-04-20'),
  slots: {
    standUpSlideoutContentProps: {
      slots: {
        alignedOnTrackFieldAttributes: {
          name: 'alignedOnTrack',
          label: 'Aligned On Track',
          type: 'checkbox'
        },
        metGoalsFieldAttributes: {
          name: 'metGoals',
          label: 'Met Goals',
          type: 'checkbox'
        },
        haveBlockersFieldAttributes: {
          name: 'haveBlockers',
          label: 'Have Blockers',
          type: 'checkbox'
        },
        plannedWorkFieldAttributes: {
          name: 'plannedWork',
          label: 'Planned Work',
          type: 'checkbox'
        },
        haveQuestionsFieldAttributes: {
          name: 'haveQuestions',
          label: 'Have Questions',
          type: 'checkbox'
        },
        blockersFieldAttributes: {
          name: 'blockers',
          label: 'Blockers',
          type: 'checkbox'
        }
      }
    }
  }
};
