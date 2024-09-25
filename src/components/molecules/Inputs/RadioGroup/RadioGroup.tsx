import type { SelectWithTextProps } from 'src/components/molecules/SelectWithText/SelectWithText';
import SelectWithText from 'src/components/molecules/SelectWithText/SelectWithText';
import type { RadioGroupProps as MuiRadioGroupProps } from 'formik-mui';
import { RadioGroup as MuiRadioGroup } from 'formik-mui';

export interface RadioGroupProps extends MuiRadioGroupProps {
  /**
   * List of radios
   */
  radios: SelectWithTextProps[];
  /**
   * Name of the radio group
   */
  name: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const RadioGroup = ({ radios, ...props }: RadioGroupProps) => {
  return (
    <MuiRadioGroup {...props}>
      {radios.map((radio: SelectWithTextProps, index: Number) => {
        return (
          <SelectWithText key={`radio-group-index[${index}]`} {...radio} />
        );
      })}
    </MuiRadioGroup>
  );
};
export default RadioGroup;
