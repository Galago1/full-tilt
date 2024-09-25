import { Table } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { HeadCell, TableHeaderProps } from './TableHeader';
import TableHeader from './TableHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Header',
  component: TableHeader
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TableHeader>;

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: 'name',
    alignRight: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
    tableSortLabelProps: { onClick: undefined, hideSortIcon: true }
  },
  {
    id: 'calories',
    alignRight: true,
    disablePadding: false,
    label: 'Calories'
  },
  {
    id: 'fat',
    alignRight: true,
    disablePadding: false,
    label: 'Fat (g)'
  },
  {
    id: 'carbs',
    alignRight: true,
    disablePadding: false,
    label: 'Carbs (g)'
  },
  {
    id: 'protein',
    alignRight: true,
    disablePadding: false,
    label: 'Protein (g)'
  }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableHeaderProps<Data>> = (args) => {
  return (
    <Table>
      <TableHeader {...args} />
    </Table>
  );
};

export const DefaultTableHeader = Template.bind({});
DefaultTableHeader.args = {
  headCells,
  orderBy: 'calories'
};

export const WithoutCheeckbox = Template.bind({});
WithoutCheeckbox.args = {
  headCells,
  showCheckbox: false
};

export const IndeterminateCheeckbox = Template.bind({});
IndeterminateCheeckbox.args = {
  headCells,
  numSelected: 2,
  rowCount: 3
};

export const CheckedCheeckbox = Template.bind({});
CheckedCheeckbox.args = {
  headCells,
  numSelected: 3,
  rowCount: 3
};
