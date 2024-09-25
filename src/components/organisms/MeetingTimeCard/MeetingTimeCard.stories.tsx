import { ComponentStory } from '@storybook/react';
import MeetingTimeCard, { MeetingTimeCardProps } from './MeetingTimeCard';
import { PlanItem } from '.';
import { useLayoutEffect, useRef } from 'react';

export default {
  title: 'Organisms/MeetingTimeCard',
  component: MeetingTimeCard
};
// prettier-ignore
const planItems: PlanItem[] = [
  { id: '1', name: 'Objectives', duration: '5 sec', value: 5 },
  { id: '2', name: 'Check-In', duration: '3 sec', value: 3 },
  { id: '3', name: 'Review Prior Quarter', duration: '1 sec', value: 1 },
  { id: '4', name: 'Review Prior Year', duration: '1 sec', value: 1 },
  { id: '5', name: '9 Core Competencies Assessment', duration: '3 sec', value: 3 },
  { id: '6', name: 'Strengths, Weaknesses, Opportunities and Threats (SWOT)', duration: '3 sec', value: 3},
  { id: '7', name: 'Vision Review', duration: '3 sec', value: 3 },
  { id: '8', name: 'Conclude', duration: '1 sec', value: 1 }
];

const Template: ComponentStory<typeof MeetingTimeCard> = (args) => (
  <MeetingTimeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  planItems: planItems
} as MeetingTimeCardProps;

const LayoutEffectTemplate: ComponentStory<typeof MeetingTimeCard> = (args) => {
  const ref = useRef<any>();

  const setInitialElapsedTimes = () => {
    ref.current?.getCardData().setElapsedTimes([5, 3, 1, 1, 3, 3, 3, 1]);
  };
  useLayoutEffect(() => {
    setInitialElapsedTimes();
  }, [ref]);

  return <MeetingTimeCard {...args} ref={ref} />;
};
export const SetElapsedTimes = LayoutEffectTemplate.bind({});
SetElapsedTimes.args = {
  planItems: planItems,
  slots: {
    meetingTimePlanListProps: {
      showElapsedTime: false
    }
  }
} as MeetingTimeCardProps;
