import { GridProps, SxProps, Theme } from '@mui/material';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { KanbanColumnProps } from './KanbanColumn';

export interface KanbanColumnCard {
  id?: string;
  status?: string;
  title?: string;
  estimate?: number;
  description?: string | JSX.Element;
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
  headerActionsAvatarAndTextProps?: AvatarAndTextProps;
  bodyAvatarAndTextProps?: AvatarAndTextProps;
  sx?: SxProps<Theme>;
  footerComponentGridProps?: GridProps;
  footerComponent?: JSX.Element;
}
export interface IndividualKanbanColumn {
  id: string;
  title: string;
  includeHeaderChip?: boolean;
  titleColor: string;
  cards: KanbanColumnCard[];
  showDragOrAdd: boolean;
  showDragOrAddText?: string;
  columnGridItemProps?: GridProps;
  headerContainerGridItemProps?: GridProps;
  headerAvatarAndTextProps?: AvatarAndTextProps;
  headerEndComp?: React.ReactNode;
  showDot?: boolean;
  kanbanColumnProps?: KanbanColumnProps;
  initialNoun: string;
  subsequentNoun: string;
  /**
   * Optional: Defines custom count/sum modes for the column header chip.
   * If not provided, defaults to count and sum of 'estimate'.
   */
  countModes?: Array<{
    /** Field in KanbanColumnCard to sum or count */
    field: string;
    /** Label or tooltip for the mode */
    label: string;
    /** Icon for the mode (ReactNode or component) */
    icon: React.ReactNode;
    /** Whether to sum the field or count cards */
    type: 'count' | 'sum';
    /** Noun for tooltip */
    noun: string;
  }>;
}
