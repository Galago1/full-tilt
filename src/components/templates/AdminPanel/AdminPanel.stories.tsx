import type { ComponentMeta, Story } from '@storybook/react';
import { TableOrder } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { TableDefault } from 'src/components/organisms/Table/Table.stories';
import ThemeProvider from '../../particles/theme';

import type { AdminPanelProps } from './AdminPanel';
import AdminPanel from './AdminPanel';

interface CellUser {}
interface CellCollection {}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Admin Panel',
  component: AdminPanel,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof AdminPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AdminPanelProps<CellUser, CellCollection>> = (args) => {
  return (
    <ThemeProvider isDarkMode={false}>
      <AdminPanel {...args} />;
    </ThemeProvider>
  );
};

export const AdminPanelTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AdminPanelTemplate.args = {
  userTableProps: {
    ...(TableDefault.args as any),
    sx: {
      border: (theme) => `1px solid ${theme.palette.grey[200]}`
    },
    tableToolbarProps: {
      ...(TableDefault.args as any).tableToolbarProps,
      sx: {
        borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
        borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
        borderRight: (theme) => `1px solid ${theme.palette.grey[200]}`,
        pt: 3.5,
        pb: 2.75,
        borderTopLeftRadius: (theme) => theme.spacing(1.5),
        borderTopRightRadius: (theme) => theme.spacing(1.5)
      },
      avatarAndTextProps: {
        ...(TableDefault.args as any).tableToolbarProps.avatarAndTextProps,
        sx: { '& .MuiGrid-item': { p: '0!important' } },
        title: 'All The Users',
        titleTypography: {
          variant: 'textLgSemibold',
          pb: 0.5
        },
        subtitle: 'Manage your users or view account.',
        subtitleTypography: { variant: 'textSmRegular' },
        chipProps: {
          label: `${
            (TableDefault.args as any).tableBodyProps.rows.length
          } Users`,
          sx: { ml: (theme) => theme.spacing(2) }
        }
      },
      tooltipProps: undefined
    },
    tablePaginationProps: {
      ...(TableDefault.args as any).tablePaginationProps,
      sx: {
        borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
        borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}`,
        borderRight: (theme) => `1px solid ${theme.palette.grey[200]}`,
        py: 2.5,
        px: 1.5,
        borderBottomLeftRadius: (theme) => theme.spacing(1.5),
        borderBottomRightRadius: (theme) => theme.spacing(1.5)
      }
    }
  },
  collectionTableProps: {
    rows: [],
    tableHeaderProps: {
      headCells: [],
      order: 'desc',
      orderBy: undefined
    },
    tableBodyProps: {
      order: '' as TableOrder,
      orderBy: undefined,
      page: 0,
      rows: [],
      rowValues: [],
      buttons: []
    },
    tablePaginationProps: {
      count: 0,
      page: 0,
      buttonProps: {}
    },
    tableToolbarProps: {
      avatarAndTextProps: {}
    },
    boxProps: {}
  }
};
