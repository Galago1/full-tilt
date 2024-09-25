import { Table, TableBody, TableRow } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import Chip from 'src/components/atoms/Chip/Chip';
import type { TableCellProps } from './TableCell';
import TableCell from './TableCell';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Cell',
  component: TableCell
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TableCell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TableCellProps<any>> = (args) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell {...args} />
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const TextCell = Template.bind({});
TextCell.args = {
  align: 'right',
  typographyProps: {
    component: 'span',
    variant: 'textSmRegular',
    fontWeight: 'light',
    children: 'row.calories'
  }
};

export const ChipCell = Template.bind({});
ChipCell.args = {
  align: 'right',
  typographyProps: {
    component: 'span',
    variant: 'textSmRegular',
    fontWeight: 'light',
    children: <Chip label={'asdcads'} />
  }
};
