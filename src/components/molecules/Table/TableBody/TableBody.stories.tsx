import { Table } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { Data } from 'src/components/organisms/Table/Table.stories';
import type { TableBodyProps } from './TableBody';
import TableBody from './TableBody';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Body',
  component: TableBody
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TableBody>;

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein
  };
};

const rows: readonly Data[] = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
];
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableBodyProps<Data>> = (args) => {
  return (
    <Table>
      <TableBody {...args} />
    </Table>
  );
};

export const DefaultTableBody = Template.bind({});
DefaultTableBody.args = {
  rows: rows as any,
  rowValues: ['calories', 'fat', 'carbs', 'protein']
};

export const WithEmptyRows = Template.bind({});
WithEmptyRows.args = {
  rows: rows as any,
  rowsPerPage: 15,
  buttons: [
    { label: 'first', variant: 'contained' },
    { label: 'second', variant: 'outlined' },
    { label: 'third', variant: 'text' }
  ]
};

export const WithOrderAsc = Template.bind({});
WithOrderAsc.args = {
  rows: rows as any,
  rowsPerPage: 15,
  order: 'asc',
  orderBy: 'name'
};

export const WithStringOrderDesc = Template.bind({});
WithStringOrderDesc.args = {
  rows: rows as any,
  rowsPerPage: 15,
  order: 'desc',
  orderBy: 'name'
};

export const WithNumberOrderDesc = Template.bind({});
WithNumberOrderDesc.args = {
  rows: rows as any,
  rowsPerPage: 15,
  order: 'desc',
  orderBy: 'calories',
  showCheckbox: false
};
