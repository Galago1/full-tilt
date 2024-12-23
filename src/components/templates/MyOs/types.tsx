import { FormikHelpers } from 'formik';
import { MouseEventHandler } from 'react';
import { ButtonGroupProps } from 'src/components/molecules/ButtonGroup/ButtonGroup';
import { InlineFormikProps } from 'src/components/organisms/Scorecard/ScorecardInlineEditCell';
import { WorkSchedule } from './DailyStandupCard';

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
    buttonGroupProps: ButtonGroupProps;
  };
}

export interface Okr {
  id: string;
  title: string;
  quarter: string;
  people: string;
  percentage: number;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
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

export interface Issue {
  id: string;
  status: string;
  priority: string;
  title: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface Idea {
  id: string;
  status: string;
  title: string;
  priority: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface Todo {
  id: string;
  status: string;
  title: string;
  priority: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface Digest {
  id: string;
  date: string;
  title: string;
  readLength: string;
  listenLength: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}
