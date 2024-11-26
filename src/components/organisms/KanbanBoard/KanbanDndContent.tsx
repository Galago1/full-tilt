import { Grid, GridProps } from '@mui/material';
import {
  HeadCell,
  TableOrder
} from 'src/components/molecules/Table/TableHeader/TableHeader';
import TablePaginationWave, {
  TablePaginationWaveProps
} from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import DataGrid, { DataGridProps } from '../DataGrid/DataGrid';
import Table from '../Table';
import KanbanColumn from './KanbanColumn';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { IndividualKanbanColumn } from './types';

export enum KanbanListType {
  KANBAN = 'kanban',
  LIST = 'list',
  DATAGRID = 'datagrid'
}

interface DndContentProps {
  view: KanbanListType;
  filteredColumns: IndividualKanbanColumn[];
  filteredCards: any[];
  rowValues: string[];
  tableHeadCells: readonly HeadCell<{
    summary: JSX.Element;
    assignee: JSX.Element;
    priority: JSX.Element;
    status: JSX.Element;
    dueDate: JSX.Element;
    updated: JSX.Element;
    created: JSX.Element;
    options: JSX.Element;
  }>[];

  tableRows?: any[];
  dataGridRows?: readonly any[];
  disableMoveColumn: boolean;
  moveCard: (
    sourceColumnId: string,
    sourceCardIndex: number,
    destColumnId: string,
    destCardIndex?: number
  ) => void;
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
  handleEditCard: (card: any) => void;
  slots: {
    dataGridProps: Omit<DataGridProps, 'rows'>;
    dataGridBoxProps: GridProps;
    tablePaginationWaveProps: TablePaginationWaveProps;
  };
}

const DndContent = ({
  view,
  tableRows,
  dataGridRows,
  filteredColumns = [],
  filteredCards = [],
  rowValues,
  tableHeadCells,
  disableMoveColumn,
  moveCard,
  moveColumn,
  handleEditCard,
  slots
}: DndContentProps) => {
  const { dataGridProps, dataGridBoxProps, tablePaginationWaveProps } =
    slots || {};

  if (view === KanbanListType.KANBAN)
    return (
      <Grid
        container
        sx={{
          justifyContent: 'flex-start',
          height: '100%',
          gap: 2,
          px: responsiveSpacing,
          flexWrap: 'nowrap',
          alignItems: 'stretch',
          overflowY: 'hidden',
          flex: 1
        }}
      >
        {filteredColumns.map((column, index) => (
          <Grid
            item
            key={column.id}
            xs={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              flex: 1
            }}
          >
            <KanbanColumn
              column={{
                ...column,
                cards: column.cards.filter((card: any) =>
                  filteredCards.includes(card)
                )
              }}
              moveCard={moveCard}
              moveColumn={moveColumn}
              index={index}
              handleEditCard={handleEditCard}
              disableMoveColumn={disableMoveColumn}
              {...column.kanbanColumnProps!}
            />
          </Grid>
        ))}
      </Grid>
    );
  if (view === KanbanListType.DATAGRID)
    return (
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          height: '100%',
          overflow: 'auto',
          gap: 2
        }}
        {...dataGridBoxProps}
      >
        <DataGrid {...dataGridProps} rows={dataGridRows || []} />
        <TablePaginationWave
          {...tablePaginationWaveProps}
          count={Math.ceil(
            (dataGridRows || []).length / (dataGridProps?.pageSize || 8)
          )}
          page={dataGridProps?.page || 1}
          onChange={(event: any, page: number) =>
            dataGridProps?.onPageChange?.(page, {})
          }
        />
      </Grid>
    );
  return (
    <Table
      rows={tableRows!}
      variant="wave"
      tableContainerProps={{ sx: { flex: 1 } }}
      tableHeaderProps={{
        showCheckbox: false,
        headCells: tableHeadCells,
        order: 'desc',
        orderBy: undefined,
        sx: { backgroundColor: 'grey.50' }
      }}
      tableBodyProps={{
        showCheckbox: false,
        order: '' as TableOrder,
        orderBy: undefined,
        page: 0,
        rows: tableRows!,
        rowValues: rowValues,
        rowsPerPage: 8,
        buttons: [],
        align: 'left'
      }}
      tablePaginationProps={{
        count: 0,
        page: 0,
        buttonProps: {},
        sx: { marginTop: 12 / 8 }
      }}
      tableToolbarProps={{ avatarAndTextProps: {} }}
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto'
      }}
    />
  );
};
export default DndContent;
