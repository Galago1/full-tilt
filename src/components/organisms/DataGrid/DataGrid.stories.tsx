import { useDemoData } from '@mui/x-data-grid-generator';
import type { ComponentMeta, Story } from '@storybook/react';
import type { DataGridProps } from './DataGrid';
import DataGrid from './DataGrid';
import { GridToolbar } from '@mui/x-data-grid-premium';
import { MEMBERS_DATA, STATE_OF_DATA } from '.';
import DatagridFooter from './DatagridFooter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Data Grid',
  component: DataGrid
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DataGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DataGridProps> = (args) => {
  return <DataGrid {...args} />;
};
const Employee: Story<DataGridProps> = (args) => {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 1000,
    // maxColumns: 10,
    editable: true
  });
  return <DataGrid {...args} {...data} loading={data.rows.length === 0} />;
};

const Commodity: Story<DataGridProps> = (args) => {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1,
    // maxColumns: 10,
    editable: true
  });
  return (
    <DataGrid
      {...args}
      {...data}
      loading={loading}
      components={{ Toolbar: GridToolbar, Footer: DatagridFooter }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export const LoadingDataGrid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoadingDataGrid.args = {
  loading: true,
  rows: [],
  columns: []
};
export const EmptyDataGrid = Template.bind({});
EmptyDataGrid.args = {
  rows: [],
  columns: []
};

export const StateOfDataGrid = Template.bind({});
StateOfDataGrid.args = {
  ...STATE_OF_DATA
};

export const CommodityDataGrid = Commodity.bind({});
CommodityDataGrid.args = {};

export const EmployeeDataGrid = Employee.bind({});
EmployeeDataGrid.args = {};

export const MembersDataGrid = Template.bind({});
MembersDataGrid.args = {
  ...MEMBERS_DATA
};
