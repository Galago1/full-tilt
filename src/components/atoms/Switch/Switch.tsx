import type { SxProps, Theme } from '@mui/material';
import { Switch as MuiSwitch } from '@mui/material';
import type { JSXElementConstructor, ReactElement, Ref } from 'react';
import type { ColorSchema } from 'src/components/particles/theme/palette';

export interface SwitchProps {
  /**
   * If true, the component is checked.
   */
  checked?: boolean;
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean;
  /**
   * The color of the component. It supports those
   * theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?: ColorSchema | 'default' | undefined;

  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If given, uses a negative margin to counteract the padding on one side
   */
  edge?: 'end' | 'start';
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  /**
   * If true, the ripple effect is disabled.
   */
  disableRipple?: boolean;
  /**
   * The icon to display when the component is unchecked.
   */
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  /**
   * The id of the input element.
   */
  id?: string;
  /**
   * Attributes applied to the input element.
   */
  inputProps?: {
    [key: string]: string;
  };
  /**
   * Pass a ref to the input element.
   */
  inputRef?: Ref<HTMLInputElement> | undefined;
  /**
   * The size of the component.
   */
  size?: 'medium' | 'small';
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: any;
  /**
   * Optional click handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * If true, the input element is required.
   */
  required?: boolean;
}

const Switch = ({
  checked,
  defaultChecked,
  color,
  disabled,
  edge,
  checkedIcon,
  disableRipple,
  icon,
  id,
  inputProps,
  inputRef,
  size,
  sx,
  value,
  onChange,
  required,
  ...props
}: SwitchProps) => {
  return (
    <MuiSwitch
      checked={checked}
      defaultChecked={defaultChecked}
      color={color}
      disabled={disabled}
      edge={edge}
      disableRipple={disableRipple}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      size={size}
      value={value}
      onChange={onChange}
      required={required}
      sx={sx}
      {...props}
    />
  );
};
export default Switch;
