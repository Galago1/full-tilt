import { GridProps, Theme } from '@mui/material';
import {
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useImperativeHandle
} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { HeadCell } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { TablePaginationWaveProps } from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import { DataGridProps } from '../DataGrid/DataGrid';
import { tableRowsFnDefault } from '../KanbanBoard/helpers';
import {
  rowValuesDefault,
  statusDropdownListItemsDefault,
  tableHeadCellsDefault
} from './helpers';
import {
  useKanbanActions,
  useKanbanColumns,
  useKanbanData,
  useKanbanView
} from './hooks';
import DndContent, { KanbanListType } from './KanbanDndContent';
import { IndividualKanbanColumn } from './types';

export interface KanbanProps extends GridProps {
  data: KanbanData;
  showAdd?: boolean;
  disableMoveColumn?: boolean;
  disableReduceColumns?: boolean;
  moveCard?: (
    sourceColumnId: string,
    sourceCardIndex: number,
    destColumnId: string,
    destCardIndex?: number
  ) => void;
  moveColumn?: (dragIndex: number, hoverIndex: number) => void;
  selectedTeamFilter?: (cards: any[], team: string) => any[];
  statusDropdownListItems?: DropdownListItem[];
  tableHeadCells?: readonly HeadCell<{
    summary: JSX.Element;
    assignee: JSX.Element;
    priority: JSX.Element;
    status: JSX.Element;
    dueDate: JSX.Element;
    updated: JSX.Element;
    created: JSX.Element;
    options: JSX.Element;
  }>[];
  rowValues?: string[];
  tableRowsFn?: (
    card: any,
    theme: Theme,
    isTruncated: boolean,
    setIsTruncated: Dispatch<SetStateAction<boolean>>,
    statusDropdownListItems: DropdownListItem[],
    handleEditCard: (card: any) => void,
    handleOpenDrawer?: (card: any) => void
  ) => any;
  initialView?: KanbanListType;
  controlledView?: KanbanListType;
  controlledHandleViewChange?: (
    newView: KanbanListType | ((prev: KanbanListType) => KanbanListType)
  ) => void;
  onEditCard?: (card: any) => void;
  slots?: {
    dataGridProps?: Omit<DataGridProps, 'rows'>;
    dataGridBoxProps?: GridProps;
    tablePaginationWaveProps?: TablePaginationWaveProps;
  };
}

export interface KanbanData {
  title: string;
  columns: IndividualKanbanColumn[];
}

const Kanban = forwardRef(
  (
    {
      data,
      controlledHandleViewChange,
      controlledView,
      disableMoveColumn = false,
      disableReduceColumns = false,
      initialView = KanbanListType.KANBAN,
      moveCard: propMoveCard,
      moveColumn: propMoveColumn,
      onEditCard,
      rowValues = rowValuesDefault,
      showAdd = true,
      statusDropdownListItems = statusDropdownListItemsDefault,
      tableHeadCells = tableHeadCellsDefault,
      tableRowsFn = tableRowsFnDefault,
      selectedTeamFilter,
      slots,
      sx,
      ...props
    }: KanbanProps,
    ref: Ref<any>
  ) => {
    const { dataGridProps, dataGridBoxProps, tablePaginationWaveProps } =
      slots || {};
    const { columns, moveCard, moveColumn } = useKanbanColumns(
      data.columns,
      propMoveCard,
      propMoveColumn,
      disableMoveColumn
    );
    const { view, handleViewChange } = useKanbanView(
      initialView,
      controlledView,
      controlledHandleViewChange
    );

    const {
      selectedTeam,
      selectedType,
      sortBy,
      handleTeamChange,
      handleTypeChange,
      handleEditCard
    } = useKanbanActions(
      false,
      undefined,
      false,
      undefined,
      undefined,
      onEditCard
    );

    const {
      filteredColumns,
      filteredCards,
      tableRows,
      dataGridRows,
      sortByOptions
    } = useKanbanData(
      selectedTeam,
      selectedType,
      sortBy,
      columns,
      statusDropdownListItems,
      handleEditCard,
      data,
      tableRowsFn,
      disableReduceColumns,
      selectedTeamFilter
    );

    useImperativeHandle(ref, () => ({
      kanbanData: () => ({
        handleTeamChange,
        handleTypeChange,
        selectedTeam,
        selectedType,
        sortBy,
        filteredColumns,
        filteredCards,
        sortByOptions,
        view,
        handleViewChange
      })
    }));

    return (
      <DndProvider backend={HTML5Backend}>
        <DndContent
          view={view}
          filteredColumns={filteredColumns}
          filteredCards={filteredCards}
          rowValues={rowValues}
          tableHeadCells={tableHeadCells}
          tableRows={tableRows}
          dataGridRows={dataGridRows}
          moveCard={moveCard}
          moveColumn={moveColumn}
          handleEditCard={handleEditCard}
          disableMoveColumn={disableMoveColumn}
          slots={{
            dataGridProps: dataGridProps!,
            dataGridBoxProps: dataGridBoxProps!,
            tablePaginationWaveProps: tablePaginationWaveProps!
          }}
        />
      </DndProvider>
    );
  }
);

export default Kanban;
