import { Grid, Typography } from '@mui/material';
import { FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EmptyStateProps } from 'src/components/molecules/EmptyState/EmptyState';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import Divider from '../../atoms/Divider/Divider';
import RowsOrEmptyState from './RowsOrEmptyState';
import { ScorecardDraggableRowProps } from './ScorecardDraggableRow';
import ScorecardHeadCell from './ScorecardHeadCell';
import { InlineFormikProps } from './ScorecardInlineEditCell';
import { RowData, useScorecard } from './useScorecard';
import { getColorByValue } from './helpers';

export interface ScorecardProps extends Omit<CardProps, 'slots'> {
  /**
   * is the data loading
   */
  isLoading?: boolean;
  /**
   * Data to be displayed in the scorecard
   */
  data: RowData[];
  /**
   * Type of scorecard
   */
  type: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  /**
   * Show checkbox in the scorecard
   */
  showCheckbox: boolean;
  /**
   * Show dots icon in the scorecard
   */
  showDotsIcon: boolean;
  /**
   * Function to save the scorecard
   */
  onSave: (
    values: InlineFormikProps,
    form: FormikHelpers<InlineFormikProps>,
    onClose: () => void,
    row: RowData
  ) => Promise<void>;
  /**
   * Close the scorecard after saving
   */
  closeOnSave: boolean;
  /**
   * Can edit the scorecard
   */
  canEdit: boolean;
  slots?: {
    /**
     *
     */
    scoreCardDraggableRowProps?: ScorecardDraggableRowProps;
    /**
     * Slots for the empty state
     */
    emptyStateProps?: EmptyStateProps;
  };
  /**
   * Function to handle edit click
   */
  onClickEdit?: (event: any, row: RowData) => void;
  /**
   * Function to handle delete click
   * @param event
   * @param row
   * @returns
   */
  onClickDelete?: (event: any, row: RowData) => void;
  /**
   * Slots for the card
   */
  cardSlots?: CardProps['slots'];
}

const Scorecard = ({
  isLoading,
  data,
  type,
  showCheckbox,
  showDotsIcon,
  onSave,
  closeOnSave,
  canEdit,
  cardSlots,
  slots,
  onClickEdit,
  onClickDelete,
  ...props
}: ScorecardProps) => {
  const { scoreCardDraggableRowProps, emptyStateProps } = slots || {};
  const {
    allChecked,
    checked,
    handleAllCheckboxChange,
    handleCheckboxChange,
    isTrendWithinGoal,
    getTitleByType,
    columnWidths,
    theme,
    rows,
    dates,
    moveRow
  } = useScorecard(data, type, isLoading!);

  return (
    <DndProvider backend={HTML5Backend}>
      <Card showActions={false} slots={cardSlots} {...props}>
        <>
          <Typography variant="textLgSemibold">
            {getTitleByType(type)}
          </Typography>

          <Divider sx={{ my: theme.spacing(2.5) }} />
          <Grid
            container
            flexDirection="column"
            gap={1}
            sx={{ overflowX: 'scroll' }}
          >
            {!isEmpty(rows) && !isLoading && (
              <Grid item display="flex">
                <ScorecardHeadCell
                  content="Owner"
                  width={columnWidths.owner}
                  allChecked={allChecked}
                  handleAllCheckboxChange={handleAllCheckboxChange}
                  showCheckbox={showCheckbox}
                />
                <ScorecardHeadCell
                  content="Title"
                  width={columnWidths.title}
                  allChecked={allChecked}
                  handleAllCheckboxChange={handleAllCheckboxChange}
                  showCheckbox={showCheckbox}
                />
                <ScorecardHeadCell
                  content="Goal"
                  width={columnWidths.goal}
                  allChecked={allChecked}
                  handleAllCheckboxChange={handleAllCheckboxChange}
                  showCheckbox={showCheckbox}
                />
                <ScorecardHeadCell
                  content="Avg."
                  width={columnWidths.trend}
                  allChecked={allChecked}
                  handleAllCheckboxChange={handleAllCheckboxChange}
                  showCheckbox={showCheckbox}
                />
                {dates.map((date) => (
                  <ScorecardHeadCell
                    key={date}
                    content={date}
                    width={columnWidths.data}
                    allChecked={allChecked}
                    handleAllCheckboxChange={handleAllCheckboxChange}
                    showCheckbox={showCheckbox}
                  />
                ))}
              </Grid>
            )}

            <RowsOrEmptyState
              rows={rows}
              isLoading={isLoading!}
              scoreCardDraggableRowProps={scoreCardDraggableRowProps!}
              emptyStateProps={emptyStateProps}
              moveRow={moveRow}
              columnWidths={columnWidths}
              checked={checked}
              handleCheckboxChange={handleCheckboxChange}
              isTrendWithinGoal={isTrendWithinGoal}
              getColorByValue={getColorByValue}
              showCheckbox={showCheckbox}
              showDotsIcon={showDotsIcon}
              onSave={onSave}
              closeOnSave={closeOnSave}
              canEdit={canEdit}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
            />
          </Grid>
        </>
      </Card>
    </DndProvider>
  );
};

export default Scorecard;
