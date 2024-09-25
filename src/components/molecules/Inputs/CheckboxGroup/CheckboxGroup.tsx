import { Field } from 'formik';
import type { RadioGroupProps as MuiRadioGroupProps } from 'formik-mui';
import { RadioGroup as MuiRadioGroup } from 'formik-mui';
import SelectWithText, {
  SelectWithTextProps
} from '../../SelectWithText/SelectWithText';

export interface CheckboxGroupProps extends MuiRadioGroupProps {
  slots?: {
    /**
     * The checkbox list props
     */
    checkboxInputs: SelectWithTextProps[];
  };

  TheField?: any;
}

/**
 * Primary UI component for user interaction
 */
const CheckboxGroup = ({
  slots,
  TheField = Field,
  ...props
}: CheckboxGroupProps) => {
  const { checkboxInputs } = slots || { checkboxInputs: [] };
  return (
    <MuiRadioGroup {...props}>
      {checkboxInputs.map((radio: SelectWithTextProps, index: Number) => {
        return (
          <SelectWithText key={`checkbox-group-index[${index}]`} {...radio} />
        );
      })}
    </MuiRadioGroup>
  );
};
export default CheckboxGroup;
