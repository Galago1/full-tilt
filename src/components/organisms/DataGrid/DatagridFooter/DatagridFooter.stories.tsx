import { ComponentMeta, Story } from '@storybook/react';
import DatagridFooter, { DatagridFooterProps } from './DatagridFooter';
import Datagrid from '../DataGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Data Grid/Datagrid Footer',
  component: DatagridFooter
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DatagridFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DatagridFooterProps> = (args) => (
  <Datagrid
    rows={[]}
    columns={[]}
    components={{ Footer: DatagridFooter }}
    componentsProps={{ footer: args }}
  ></Datagrid>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const LeftPagination = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftPagination.args = {
  slots: {
    customPaginationProps: {
      paginationPlaced: 'left'
    }
  }
};

export const CenterPagination = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CenterPagination.args = {
  slots: {
    customPaginationProps: {
      paginationPlaced: 'center'
    }
  }
};
