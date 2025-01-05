import {
  Grid,
  GridProps,
  MenuItem,
  MenuItemProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
  Theme
} from '@mui/material';
import type { CustomSelectOptionProps } from './CustomSelectOption/CustomSelectOption';
import { CustomSelectOption } from './CustomSelectOption/CustomSelectOption';
import { get } from 'lodash';

const DEFAULT_VALUE = 'none';

export interface SelectOption {
  value: any;
  label: CustomSelectOptionProps;
  menuItem?: MenuItemProps;
  containerSx?: SxProps<Theme>;
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

// const styles = (value: any) => {
//   if (value === DEFAULT_VALUE) return {};
//   return { margin: 0, paddingRight: '0 !important' };
// };

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
    if (props.SelectProps?.multiple) {
      const values = Array.isArray(selectedValue) ? selectedValue : [];

      // If the only selected value is DEFAULT_VALUE, show the default label
      if (values.length === 1 && values[0] === DEFAULT_VALUE) {
        return (
          <Grid sx={{ minWidth: '100%' }} {...boxProps}>
            <CustomSelectOption
              allowOverrideDisplayValue={true}
              value={defaultOptionLabel}
              checked={false}
              hideSubvalue={true}
              // containerSx={{ px: 0 }}
            />
          </Grid>
        );
      }

      // For multiple selections, we need to show all selected options
      const selectedOptions = options.filter((opt) =>
        values.includes(opt.value)
      );

      return (
        <>
          {selectedOptions.map((option, index) => (
            <MenuItem key={option.value} {...option.menuItem}>
              <CustomSelectOption
                allowOverrideDisplayValue={true}
                {...option.label}
                checked={false}
                hideSubvalue={true}
                containerSx={{
                  ...option.containerSx,
                  pl: index === 0 ? 1.25 : 0
                }}
              />
            </MenuItem>
          ))}
        </>
      );
    }

    // Original single-select logic
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
      <MenuItem sx={{ minWidth: '100%' }}>
        <CustomSelectOption
          allowOverrideDisplayValue={true}
          {...option.label}
          checked={false}
          hideSubvalue={true}
        />
      </MenuItem>
    );
  };
  const getStyles = (value: any) => {
    if (props.SelectProps?.multiple) {
      // For multiple select, adjust padding when items are selected
      return {
        margin: 0,
        padding: 0
      };
    }
    // Original single-select styles
    if (value === DEFAULT_VALUE) return {};
    return { margin: 0, paddingRight: 0 };
  };
  const selectSx: any = get(props, [
    'SelectProps',
    'sx',
    '& .MuiSelect-select'
  ]);

  return (
    <MuiTextField
      {...props}
      select
      SelectProps={{
        ...props.SelectProps,
        sx: {
          ...props.SelectProps?.sx,

          '& .MuiSelect-select': {
            padding: 0,
            ...getStyles(props.value),
            ...selectSx
          },
          '& .MuiSelect-icon': {
            right: 7
          },
          '& .MuiSelect-iconOpen': {
            transform: 'rotate(180deg)'
          }
        },
        renderValue: props.SelectProps?.renderValue || renderValue
      }}
    >
      <MenuItem
        value={props.SelectProps?.multiple ? [DEFAULT_VALUE] : DEFAULT_VALUE}
        disabled={noneDisabled}
      >
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
