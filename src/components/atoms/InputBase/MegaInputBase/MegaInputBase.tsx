import type { TextInputBaseProps } from '../TextInputBase/TextInputBase';
import TextInputBase from '../TextInputBase/TextInputBase';

export interface MegaInputBaseProps extends Omit<TextInputBaseProps, 'label'> {
  /**
   * Max number of char
   * @default
   * 1
   */
  maxLength?: number;
  /**
   * Type of input
   * @default
   * number
   */
  type?: 'number' | 'text' | 'password';
  /**
   * Size of the input
   * @default
   * medium
   */
  size?: 'small' | 'medium' | 'large' | undefined;
}

/**
 * Primary UI component for user interaction
 */
const MegaInputBase = ({
  placeholder = '0',
  size = 'medium',
  maxLength = 1,
  type = 'number',
  ...props
}: MegaInputBaseProps) => {
  return (
    <TextInputBase
      {...props}
      placeholder={placeholder}
      type={type}
      InputProps={{
        ...props.InputProps,
        className: 'mega-input',
        size
      }}
      inputProps={{
        ...props.inputProps,
        maxLength
      }}
      autoComplete="one-time-code"
      pattern={type === 'number' ? '[0-9]' : ''}
      // onChange={(e) => {

      //   // props.onChange(e)
      //   props.handleChange()
      // }}
    />
  );
};

export default MegaInputBase;
