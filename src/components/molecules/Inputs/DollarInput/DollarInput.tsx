import { Orientation } from '@mui/material';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';
import type { NumberInputBaseProps } from '../NumberInputBase/NumberInputBase';
import NumberInputBase from '../NumberInputBase/NumberInputBase';
import { forwardRef } from 'react';

export interface DollarInputProps extends NumberInputBaseProps {
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const DollarInput = forwardRef(
  (
    {
      orientation,
      label,
      labelSx,
      prefix = '$',
      allowNegative = false,
      ...props
    }: DollarInputProps,
    ref
  ) => {
    return (
      <NumberInputBase
        {...props}
        ref={ref}
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
  }
);

DollarInput.displayName = 'DollarInput';

export default DollarInput;
