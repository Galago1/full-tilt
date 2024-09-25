import { ChangeEvent, MouseEvent, useState } from 'react';
import { TableOrder } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { Tbase } from 'src/components/organisms/Table/Table';

const useSortableTable = <T extends Tbase>(
  rows: T[],
  initialRowsPerPage: number = 5
) => {
  const [order, setOrder] = useState<TableOrder>('asc');
  const [orderBy, setOrderBy] = useState<keyof T>();
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name ?? n.id) as string[];
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleTableRowClick = (event: MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    // Select new
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      // Select existing, first
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      // Select existing, last
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      // Select existing, middle
    } else {
      // if (selectedIndex > 0)
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return {
    handleChangePage,
    handleTableRowClick,
    handleSelectAllClick,
    handleRequestSort,
    handleChangeRowsPerPage,
    page,
    selected,
    order,
    orderBy,
    rowsPerPage
  };
};

export default useSortableTable;
