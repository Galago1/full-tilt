import { GridProps, SxProps, Theme } from '@mui/material';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { KanbanColumnProps } from './KanbanColumn';

export interface KanbanColumnCard {
  id?: string;
  status?: string;
  title?: string;
  description?: string;
  type?: string;
  sortBy?: string;
  summary?: string;
  assignee?: string;
  priority?: string;
  dueDate?: Date;
  actionTimeline?: string;
  updated?: string;
  created?: string;
  team?: string;
  imageUrl?: string;
  memberId?: string;
  footerGridProps?: GridProps;
  footerAvatarAndTextProps?: AvatarAndTextProps;
  bodyAvatarAndTextProps?: AvatarAndTextProps;
  sx?: SxProps<Theme>;
}
export interface IndividualKanbanColumn {
  id: string;
  title: string;
  titleColor: string;
  cards: KanbanColumnCard[];
  showDragOrAdd: boolean;
  showDragOrAddText?: string;
  headerContainerGridItemProps?: GridProps;
  headerAvatarAndTextProps?: AvatarAndTextProps;
  headerEndComp?: React.ReactNode;
  showDot?: boolean;
  kanbanColumnProps?: KanbanColumnProps;
}
