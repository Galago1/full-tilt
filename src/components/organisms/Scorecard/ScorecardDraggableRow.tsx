import {
  Checkbox,
  Grid,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { FormikHelpers } from 'formik';
import { last, round } from 'lodash';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Dropdown, {
  DropdownProps
} from 'src/components/molecules/Dropdown/Dropdown';
import NumberInputBase from 'src/components/molecules/Inputs/NumberInputBase/NumberInputBase';
import {
  DotsGrid06Icon,
  LayoutRightIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import Avatar from '../../atoms/Avatar/Avatar';
import { GoalCondition } from './helpers';
import ScorecardCell from './ScorecardCell';
import { InlineFormikProps } from './ScorecardInlineEditCell';
import { RowData } from './useScorecard';

const ROW = 'row';

export interface ScorecardDraggableRowProps {
  row?: RowData;
  index?: number;
  moveRow?: (dragIndex: number, hoverIndex: number) => void;
  columnWidths?: any;
  checked?: boolean;
  handleCheckboxChange?: (index: number) => void;
  getColorByValue?: (
    goalCondition: GoalCondition,
    goalValue: string,
    trend: number
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
  onClickIcon?: (event: any, row: RowData) => void;
  onClickEdit?: (event: any, row: RowData) => void;
  onClickDelete?: (event: any, row: RowData) => void;
  slots?: {
    dropdownProps: DropdownProps;
  };
  showEndIcon?: boolean;
}

const ScorecardDraggableRow = ({
  row,
  index,
  moveRow,
  columnWidths,
  checked,
  handleCheckboxChange,
  getColorByValue,
  onClickEdit,
  onClickDelete,
  onClickIcon,
  showCheckbox,
  showDotsIcon = true,
  onSave,
  closeOnSave,
  canEdit,
  slots,
  showEndIcon
}: ScorecardDraggableRowProps) => {
  const { dropdownProps } = slots || {};
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ROW,
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex! && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex! && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow!(dragIndex, hoverIndex!);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: ROW,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <Grid
      ref={ref}
      style={{ opacity }}
      display="flex"
      mb={0}
      alignItems="center"
    >
      <Grid
        width={columnWidths.owner}
        border={1}
        borderColor="grey.200"
        borderRadius={theme.spacing(0.5)}
        display="flex"
        alignItems="center"
        p={1}
        mr={1}
        height={theme.spacing(5)}
      >
        {showDotsIcon && (
          <DotsGrid06Icon
            sx={{
              width: theme.spacing(3),
              height: theme.spacing(3),
              cursor: 'pointer'
            }}
          />
        )}
        {showCheckbox && (
          <Checkbox
            checked={checked}
            onChange={(e) => handleCheckboxChange!(index!)}
            sx={{ p: 0.25, mr: 0.5 }}
          />
        )}
        <Avatar src={row!.avatar} sx={{ width: 20, height: 20, mr: 0.5 }} />
        <Typography noWrap>{row!.owner}</Typography>
      </Grid>
      <ScorecardCell
        content={{ value: row!.title }}
        type="data"
        width={columnWidths.title}
        onSave={async (a, b, c) => await onSave!(a, b, c, row!)}
        closeOnSave={closeOnSave!}
        canEdit={false}
        allowEmptyText={true}
        disabled={true}
      />
      <ScorecardCell
        content={{ value: row!.goal }}
        type="data"
        width={columnWidths.goal}
        onSave={async (a, b, c) => await onSave!(a, b, c, row!)}
        component={NumberInputBase}
        closeOnSave={closeOnSave!}
        canEdit={false} // TBD, need to figure out the data being saved
        allowEmptyText={true}
        disabled={true}
      />
      <ScorecardCell
        content={{
          value: row!.prefix
            ? row!.trend
            : typeof row!.trend === 'number'
            ? round(row!.trend, 2)
            : row!.trend
        }}
        type="data"
        width={columnWidths.trend}
        bgcolor={getColorByValue!(
          row?.goalCondition!,
          last(row!.goal.split(' ')) as string,
          row!.trend
        )}
        onSave={async (a, b, c) => await onSave!(a, b, c, row!)}
        component={NumberInputBase}
        closeOnSave={closeOnSave!}
        canEdit={false}
        allowEmptyText={true}
        disabled={true}
        suffix={row!.suffix}
        prefix={row!.prefix}
      />
      {row!.data.map((data, dataIndex) => (
        <ScorecardCell
          key={dataIndex}
          content={data}
          type="data"
          width={columnWidths.data}
          bgcolor={getColorByValue!(
            row?.goalCondition!,
            last(row!.goal.split(' ')) as string,
            data.value as number
          )}
          onSave={async (a, b, c) => await onSave!(a, b, c, row!)}
          component={NumberInputBase}
          closeOnSave={closeOnSave!}
          canEdit={canEdit!}
          suffix={data!.suffix}
          prefix={data!.prefix}
        />
      ))}
      {showEndIcon && !dropdownProps && (
        <IconButton
          sx={{
            border: theme.border.userProfile,
            borderRadius: theme.spacing(0.5),
            minWidth: theme.spacing(5.5),
            height: theme.spacing(5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: theme.spacing(0.5),
            borderColor: 'grey.200'
          }}
          onClick={(e) => onClickIcon!(e, row!)}
        >
          <LayoutRightIcon sx={{ fontSize: theme.spacing(2.5) }} />
        </IconButton>
      )}
      {showEndIcon && dropdownProps && (
        <Dropdown sx={{ width: theme.spacing(5) }} {...dropdownProps} />
      )}
    </Grid>
  );
};

export default ScorecardDraggableRow;
