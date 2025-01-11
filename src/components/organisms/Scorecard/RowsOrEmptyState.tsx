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

export interface RowsOrEmptyStateProps {
  rows?: RowData[];
  isLoading?: boolean;
  moveRow?: (dragIndex: number, hoverIndex: number) => void;
  columnWidths?: any;
  checked?: boolean[];
  handleCheckboxChange?: (index: number) => void;
  getColorByValue?: (
    goalCondition: GoalCondition,
    goalValue: string,
    trend: number | undefined
  ) => string;
  showCheckbox?: boolean;
  showDotsIcon?: boolean;
  onSave?: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onCloseEditor: () => void,
    row: RowData
  ) => Promise<void>;
  closeOnSave?: boolean;
  canEdit?: boolean;
  onClickEdit?: (event: any, row: RowData) => void;
  onClickDelete?: (event: any, row: RowData) => void;
  emptyStateProps?: EmptyStateProps;
  slots?: {
    scoreCardDraggableRowProps?: ScorecardDraggableRowProps;
  };
}
const RowsOrEmptyState = ({
  rows,
  isLoading,
  moveRow,
  columnWidths,
  checked,
  handleCheckboxChange,
  getColorByValue,
  showCheckbox,
  showDotsIcon,
  onSave,
  closeOnSave,
  canEdit,
  onClickEdit,
  onClickDelete,
  emptyStateProps,
  slots
}: RowsOrEmptyStateProps) => {
  const { scoreCardDraggableRowProps } = slots || {};
  if (isEmpty(rows) && !isLoading) return <EmptyState {...emptyStateProps} />;
  return (
    <>
      {(rows || []).map((row, index) => (
        <ScorecardDraggableRow
          {...scoreCardDraggableRowProps}
          key={`index-${index}-rowid-${row.id}`}
          row={row}
          index={index}
          moveRow={moveRow}
          columnWidths={columnWidths}
          checked={checked?.[index]}
          handleCheckboxChange={handleCheckboxChange}
          getColorByValue={getColorByValue}
          showCheckbox={showCheckbox}
          showDotsIcon={showDotsIcon}
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
