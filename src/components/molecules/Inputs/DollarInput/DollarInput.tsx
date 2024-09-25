import { Orientation } from '@mui/material';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';
import type { NumberInputBaseProps } from '../NumberInputBase/NumberInputBase';
import NumberInputBase from '../NumberInputBase/NumberInputBase';

export interface DollarInputProps extends NumberInputBaseProps {
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const DollarInput = ({
  orientation,
  label,
  labelSx,
  prefix = '$',
  allowNegative = false,
  ...props
}: DollarInputProps) => {
  return (
    <NumberInputBase
      {...props}
      labelSx={labelSx}
      orientation={orientation}
      label={label}
      value={props.field.value}
      thousandSeparator={true}
      decimalScale={2}
      valueIsNumericString
      fixedDecimalScale
      prefix={prefix}
      allowNegative={allowNegative}
    />
  );
};

export default DollarInput;
