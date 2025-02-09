import { ListItemIcon, Typography } from '@mui/material';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
import { ArchiveIcon } from 'src/components/particles/theme/icons/General/archive';
import { DotsVerticalIcon } from 'src/components/particles/theme/icons/General/dots-vertical';
import { Edit04Icon } from 'src/components/particles/theme/icons/General/edit-04';

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

/**
 * Determines the color status of a value based on its relationship to a goal.
 *
 * Colors indicate:
 * - success.100: Value meets or exceeds the goal condition
 * - warning.100: Value is within tolerance range (typically ±20% of goal)
 * - error.100: Value falls outside goal and tolerance range
 * - neutral.100: Value cannot be evaluated (undefined, invalid, etc.)
 *
 * @param goalCondition - The type of comparison to perform
 * @param goalValue - The target value or range to compare against
 * @param value - The actual value being evaluated
 * @returns The color code indicating status
 */
export const getColorByValue = (
  goalCondition: GoalCondition,
  goalValue: string,
  value: number | undefined,
  isEmpty: boolean = false
): string => {
  console.log({ goalCondition, goalValue, value: value });
  // Guard against invalid inputs
  if (value === undefined || goalValue === undefined) {
    return 'neutral.100';
  }
  if (isEmpty) return 'white';

  // const value = +preValue || 0;

  // Parse goal values with error handling
  const parseGoalValue = (val: string): number | null => {
    try {
      const parsed = parseFloat(val.trim());
      return isNaN(parsed) ? null : parsed;
    } catch {
      return null;
    }
  };

  // Helper to determine if a value is within tolerance
  const isWithinTolerance = (
    actual: number,
    target: number,
    condition: GoalCondition
  ): boolean => {
    const tolerance = 0.2; // 20% tolerance
    switch (condition) {
      case GoalCondition.GREATER_THAN:
      case GoalCondition.GREATER_THAN_OR_EQUAL_TO:
        return actual >= target * (1 - tolerance);
      case GoalCondition.LESS_THAN:
      case GoalCondition.LESS_THAN_OR_EQUAL_TO:
        return actual <= target * (1 + tolerance);
      case GoalCondition.EQUAL_TO:
        return Math.abs(actual - target) <= target * tolerance;
      default:
        return false;
    }
  };

  try {
    switch (goalCondition) {
      case GoalCondition.GREATER_THAN: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        if (value > target) return 'success.100';
        if (isWithinTolerance(value, target, goalCondition))
          return 'warning.100';
        return 'error.100';
      }

      case GoalCondition.GREATER_THAN_OR_EQUAL_TO: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        if (value >= target) return 'success.100';
        if (isWithinTolerance(value, target, goalCondition))
          return 'warning.100';
        return 'error.100';
      }

      case GoalCondition.LESS_THAN: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        if (value < target) return 'success.100';
        if (isWithinTolerance(value, target, goalCondition))
          return 'warning.100';
        return 'error.100';
      }

      case GoalCondition.LESS_THAN_OR_EQUAL_TO: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        if (value <= target) return 'success.100';
        if (isWithinTolerance(value, target, goalCondition))
          return 'warning.100';
        return 'error.100';
      }

      case GoalCondition.EQUAL_TO: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        if (value === target) return 'success.100';
        if (isWithinTolerance(value, target, goalCondition))
          return 'warning.100';
        return 'error.100';
      }

      case GoalCondition.NOT_EQUAL_TO: {
        const target = parseGoalValue(goalValue);
        if (target === null) return 'neutral.100';
        return value !== target ? 'success.100' : 'error.100';
      }

      case GoalCondition.BETWEEN: {
        const [min, max] = goalValue.split('-').map(parseGoalValue);
        if (min === null || max === null) return 'neutral.100';
        if (value >= min && value <= max) return 'success.100';
        if (value >= min * 0.8 && value <= max * 1.2) return 'warning.100';
        return 'error.100';
      }

      default:
        return 'neutral.100';
    }
  } catch (error) {
    console.error('Error evaluating color status:', error);
    return 'neutral.100';
  }
};
