import { Box, Grid } from '@mui/material';
import { ClockIcon } from '@mui/x-date-pickers';
import { Meta, Story } from '@storybook/react';
import { useRef } from 'react';
import Chip from 'src/components/atoms/Chip/Chip';
import { AvatarAndText, SelectInput } from 'src/components/molecules';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { testKanbanInitialData as initialData } from '../Kanban/helpers';
import KanbanBoard, { KanbanBoardProps } from './KanbanBoard';

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
  title: 'organisms/KanbanBoard',
  component: KanbanBoard
} as Meta;

const Template: Story<KanbanBoardProps> = (args) => (
  <Box
    sx={{
      width: '100%',
      // height: '90vh'
      height: '100%'
    }}
  >
    <KanbanBoard {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  data: initialData.data,
  disableReduceColumns: true,
  slots: initialData.slots
};

export const HideAdd = Template.bind({});
HideAdd.args = {
  data: initialData.data,
  showAdd: false,
  slots: initialData.slots
};

export const DisableMoveColumn = Template.bind({});
DisableMoveColumn.args = {
  data: initialData.data,
  disableMoveColumn: true,
  moveCard: (a: any, b: any) => {},
  slots: initialData.slots,
  statusDropdownListItems: statusDropdownListItemsDefault
};

const CustomColumnsTemplate: Story<KanbanBoardProps> = (args) => {
  const ref = useRef<any>();
  const finalArgs: KanbanBoardProps = {
    ...args,
    slots: {
      ...initialData.slots,
      kanbanHeaderProps: {
        slots: {
          formikConfig: {
            initialValues: {
              selectedTeam: 'Engineering Team',
              selectedType: 'Integration'
            },
            onSubmit: () => {}
          },

          fieldAttributes: {
            component: SelectInput,
            name: 'teams',
            options: [
              { value: '1', label: { value: 'Engineering Team' } },
              { value: '2', label: { value: 'Design Team' } },
              { value: 'all', label: { value: 'All Teams' } }
            ],
            onChange: (e: any) => {
              const kanbanData = ref.current?.kanbanData();
              return kanbanData.handleTeamChange(e);
            },
            defaultOptionLabel: 'All Teams',
            defaultValue: 'all',
            sx: {
              maxWidth: 180,
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: 8
              },
              '& .MuiSvgIcon-root': {
                width: 16,
                height: 16,
                right: 12,
                fontSize: 16,
                position: 'absolute',
                pointerEvents: 'none'
              }
            }
          }
        }
      }
    }
  };

  return <KanbanBoard {...finalArgs} ref={ref} />;
};

export const CustomColumns = CustomColumnsTemplate.bind({});
CustomColumns.args = {
  data: initialData.data,
  disableMoveColumn: true,
  moveCard: (a: any, b: any) => {},

  statusDropdownListItems: statusDropdownListItemsDefault
};
