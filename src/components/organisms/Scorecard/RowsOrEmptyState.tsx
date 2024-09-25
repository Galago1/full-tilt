import { FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import EmptyState, {
  EmptyStateProps
} from 'src/components/molecules/EmptyState/EmptyState';
import { GoalCondition } from './helpers';
import ScorecardDraggableRow, {
  ScorecardDraggableRowProps
} from './ScorecardDraggableRow';
import { InlineFormikProps } from './ScorecardInlineEditCell';
import { RowData } from './useScorecard';

interface RowsOrEmptyStateProps {
  rows: RowData[];
  isLoading: boolean;
  scoreCardDraggableRowProps: ScorecardDraggableRowProps;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  columnWidths: any;
  checked: boolean[];
  handleCheckboxChange: (index: number) => void;
  isTrendWithinGoal: (
    goalCondition: GoalCondition,
    goalValue: string,
    trend: number
  ) => boolean;
  getColorByValue: (
    goalCondition: GoalCondition,
    goalValue: string,
    trend: number
  ) => string;
  showCheckbox: boolean;
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void,
    row: RowData
  ) => void;
  closeOnSave: boolean;
  canEdit: boolean;
  onClickEdit?: (event: any, row: RowData) => void;
  onClickDelete?: (event: any, row: RowData) => void;
  emptyStateProps?: EmptyStateProps;
}
const RowsOrEmptyState = ({
  rows,
  isLoading,
  scoreCardDraggableRowProps,
  moveRow,
  columnWidths,
  checked,
  handleCheckboxChange,
  isTrendWithinGoal,
  getColorByValue,
  showCheckbox,
  onSave,
  closeOnSave,
  canEdit,
  onClickEdit,
  onClickDelete,
  emptyStateProps
}: RowsOrEmptyStateProps) => {
  if (isEmpty(rows) && !isLoading) return <EmptyState {...emptyStateProps} />;
  return (
    <>
      {rows.map((row, index) => (
        <ScorecardDraggableRow
          {...scoreCardDraggableRowProps}
          key={`index-${index}-rowid-${row.id}`}
          row={row}
          index={index}
          moveRow={moveRow}
          columnWidths={columnWidths}
          checked={checked[index]}
          handleCheckboxChange={handleCheckboxChange}
          isTrendWithinGoal={isTrendWithinGoal}
          getColorByValue={getColorByValue}
          showCheckbox={showCheckbox}
          onSave={onSave}
          closeOnSave={closeOnSave}
          canEdit={canEdit}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
      ))}
    </>
  );
};
export default RowsOrEmptyState;
