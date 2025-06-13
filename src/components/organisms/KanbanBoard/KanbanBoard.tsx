import { Grid, GridProps, Theme, useTheme } from '@mui/material';
import {
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useImperativeHandle,
  useRef,
  useState,
  useEffect
} from 'react';
import { Divider } from 'src/components/atoms';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { HeadCell } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { TablePaginationWaveProps } from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { DataGridProps } from '../DataGrid/DataGrid';
import Kanban, { KanbanData } from '../Kanban/Kanban';
import { KanbanListType } from '../Kanban/KanbanDndContent';
import KanbanHeader, { KanbanHeaderProps } from './KanbanHeader';
import { tableRowsFnDefault } from './helpers';

export interface KanbanBoardProps extends GridProps {
  data: KanbanData;
  showAdd?: boolean;
  disableMoveColumn?: boolean;
  disableReduceColumns?: boolean;
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
    handleEditCard: (card: any) => void,
    handleOpenDrawer?: (card: any) => void
  ) => any;
  initialView?: KanbanListType;
  controlledView?: KanbanListType;
  controlledHandleViewChange?: (
    newView: KanbanListType | ((prev: KanbanListType) => KanbanListType)
  ) => void;
  onEditSubmit: (card: any) => void;
  showDivider?: boolean;
  showHeader?: boolean;
  slots?: {
    // addCardDrawerProps?: AddCardDrawerProps;
    dataGridProps?: Omit<DataGridProps, 'rows'>;
    dataGridBoxProps?: GridProps;
    tablePaginationWaveProps?: TablePaginationWaveProps;
    kanbanHeaderProps?: KanbanHeaderProps;
  };
}

export type { KanbanData };

const KanbanBoard = forwardRef(
  (
    {
      data,
      controlledHandleViewChange,
      controlledView,
      disableMoveColumn = false,
      disableReduceColumns = false,
      initialView = KanbanListType.DATAGRID,
      moveCard: propMoveCard,
      moveColumn: propMoveColumn,
      rowValues,
      showAdd = true,
      statusDropdownListItems,
      tableHeadCells,
      tableRowsFn = tableRowsFnDefault,
      selectedTeamFilter,
      toggleDrawer: propToggleDrawer,
      toggleEditDrawer: propToggleEditDrawer,
      slots,
      sx,
      showDivider = true,
      showHeader = true,
      ...props
    }: KanbanBoardProps,
    ref: Ref<any>
  ) => {
    const {
      dataGridProps,
      dataGridBoxProps,
      tablePaginationWaveProps,
      kanbanHeaderProps
    } = slots || {};
    const theme = useTheme();

    // Manage view state at the KanbanBoard level
    const [boardView, setBoardView] = useState<KanbanListType>(initialView);
    const [filteredCards, setFilteredCards] = useState<any[]>([]);
    const [sortByOptions, setSortByOptions] = useState<any>({
      teams: [],
      types: []
    });
    const [handleTypeChange, setHandleTypeChange] = useState<any>(null);

    // Reference to the Kanban component
    const kanbanRef = useRef<any>(null);

    // Handle view changes at the KanbanBoard level
    const handleViewChange = (
      newView: KanbanListType | ((prev: KanbanListType) => KanbanListType)
    ) => {
      if (controlledHandleViewChange) {
        controlledHandleViewChange(newView);
      } else {
        setBoardView(newView);
      }
    };

    // Sync with kanban data when it changes
    useEffect(() => {
      if (kanbanRef.current) {
        const kanbanData = kanbanRef.current.kanbanData();
        if (kanbanData) {
          setFilteredCards(kanbanData.filteredCards || []);
          setSortByOptions(
            kanbanData.sortByOptions || { teams: [], types: [] }
          );
          setHandleTypeChange(kanbanData.handleTypeChange);
        }
      }
    }, [boardView, data]);

    useImperativeHandle(ref, () => ({
      kanbanData: () => {
        if (kanbanRef.current) {
          return {
            ...kanbanRef.current.kanbanData(),
            view: controlledView || boardView,
            handleViewChange
          };
        }
        return {
          view: controlledView || boardView,
          handleViewChange,
          filteredCards,
          sortByOptions,
          handleTypeChange
        };
      }
    }));

    const handleEditCard = (card: any) => {
      propToggleEditDrawer?.(card);
    };

    const handleOpenDrawer = (card: any) => {
      propToggleDrawer?.();
    };

    // Create a custom tableRowsFn that includes the handleOpenDrawer function
    const customTableRowsFn = (
      card: any,
      theme: Theme,
      isTruncated: boolean,
      setIsTruncated: Dispatch<SetStateAction<boolean>>,
      statusDropdownListItems: DropdownListItem[],
      handleEditCardFn: (card: any) => void
    ) => {
      return tableRowsFn(
        card,
        theme,
        isTruncated,
        setIsTruncated,
        statusDropdownListItems,
        handleEditCardFn,
        handleOpenDrawer
      );
    };

    // Use the controlled view if provided, otherwise use the local state
    const currentView = controlledView || boardView;

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
          {showHeader && (
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
                showAdd={showAdd}
                filteredCards={filteredCards}
                sortByOptions={sortByOptions}
                handleTypeChange={handleTypeChange}
                handleViewChange={handleViewChange}
                view={currentView}
                initialView={initialView}
                toggleDrawer={propToggleDrawer}
              />
            </Grid>
          )}
          {showDivider && (
            <Grid item width={'100%'}>
              <Divider
                sx={{
                  margin:
                    currentView === 'kanban'
                      ? theme.spacing(0, 0, 20 / 8, 0)
                      : theme.spacing(0, 0, 0, 0),
                  mx: currentView === 'kanban' ? responsiveSpacing : 0
                }}
              />
            </Grid>
          )}
          <Grid item width={'100%'} flex={1}>
            <Kanban
              ref={kanbanRef}
              data={data}
              controlledHandleViewChange={handleViewChange}
              controlledView={currentView}
              disableMoveColumn={disableMoveColumn}
              disableReduceColumns={disableReduceColumns}
              initialView={initialView}
              moveCard={propMoveCard}
              moveColumn={propMoveColumn}
              onEditCard={handleEditCard}
              rowValues={rowValues}
              // showAdd={showAdd!}
              statusDropdownListItems={statusDropdownListItems}
              tableHeadCells={tableHeadCells}
              tableRowsFn={customTableRowsFn}
              selectedTeamFilter={selectedTeamFilter}
              slots={{
                dataGridProps,
                dataGridBoxProps,
                tablePaginationWaveProps
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
);

export default KanbanBoard;
