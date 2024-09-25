import TableCell, {
  TableCellProps
} from 'src/components/molecules/Table/TableCell/TableCell';
import ButtonList, {
  ButtonListButton
} from 'src/components/molecules/ButtonList/ButtonList';

export const actionsMap = <C extends React.ElementType>(
  buttons: ButtonListButton[],
  cell: any
): JSX.Element => {
  const actionButtons = buttons.map((button) => ({
    ...button,
    onClick: (event: any) => button.onClick?.(event, cell)
  }));

  const props = {
    align: 'right',
    typographyProps: {
      component: 'span',
      variant: 'textSmRegular',
      fontWeight: 'light',
      children: (
        <ButtonList
          justifyContent={'flex-end'}
          flexWrap={'nowrap'}
          buttons={actionButtons}
        />
      )
    }
  } as TableCellProps;
  return <TableCell {...props} />;
};
