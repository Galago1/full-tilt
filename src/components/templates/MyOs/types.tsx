import { MouseEventHandler } from 'react';

export interface TeamMember {
  imageUrl: string;
}

export interface Standup {
  name: string;
  members: TeamMember[];
  streak: string;
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
}

export interface Todo {
  status: 'todo' | 'completed';
  title: string;
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
}

export interface Feedback {
  id: string;
  status: string;
  priority: string;
  title: string;
  icon: JSX.Element;
}

export interface Idea {
  id: string;
  status: string;
  title: string;
  priority: string;
  icon: JSX.Element;
}

export interface Story {
  id: string;
  date: string;
  title: string;
  readLength: string;
  listenLength: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}