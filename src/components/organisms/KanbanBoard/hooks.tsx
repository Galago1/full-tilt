import { Theme, useTheme } from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from 'react';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { KanbanData } from './KanbanBoard';
import { KanbanListType } from './KanbanDndContent';
import { IndividualKanbanColumn, KanbanColumnCard } from './types';

export const useKanbanColumns = (
  ogColumns: IndividualKanbanColumn[],
  propsMoveCard?: (
    sourceColumnId: string,
    sourceCardIndex: number,
    destColumnId: string,
    destCardIndex?: number
  ) => void,
  propsMoveColumn?: (dragIndex: number, hoverIndex: number) => void,
  disableMoveColumn?: boolean
) => {
  const [columns, setColumns] = useState(ogColumns);
  const moveCard = (
    sourceColumnId: string,
    sourceCardIndex: number,
    destColumnId: string,
    destCardIndex?: number
  ) => {
    if (sourceColumnId === destColumnId && sourceCardIndex === destCardIndex)
      return;

    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find(
        (column) => column.id === sourceColumnId
      );
      const destColumn = newColumns.find(
        (column) => column.id === destColumnId
      );
      if (!sourceColumn || !destColumn) return prevColumns;
      const [removed] = sourceColumn.cards.splice(sourceCardIndex, 1);

      if (sourceColumnId === destColumnId) {
        destColumn.cards.splice(destCardIndex!, 0, removed);
      } else {
        destColumn.cards.splice(
          destCardIndex === undefined ? destColumn.cards.length : destCardIndex,
          0,
          removed
        );
      }
      return newColumns;
    });
  };

  const moveColumn = (dragIndex: number, hoverIndex: number) => {
    if (disableMoveColumn) return;
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const [removed] = newColumns.splice(dragIndex, 1);
      newColumns.splice(hoverIndex, 0, removed);
      return newColumns;
    });
  };
  return {
    columns: propsMoveCard || propsMoveColumn ? ogColumns : columns,
    moveCard: propsMoveCard || moveCard,
    moveColumn: propsMoveColumn || moveColumn
  };
};

export const useKanbanView = (
  initialView: KanbanListType,
  controlledView?: KanbanListType,
  controlledHandleViewChange?: Dispatch<SetStateAction<KanbanListType>>
) => {
  const [view, setView] = useState<KanbanListType>(initialView);

  const handleViewChange = (view: KanbanListType) => {
    setView(view);
  };

  return {
    view: controlledView ?? view,
    handleViewChange: controlledHandleViewChange ?? handleViewChange
  };
};

export const useKanbanActions = (
  propIsDrawerOpen?: boolean,
  propSetDrawerOpen?: (open: boolean) => void,
  propIsEditDrawerOpen?: boolean,
  propSetEditDrawerOpen?: (open: boolean) => void,
  propToggleDrawer?: () => void,
  propToggleEditDrawer?: (card: any) => void
) => {
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [isDrawerOpen, setDrawerOpenState] = useState(false);
  const [isEditDrawerOpen, setEditDrawerOpenState] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const setDrawerOpen = propSetDrawerOpen ?? setDrawerOpenState;
  const setEditDrawerOpen = propSetEditDrawerOpen ?? setEditDrawerOpenState;
  const toggleDrawer = propToggleDrawer ?? (() => setDrawerOpen(!isDrawerOpen));
  const toggleEditDrawer =
    propToggleEditDrawer ?? (() => setEditDrawerOpen(!isEditDrawerOpen));

  const handleTeamChange = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectedTeam(e.target.value as string);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSortBy(type);
  };

  const handleEditCard = (card: any) => {
    setSelectedCard(card);
    toggleEditDrawer(card);
  };

  return {
    selectedTeam,
    selectedType,
    sortBy,
    isDrawerOpen: propIsDrawerOpen ?? isDrawerOpen,
    isEditDrawerOpen: propIsEditDrawerOpen ?? isEditDrawerOpen,
    selectedCard,
    toggleDrawer,
    toggleEditDrawer,
    handleTeamChange,
    handleTypeChange,
    handleEditCard
  };
};

export const useKanbanData = (
  selectedTeam: string,
  selectedType: string,
  sortBy: string | null,
  columns: IndividualKanbanColumn[],
  statusDropdownListItems: DropdownListItem[],
  handleEditCard: (card: any) => void,
  data: KanbanData,
  tableRowsFn: (
    card: any,
    theme: Theme,
    isTruncated: boolean,
    setIsTruncated: Dispatch<SetStateAction<boolean>>,
    statusDropdownListItems: DropdownListItem[],
    handleEditCard: (card: any) => void
  ) => void,
  disableReduceColumns: boolean,
  selectedTeamFilter?: (cards: any[], team: string) => any[]
) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const theme = useTheme();

  const filteredColumns = useMemo(() => {
    if (disableReduceColumns) return [...columns];
    if (selectedTeam === 'all') {
      return columns;
    }
    return columns.filter((column) => column.id.toString() === selectedTeam);
  }, [columns, selectedTeam, disableReduceColumns]);

  const filteredCards = useMemo(() => {
    let cards = filteredColumns.flatMap((column) => column.cards);
    if (selectedType !== 'all') {
      cards = cards.filter((card) => card.type === selectedType);
    }
    if (selectedTeam) {
      if (selectedTeam !== 'all') {
        cards = selectedTeamFilter
          ? selectedTeamFilter(cards, selectedTeam)
          : cards.filter((card) => card.team === selectedTeam);
      }
    }
    if (sortBy) {
      cards.sort((a, b) => {
        if ((a as any)[sortBy] < (b as any)[sortBy]) return -1;
        if ((a as any)[sortBy] > (b as any)[sortBy]) return 1;
        return 0;
      });
    }
    return cards;
  }, [filteredColumns, selectedType, selectedTeam, sortBy]);

  const tableRows = useMemo(
    () =>
      filteredCards.map((card) =>
        tableRowsFn(
          card,
          theme,
          isTruncated,
          setIsTruncated,
          statusDropdownListItems,
          handleEditCard
        )
      ),
    [filteredCards, isTruncated, statusDropdownListItems]
  );

  const dataGridRows = filteredCards;

  const cardTypes = useMemo(() => {
    const types = new Set<string>();
    (data.columns || []).forEach((column: IndividualKanbanColumn) => {
      column.cards.forEach((card: KanbanColumnCard) => {
        if (card.type) types.add(card.sortBy ?? card.type);
      });
    });
    return Array.from(types);
  }, [data.columns]);

  const sortByOptions = [
    { value: 'all', label: 'All Types' },
    ...cardTypes.map((type) => ({ value: type, label: type }))
  ];

  // const isOpen = isDrawerOpen || isEditDrawerOpen;

  // TODO: Need to come back to this.
  // This listener is bleeding into input typing events.
  // Need to figure out a way to trigger this conditionally
  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (!isOpen && event.key === 'c') {
  //       event.preventDefault();
  //       toggleDrawer();
  //     }
  //     if (event.key === 'e') {
  //       if (!isOpen && selectedCard) {
  //         event.preventDefault();
  //         toggleEditDrawer(selectedCard);
  //       }
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [selectedCard, isOpen]);

  return {
    filteredColumns,
    filteredCards,
    tableRows,
    dataGridRows,
    sortByOptions
  };
};
