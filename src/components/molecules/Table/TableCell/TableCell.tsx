import { Typography, TypographyProps } from '@mui/material';
import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps
} from '@mui/material';

export interface TableCellProps extends MuiTableCellProps {
  /**
   * Typography Props
   */
  typographyProps: TypographyProps<any>;
  /**
   * children
   */
  children?: any;
}

const TableCell = ({ typographyProps, ...props }: TableCellProps) => {
  const { children, ...typographyChildren } = typographyProps;
  return (
    <MuiTableCell {...props}>
      <Typography {...typographyChildren}>{children}</Typography>
    </MuiTableCell>
  );
};

export default TableCell;
