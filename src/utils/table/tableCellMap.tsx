import TableCell from 'src/components/molecules/Table/TableCell/TableCell';

export const rowsMap = <C extends React.ElementType>(
  row: { [key in keyof C]: string | number },
  rowValues: string[],
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit' = 'right',
  whiteSpace: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' = 'nowrap'
): JSX.Element[] => {
  return rowValues.map((rowValue, index: number) => {
    const children = (row as unknown as any)[rowValue];
    return (
      <TableCell
        key={`table-cell-index[${index}]`}
        align={align}
        onClick={(row as unknown as any).onClick as any}
        typographyProps={{
          component: 'span',
          variant: 'textSmRegular',
          fontWeight: 'light',
          whiteSpace,
          children
        }}
      />
    );
  });
};
