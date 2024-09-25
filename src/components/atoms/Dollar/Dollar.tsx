import { NumericFormat, NumericFormatProps } from 'react-number-format';

export interface DollarProps extends NumericFormatProps {
  amount: number;
}

const Dollar = ({ amount, ...props }: DollarProps) => {
  return (
    <NumericFormat
      value={amount}
      displayType={'text'}
      thousandSeparator={true}
      decimalScale={2}
      fixedDecimalScale={true}
      prefix={'$'}
      valueIsNumericString
      {...props}
    />
  );
};
export default Dollar;
