import { FormikHelpers } from 'formik';
import { MouseEventHandler } from 'react';
import { DateNavigatorInputProps } from 'src/components/molecules/Inputs/DateNavigatorInput/DateNavigatorInput';
import { InlineFormikProps } from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import { WorkSchedule } from './DailyStandupCard';
import { RockStatus } from './RocksCard/RockStatusForm/RockStatusForm';

export interface TeamMember {
  imageUrl: string;
}

export interface Standup {
  name: string;
  members: TeamMember[];
  streak: string;
  totalMembers: number;
  workingSchedule: WorkSchedule;
}

export interface Survey {
  id: string;
  name: string;
  readLength: string;
  questions: number;
  due: string;
  dueValue: number;
  contributors: number;
  contributed: number;
  completed: boolean;
  nextSurveyTitle: string;
  nextSurveySubtitle: string;
}

export interface Scorecard {
  id: string;
  title: string;
  goal: string;
  value: number;
  date: string;
  measurableMetricId: string;
  backgroundColor: string;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void
  ) => Promise<void>;
  slots: {
    dateNavigatorInputProps: DateNavigatorInputProps;
  };
}

export interface Okr {
  id: string;
  title: string;
  quarter: string;
  okrType: string;
  // people: string;
  percentage: number;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface Rock {
  id: string;
  title: string;
  quarter: string;
  rockType: string;
  // people: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  onChangeRockStatus: (values: { id: string; newValue: RockStatus }) => void;
  rockStatus: RockStatus;
}

export interface Meeting {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  team: string;
  avatars: { url: string }[];
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

interface SharedList {
  id: string;
  status: string;
  type?: string;
  priority?: string;
  title: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface Issue extends SharedList {}

export interface Idea extends SharedList {}

export interface Todo extends SharedList {}

export interface Headline extends SharedList {}

export interface Digest {
  id: string;
  date: string;
  title: string;
  readLength: string;
  listenLength: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}
