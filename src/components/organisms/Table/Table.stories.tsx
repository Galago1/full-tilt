import type { ComponentMeta, Story } from '@storybook/react';
import { DefaultTableBody } from 'src/components/molecules/Table/TableBody/TableBody.stories';
import { DefaultTableHeader } from 'src/components/molecules/Table/TableHeader/TableHeader.stories';
import { SquarePages } from 'src/components/molecules/Table/TablePagination/TablePagination.stories';
import { TableSnackbarProps } from 'src/components/molecules/Table/TableSnackbar/TableSnackbar';
import { DefaultTableSnackbar } from 'src/components/molecules/Table/TableSnackbar/TableSnackbar.stories';
import { DefaultTableToolbar } from 'src/components/molecules/Table/TableToolbar/TableToolbar.stories';
import type { TableProps, Tbase } from './Table';
import Table from './Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Table',
  component: Table
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Table>;

export interface Data extends Tbase {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableProps<Data>> = (args) => {
  return <Table {...args} />;
};

export const TableDefault = Template.bind({});
TableDefault.args = {
  tableBodyProps: { ...(DefaultTableBody.args as any) },
  tableHeaderProps: { ...(DefaultTableHeader.args as any) },
  tablePaginationProps: { ...(SquarePages.args as any) },
  tableToolbarProps: { ...(DefaultTableToolbar.args as any) },
  tableSnackbarProps: { ...(DefaultTableSnackbar.args as TableSnackbarProps) },
  rows: (DefaultTableBody.args as any).rows
};
