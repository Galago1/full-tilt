import type { ComponentMeta, Story } from '@storybook/react';
import ThemeProvider from 'src/components/particles/theme';
import type { TablePaginationWaveProps } from './TablePaginationWave';
import TablePaginationWave from './TablePaginationWave';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Table/Table Pagination Wave',
  component: TablePaginationWave
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof TablePaginationWave>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TablePaginationWaveProps> = (args) => (
  <ThemeProvider>
    <TablePaginationWave {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
