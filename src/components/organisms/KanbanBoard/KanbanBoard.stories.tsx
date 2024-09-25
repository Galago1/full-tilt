import { Box, Grid } from '@mui/material';
import { ClockIcon } from '@mui/x-date-pickers';
import { Meta, Story } from '@storybook/react';
import { useRef } from 'react';
import Chip from 'src/components/atoms/Chip/Chip';
import { AvatarAndText, SelectInput } from 'src/components/molecules';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { DataGridProps } from '../DataGrid/DataGrid';
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

const dataGridProps: Omit<DataGridProps, 'rows'> = {
  hideFooter: true,
  hideFooterPagination: true,
  pageSize: 100,
  columns: [
    { field: 'id', headerName: 'ID', width: 90, type: 'string' },

    {
      editable: false,
      field: 'atAGlance',
      headerName: 'Kanban',
      headerAlign: 'left',
      align: 'left',
      width: 180
    }
  ],
  columnVisibilityModel: { id: false }
};

const initialData: Partial<KanbanBoardProps> = {
  data: {
    title: 'To-Dos',
    columns: [
      { id: '1', title: 'Soon', titleColor: 'grey.100', cards: [] },
      {
        id: '2',
        title: 'In Progress',
        titleColor: 'cyan.500',
        cards: [
          {
            id: '1',
            status: 'in_progress',
            // title: 'API Integration',
            // description: 'Integrate the new payment gateway API.',
            title:
              'Breaking the UI with thisIncrediblyLongUnbreakableWordExample',
            description:
              'ThisIsAnExtremelyLongWordThatShouldTestTheBreakingPointOfAnyUIComponentWithoutAnySpacesInBetweenWhichCanCauseLayoutIssuesInCertainDesigns. Check out this link: https://www.thisisaverylonglinktotestthebreakingoftheuilayout.com/some/really/long/path/to/a/resource',
            type: 'Integration',
            summary:
              'ThisIsAnExtremelyLongWordThatShouldTestTheBreakingPointOfAnyUIComponentWithoutAnySpacesInBetweenWhichCanCauseLayoutIssuesInCertainDesigns. Check out this link: https://www.thisisaverylonglinktotestthebreakingoftheuilayout.com/some/really/long/path/to/a/resource',
            assignee: 'John Cena',
            priority: 'high',
            dueDate: new Date(),
            actionTimeline: 'Immediate',
            updated: 'June 19, 2024',
            created: 'May 30, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg'
          },
          {
            id: '2',
            status: 'in_progress',
            title: 'UI Design',
            description: 'Design the new user profile interface.',
            type: 'Design',
            summary: 'Design user profile UI',
            assignee: 'The Rock',
            priority: 'medium',
            dueDate: new Date(),
            actionTimeline: 'Long Term',
            updated: 'June 6, 2024',
            created: 'May 25, 2024',
            team: 'Design Team',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg'
          },
          {
            id: '3',
            status: 'in_progress',
            title: 'Backend Refactoring',
            description: 'Refactor backend services for better performance.',
            type: 'Refactoring',
            summary: 'Optimize backend services',
            assignee: 'Stone Cold Steve Austin',
            priority: 'high',
            dueDate: new Date(),
            actionTimeline: 'Short Term',
            updated: 'June 20, 2024',
            created: 'June 1, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://content.api.news/v3/images/bin/d68d23650a0aa70e2cd2246f528a2a69'
          },
          {
            id: '4',
            status: 'in_progress',
            title: 'Feature Testing',
            description: 'Implement automated testing for new features.',
            type: 'Testing',
            summary: 'Test new features to ensure functionality.',
            assignee: 'John Cena',
            priority: 'medium',
            dueDate: new Date(),
            actionTimeline: 'Long Term',
            updated: 'June 22, 2024',
            created: 'June 12, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg'
          }
        ]
      },
      {
        id: '3',
        title: 'Blocked',
        titleColor: '#D92D20',
        cards: [
          {
            id: '5',
            status: 'blocked',
            title: 'Server Setup',
            description: 'Set up the new server environment.',
            type: 'Infrastructure',
            summary: 'Setup server environment for new deployments.',
            assignee: 'Ric Flair',
            priority: 'low',
            dueDate: new Date(),
            actionTimeline: 'Immediate',
            updated: 'May 23, 2024',
            created: 'May 20, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://pbs.twimg.com/profile_images/888446536027443201/T05brthW_400x400.jpg'
          },
          {
            id: '6',
            status: 'blocked',
            title: 'Database Migration',
            description: 'Migrate data to a new database server.',
            type: 'Migration',
            summary: 'Migrate database',
            assignee: 'John Cena',
            priority: 'medium',
            dueDate: new Date(),
            actionTimeline: 'Long Term',
            updated: 'June 18, 2024',
            created: 'June 10, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg'
          },
          {
            id: '7',
            status: 'blocked',
            title: 'Frontend Bug Fixes',
            description: 'Fix UI bugs reported in the frontend application.',
            type: 'Bug Fixing',
            summary: 'Address UI bugs for improved user experience.',
            assignee: 'The Rock',
            priority: 'high',
            dueDate: new Date(),
            actionTimeline: 'Immediate',
            updated: 'June 23, 2024',
            created: 'June 15, 2024',
            team: 'Design Team',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg'
          }
        ]
      },
      {
        id: '4',
        title: 'Done',
        titleColor: '#079455',
        cards: [
          {
            id: '8',
            status: 'done',
            title: 'User Authentication',
            description: 'Implement user authentication module.',
            type: 'Feature',
            summary: 'Implement authentication module',
            assignee: 'Stone Cold Steve Austin',
            priority: 'high',
            dueDate: new Date(),
            actionTimeline: 'Short Term',
            updated: 'May 31, 2024',
            created: 'May 15, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://content.api.news/v3/images/bin/d68d23650a0aa70e2cd2246f528a2a69'
          },
          {
            id: '9',
            status: 'done',
            title: 'Mobile App Integration',
            description: 'Integrate backend services with the mobile app.',
            type: 'Integration',
            summary:
              'Integrate backend services for seamless mobile app experience.',
            assignee: 'The Rock',
            priority: 'medium',
            dueDate: new Date(),
            actionTimeline: 'Long Term',
            updated: 'June 12, 2024',
            created: 'June 5, 2024',
            team: 'Engineering Team',
            imageUrl:
              'https://upload.wikmedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg'
          }
        ]
      }
    ]
  },

  slots: {
    tablePaginationWaveProps: { offset: 0 },
    dataGridProps,
    addCardDrawerProps: {
      assignees: [
        { value: '1', label: { value: 'The Rock' } },
        { value: '2', label: { value: 'Ric Flair' } },
        { value: '3', label: { value: 'John Cena' } },
        { value: '4', label: { value: 'Stone Cold Steve Austin' } }
      ],
      teams: [
        { value: '1', label: { value: 'Engineering Team' } },
        { value: '2', label: { value: 'Design Team' } }
      ],
      statuses: [
        { value: 'todo', label: { value: 'To-Do' } },
        { value: 'in_progress', label: { value: 'In Progress' } },
        { value: 'done', label: { value: 'Done' } },
        { value: 'blocked', label: { value: 'Blocked' } }
      ],
      priorities: [
        { value: 'low', label: { value: 'Low' } },
        { value: 'medium', label: { value: 'Medium' } },
        { value: 'high', label: { value: 'High' } }
      ],
      actionTimelines: [
        { value: 'immediate', label: { value: 'Immediate' } },
        { value: 'short', label: { value: 'Short Term' } },
        { value: 'long', label: { value: 'Long Term' } }
      ]
    }
  }
};

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
