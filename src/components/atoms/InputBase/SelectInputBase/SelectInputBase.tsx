import {
  Grid,
  GridProps,
  MenuItem,
  MenuItemProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material';
import type { CustomSelectOptionProps } from './CustomSelectOption/CustomSelectOption';
import { CustomSelectOption } from './CustomSelectOption/CustomSelectOption';

const DEFAULT_VALUE = 'none';

export interface SelectOption {
  value: any;
  label: CustomSelectOptionProps;
  menuItem?: MenuItemProps;
}
export interface SelectInputBaseProps
  extends Omit<MuiTextFieldProps, 'variant'> {
  /**
   * Select input options
   */
  options: SelectOption[];
  /**
   * Default option label
   */
  defaultOptionLabel?: string;
  /**
   * Add a checkicon to the selected option
   */
  checkSelected?: boolean;
  /**
   * Use a none icon
   */
  useNoneIcon?: JSX.Element;
  /**
   * Disable none option
   * @default true
   * */
  noneDisabled?: boolean;
  slots: {
    boxProps: GridProps;
  };
}

const styles = (value: any) => {
  if (value === DEFAULT_VALUE) return {};
  return { margin: 0, paddingRight: '0 !important' };
};

/**
 * Primary UI component for user interaction
 */
export const SelectInputBase = ({
  options = [],
  defaultOptionLabel = 'Select an option',
  checkSelected = false,
  useNoneIcon = undefined,
  noneDisabled = true,
  slots,
  ...props
}: SelectInputBaseProps) => {
  const { boxProps } = slots || {};
  const renderValue = (selectedValue: any) => {
    const selected = options.find(
      (opt: SelectOption) => opt.value === selectedValue
    );
    const option = selected || {
      value: DEFAULT_VALUE,
      label: {
        icon: useNoneIcon,
        value: defaultOptionLabel,
        className: 'default-value'
      } as CustomSelectOptionProps
    };
    return (
      <Grid sx={{ minWidth: '100%', pr: 2 }} {...boxProps}>
        <CustomSelectOption
          allowOverrideDisplayValue={true}
          {...option.label}
          checked={false}
          hideSubvalue={true}
        />
      </Grid>
    );
  };

  return (
    <MuiTextField
      {...props}
      select
      SelectProps={{
        ...props.SelectProps,
        sx: {
          '& .MuiSelect-select': {
            padding: 0,
            ...styles(props.value)
          },
          '& .MuiSelect-icon': {
            right: 7
          },
          '& .MuiSelect-iconOpen': {
            transform: 'rotate(180deg)'
          },
          ...props.SelectProps?.sx
        },
        renderValue: props.SelectProps?.renderValue || renderValue
      }}
    >
      <MenuItem value={DEFAULT_VALUE} disabled={noneDisabled}>
        <CustomSelectOption
          allowOverrideDisplayValue={false}
          value={defaultOptionLabel}
        />
      </MenuItem>
      {options.map((option: SelectOption) => (
        <MenuItem key={option.value} value={option.value} {...option.menuItem}>
          <CustomSelectOption
            allowOverrideDisplayValue={false}
            {...option.label}
            checked={checkSelected ? props.value === option.value : false}
          />
        </MenuItem>
      ))}
    </MuiTextField>
  );
};
export default SelectInputBase;
