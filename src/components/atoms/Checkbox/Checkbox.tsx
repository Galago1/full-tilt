import type { SxProps, Theme } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from 'formik-mui';
import { Checkbox as MuiCheckbox } from 'formik-mui';
import type { JSXElementConstructor, ReactElement, Ref } from 'react';
import type { ColorSchema } from 'src/components/particles/theme/palette';

export interface CheckboxProps extends MuiCheckboxProps {
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
   * If true, the component appears indeterminate. This does not set the native input
   * element to indeterminate due to inconsistent behavior across browsers. However, we
   * set a data-indeterminate attribute on the input
   */
  indeterminate?: boolean;
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
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
   * Optional click handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * If true, the input element is required.
   */
  required?: boolean;
  /**
   *
   */
  checked?: boolean;
}

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <MuiCheckbox {...props} />;
};

export default Checkbox;
