import { Box, Grid } from '@mui/material';
import { ClockIcon } from '@mui/x-date-pickers';
import { Meta, Story } from '@storybook/react';
import { useRef } from 'react';
import Chip from 'src/components/atoms/Chip/Chip';
import { AvatarAndText } from 'src/components/molecules';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import Kanban, { KanbanProps } from './Kanban';
import {
  testKanbanInitialData as initialData,
  testKanbanDataGridProps
} from './helpers';

const image =
  'https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg';

const statusDropdownListItemsDefault: DropdownListItem[] = [
  {
    menuItemProps: {
      sx: { padding: (theme) => theme.spacing(1.375, 2) },
      children: (
        <>
          <Grid container>
            <Grid item flex={1}>
              <AvatarAndText
                title={'Bill Gates'}
                avatarProps={{ src: image }}
              />
            </Grid>

            <Grid item>
              <Chip label="9h/w" icon={<ClockIcon />} color="success" />/
            </Grid>
          </Grid>
        </>
      )
    }
  }
];

export default {
  title: 'organisms/Kanban',
  component: Kanban
} as Meta;

const Template: Story<KanbanProps> = (args) => <Kanban {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: initialData.data,
  disableReduceColumns: true,
  slots: {
    tablePaginationWaveProps: { offset: 0 },
    dataGridProps: testKanbanDataGridProps
  }
};

export const HideAdd = Template.bind({});
HideAdd.args = {
  data: initialData.data,
  showAdd: false,
  slots: {
    tablePaginationWaveProps: { offset: 0 },
    dataGridProps: testKanbanDataGridProps
  }
};

export const DisableMoveColumn = Template.bind({});
DisableMoveColumn.args = {
  data: initialData.data,
  disableMoveColumn: true,
  moveCard: (a: any, b: any) => {},
  slots: {
    tablePaginationWaveProps: { offset: 0 },
    dataGridProps: testKanbanDataGridProps
  },
  statusDropdownListItems: statusDropdownListItemsDefault
};

const CustomColumnsTemplate: Story<KanbanProps> = (args) => {
  const ref = useRef<any>();
  const finalArgs: KanbanProps = {
    ...args,
    slots: {
      ...initialData.slots
    }
  };

  return <Kanban {...finalArgs} ref={ref} />;
};

export const CustomColumns = CustomColumnsTemplate.bind({});
CustomColumns.args = {
  data: initialData.data,
  disableMoveColumn: true,
  moveCard: (a: any, b: any) => {},
  statusDropdownListItems: statusDropdownListItemsDefault
};
