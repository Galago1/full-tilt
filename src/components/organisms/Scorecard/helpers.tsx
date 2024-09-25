import { ListItemIcon, Typography } from '@mui/material';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
import {
  ArchiveIcon,
  DotsVerticalIcon,
  Edit04Icon
} from 'src/components/particles/theme/overrides/CustomIcons';

export const scorecardDropdown = (): DropdownProps => {
  const edit = {
    menuItemProps: {
      sx: {
        padding: (theme: any) => theme.spacing(1.375, 2),
        '& .MuiTypography-root': {
          fontWeight: 'normal'
        }
      },
      // onClick handled by the component
      children: (
        <>
          <ListItemIcon>
            <Edit04Icon />
          </ListItemIcon>
          <Typography variant="textSmMedium">Edit</Typography>
        </>
      )
    }
  };

  const destroy = {
    menuItemProps: {
      sx: {
        padding: (theme: any) => theme.spacing(1.375, 2),
        '& .MuiTypography-root': {
          fontWeight: 'normal'
        }
      },
      // onClick handled by the component
      children: (
        <>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <Typography variant="textSmMedium">Delete</Typography>
        </>
      )
    }
  };
  let dropdownListItems = [edit, destroy];

  return {
    label: <DotsVerticalIcon />,
    iconButtonProps: {
      disableRipple: true
      // sx: { pr: isMobile ? 0 : 1, pl: 0 }
    },
    buttonProps: {
      variant: 'outlined',
      size: 'small',
      sx: { '&': { minWidth: 'auto', px: 7 / 8 } }
    },
    // avatarAndTextProps: currentUserAvatarAndTextProps(currentUser),
    dropdownMenuProps: {
      // onClick: () => setOpen(false)
    },
    dropdownListItems: dropdownListItems
  };
};

export enum GoalCondition {
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL_TO = '>=',
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL_TO = '<=',
  EQUAL_TO = '=',
  NOT_EQUAL_TO = '!=',
  BETWEEN = '-'
}

export const isTrendWithinGoal = (
  goalCondition: GoalCondition,
  goalValue: string,
  trend: number
) => {
  const parseGoalValue = (value: string) => parseFloat(value.trim());

  switch (goalCondition) {
    case GoalCondition.GREATER_THAN:
      return trend > parseGoalValue(goalValue);

    case GoalCondition.GREATER_THAN_OR_EQUAL_TO:
      return trend >= parseGoalValue(goalValue);

    case GoalCondition.LESS_THAN:
      return trend < parseGoalValue(goalValue);

    case GoalCondition.LESS_THAN_OR_EQUAL_TO:
      return trend <= parseGoalValue(goalValue);

    case GoalCondition.EQUAL_TO:
      return trend === parseGoalValue(goalValue);

    case GoalCondition.NOT_EQUAL_TO:
      return trend !== parseGoalValue(goalValue);

    case GoalCondition.BETWEEN:
      const [minGoal, maxGoal] = goalValue.split('-').map(parseGoalValue);
      return trend >= minGoal && trend <= maxGoal;

    default:
      return false;
  }
};

export const getColorByValue = (
  goalCondition: GoalCondition,
  goalValue: string,
  value: number
): string => {
  const parseGoalValue = (value: string) => parseFloat(value.trim());
  if (value === undefined) return 'white';

  switch (goalCondition) {
    case GoalCondition.GREATER_THAN:
      const minGoal = parseGoalValue(goalValue);
      if (value >= minGoal) return 'success.100';
      if (value >= minGoal / 2) return 'lightyellow';
      return 'error.100';

    case GoalCondition.GREATER_THAN_OR_EQUAL_TO:
      const minGoalOrEqual = parseGoalValue(goalValue);
      if (value >= minGoalOrEqual) return 'success.100';
      if (value >= minGoalOrEqual / 2) return 'lightyellow';
      return 'error.100';

    case GoalCondition.LESS_THAN:
      const maxGoal = parseGoalValue(goalValue);
      if (value < maxGoal) return 'success.100';
      if (value >= maxGoal / 2) return 'lightyellow';
      return 'error.100';

    case GoalCondition.LESS_THAN_OR_EQUAL_TO:
      const maxGoalOrEqual = parseGoalValue(goalValue);
      if (value <= maxGoalOrEqual) return 'success.100';
      if (value >= maxGoalOrEqual / 2) return 'lightyellow';
      return 'error.100';

    case GoalCondition.EQUAL_TO:
      const exactGoal = parseGoalValue(goalValue);
      if (value === exactGoal) return 'success.100';
      if (Math.abs(value - exactGoal) <= exactGoal / 2) return 'lightyellow';
      return 'error.100';

    case GoalCondition.NOT_EQUAL_TO:
      const notEqualGoal = parseGoalValue(goalValue);
      if (value !== notEqualGoal) return 'success.100';
      return 'error.100';

    case GoalCondition.BETWEEN:
      const [min, max] = goalValue.split('-').map(parseGoalValue);
      if (value >= min && value <= max) return 'success.100';
      if (value >= min / 2 && value <= max / 2) return 'lightyellow';
      return 'error.100';

    default:
      return 'white';
  }
};
