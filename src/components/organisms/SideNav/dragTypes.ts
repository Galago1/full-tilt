import { ListItemTextProps } from '@mui/material';

export const DRAG_TYPE = {
  SECTION: 'DRAGGABLE_SECTION',
  ITEM: 'DRAGGABLE_ITEM',
  GROUP: 'DRAGGABLE_GROUP'
} as const;

export type DragTypeKey = keyof typeof DRAG_TYPE;
export type DragTypeValue = typeof DRAG_TYPE[DragTypeKey];

export enum DragItemType {
  SECTION = 'SECTION',
  ITEM = 'ITEM',
  GROUP = 'GROUP'
}

// Base interface for all drag items
export interface DragItem {
  id: string;
  type: DragItemType;
  index: number;
  sectionIndex?: number;
  groupId?: string;
}

// Specific interfaces for different drag item types
export interface DragGroupItem extends DragItem {
  type: DragItemType.GROUP;
  title?: string;
}

export interface DragSectionItem extends DragItem {
  type: DragItemType.SECTION;
  listItemTextProps?: ListItemTextProps;
}

export interface DragItemItem extends DragItem {
  type: DragItemType.ITEM;
  groupId: string;
  listItemTextProps?: ListItemTextProps;
}
