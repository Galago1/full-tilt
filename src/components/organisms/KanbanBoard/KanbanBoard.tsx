import { Grid, GridProps, Theme, useTheme } from '@mui/material';
import {
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useImperativeHandle
} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Divider } from 'src/components/atoms';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { HeadCell } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { TablePaginationWaveProps } from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import { DataGridProps } from '../DataGrid/DataGrid';
import AddCardDrawer, { AddCardDrawerProps } from './AddCardDrawer';
import EditCardDrawer from './EditCardDrawer';
import {
  rowValuesDefault,
  statusDropdownListItemsDefault,
  tableHeadCellsDefault,
  tableRowsFnDefault
} from './helpers';
import {
  useKanbanActions,
  useKanbanColumns,
  useKanbanData,
  useKanbanView
} from './hooks';
import DndContent, { KanbanListType } from './KanbanDndContent';
import KanbanHeader, { KanbanHeaderProps } from './KanbanHeader';
import { IndividualKanbanColumn } from './types';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface KanbanBoardProps extends GridProps {
  data: KanbanData;
  showAdd?: boolean;
  disableMoveColumn?: boolean;
  disableReduceColumns?: boolean;
  isDrawerOpen?: boolean;
  setDrawerOpen?: (open: boolean) => void;
  isEditDrawerOpen?: boolean;
  setEditDrawerOpen?: (open: boolean) => void;
  toggleDrawer?: () => void;
  toggleEditDrawer?: (card: any) => void;
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
    handleEditCard: (card: any) => void
  ) => void;
  initialView?: KanbanListType;
  controlledView?: KanbanListType;
  controlledHandleViewChange?: Dispatch<SetStateAction<KanbanListType>>;
  onEditSubmit: (card: any) => void;
  slots?: {
    addCardDrawerProps?: AddCardDrawerProps;
    dataGridProps?: Omit<DataGridProps, 'rows'>;
    dataGridBoxProps?: GridProps;
    tablePaginationWaveProps?: TablePaginationWaveProps;
    kanbanHeaderProps?: KanbanHeaderProps;
  };
}

export interface KanbanData {
  title: string;
  columns: IndividualKanbanColumn[];
}

const KanbanBoard = forwardRef(
  (
    {
      data,
      controlledHandleViewChange,
      controlledView,
      disableMoveColumn = false,
      disableReduceColumns = false,
      initialView = KanbanListType.DATAGRID,
      isDrawerOpen: propIsDrawerOpen,
      isEditDrawerOpen: propIsEditDrawerOpen,
      moveCard: propMoveCard,
      moveColumn: propMoveColumn,
      onEditSubmit,
      rowValues = rowValuesDefault,
      setDrawerOpen: propSetDrawerOpen,
      setEditDrawerOpen: propSetEditDrawerOpen,
      showAdd = true,
      statusDropdownListItems = statusDropdownListItemsDefault,
      tableHeadCells = tableHeadCellsDefault,
      tableRowsFn = tableRowsFnDefault,
      selectedTeamFilter,
      toggleDrawer: propToggleDrawer,
      toggleEditDrawer: propToggleEditDrawer,
      slots,
      sx,
      ...props
    }: KanbanBoardProps,
    ref: Ref<any>
  ) => {
    const {
      addCardDrawerProps,
      dataGridProps,
      dataGridBoxProps,
      tablePaginationWaveProps,
      kanbanHeaderProps
    } = slots || {};
    const theme = useTheme();
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
      isDrawerOpen,
      isEditDrawerOpen,
      selectedCard,
      toggleDrawer,
      toggleEditDrawer,
      handleTeamChange,
      handleTypeChange,
      handleEditCard
    } = useKanbanActions(
      propIsDrawerOpen,
      propSetDrawerOpen,
      propIsEditDrawerOpen,
      propSetEditDrawerOpen,
      propToggleDrawer,
      propToggleEditDrawer
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
        handleTypeChange
      })
    }));

    return (
      <>
        <Grid
          container
          sx={{
            borderRadius: theme.borderRadius.xl,
            border: theme.border.outlinedButton,
            backgroundColor: theme.palette.common.white,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            overflow: 'hidden',
            ...sx
          }}
          {...props}
        >
          <Grid
            item
            sx={{
              padding: 3,
              width: '100%'
            }}
          >
            <KanbanHeader
              {...kanbanHeaderProps!}
              data={data}
              showAdd={showAdd!}
              filteredCards={filteredCards}
              sortByOptions={sortByOptions}
              handleTypeChange={handleTypeChange}
              handleViewChange={handleViewChange}
              view={view}
              initialView={initialView}
              toggleDrawer={toggleDrawer}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Divider
              sx={{
                margin:
                  view === 'kanban'
                    ? theme.spacing(0, 0, 20 / 8, 0)
                    : theme.spacing(0, 0, 0, 0),
                mx: view === 'kanban' ? responsiveSpacing : 0
              }}
            />
          </Grid>
          <Grid item width={'100%'} flex={1}>
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
          </Grid>
        </Grid>

        <AddCardDrawer
          {...addCardDrawerProps!}
          open={isDrawerOpen}
          onCloseDrawer={() => toggleDrawer()}
        />
        <EditCardDrawer
          open={isEditDrawerOpen}
          onClose={() => toggleEditDrawer('')}
          onSubmit={onEditSubmit}
          selectedCard={selectedCard}
          data={data}
        />
      </>
    );
  }
);

export default KanbanBoard;
