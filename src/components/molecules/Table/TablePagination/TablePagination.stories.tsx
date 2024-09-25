import type { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import type { TablePaginationProps } from './TablePagination';
import TablePagination from './TablePagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Pagination',
  component: TablePagination
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TablePagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TablePaginationProps> = (args) => {
  const [page, setPage] = useState(1);

  return (
    <TablePagination {...args} page={page} onChange={(a, b) => setPage(b)} />
  );
};

export const DefaultTablePagination = Template.bind({});
DefaultTablePagination.args = {
  count: 15,
  buttonProps: { variant: 'text', color: 'secondary' }
};

export const SquarePages = Template.bind({});
SquarePages.args = {
  shape: 'rounded',
  count: 15,
  buttonProps: { variant: 'outlined', color: 'secondary' }
};
