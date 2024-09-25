import type { SxProps, Theme } from '@mui/material';
import {
  Radio as MuiRadio,
  RadioProps as MuiRadioButtonProps,
  useTheme
} from '@mui/material';
import type { JSXElementConstructor, ReactElement, Ref } from 'react';
import type { ColorSchema } from 'src/components/particles/theme/palette';

export interface RadioButtonProps extends MuiRadioButtonProps {
  /**
   * If true, the component is checked.
   */
  checked?: boolean;
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
  /**
   * Name attribute of the input element.
   */
  name?: string;
  variant?: 'default' | 'purple';
  labelHasBottomPadding?: boolean;
}

const RadioButton = ({
  checked,
  color,
  disableRipple,
  disabled,
  checkedIcon,
  icon,
  id,
  inputProps,
  inputRef,
  size,
  sx,
  value,
  onChange,
  required,
  name,
  variant,
  labelHasBottomPadding,
  ...props
}: RadioButtonProps) => {
  const theme = useTheme();
  return (
    <MuiRadio
      checked={checked}
      color={color}
      disableRipple={disableRipple}
      disabled={disabled}
      checkedIcon={checkedIcon}
      icon={icon}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      size={size}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      sx={{
        ...sx,
        ...(variant === 'purple' && {
          color: theme.palette.grey[300],
          '&:hover': {
            color: theme.palette.primary[600]
          },
          '&.Mui-checked': {
            color: theme.palette.primary[600]
          }
        })
      }}
      {...props}
    />
  );
};
export default RadioButton;
