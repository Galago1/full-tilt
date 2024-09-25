export { default } from './MeetingTimeCard';
export interface PlanItem {
  id: string;
  /**
   * The name of the plan item
   */
  name: string;
  /**
   * The display duration of the plan item
   */
  duration: string;
  /**
   * The duration of the plan item (in seconds)
   */
  value: number;
}

export type MeetingDurationItem = {
  [agendaItemId: string]: number;
};
