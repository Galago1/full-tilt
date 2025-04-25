import { Grid, IconButton, Theme, Typography } from '@mui/material';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import Chip from 'src/components/atoms/Chip/Chip';
import { Dropdown } from 'src/components/molecules';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
const mockIconButtonWithIconArgs: DropdownProps = {
  iconButtonProps: {
    size: 'small'
  },
  label: <div style={{ width: 16, height: 16 }} />,
  dropdownListItems: []
};
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { HeadCell } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { DotsHorizontalIcon } from 'src/components/particles/theme/icons/General/dots-horizontal';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { CircleIcon } from 'src/components/particles/theme/icons/Shapes/circle';
import { CalendarIcon } from 'src/components/particles/theme/icons/Time/calendar';
import {
  DotIcon,
  NoEstimateIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { buttonHoverStyles } from 'src/utils/buttonHoverStyles';
import { KanbanProps } from './Kanban';
import { DataGridProps } from '../DataGrid/DataGrid';

export const testKanbanDataGridProps: Omit<DataGridProps, 'rows'> = {
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

const image =
  'https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg';

const standardButtonProps: ButtonProps = {
  color: 'secondary',
  variant: 'outlined',
  sx: {
    padding: (theme: Theme) => theme.spacing(3 / 8, 8 / 8),
    width: 'auto',
    fontSize: '0.875rem',
    lineHeight: 1.375,
    '&': { minWidth: 'auto' }
  }
};

export const testKanbanInitialData: Partial<KanbanProps> = {
  data: {
    title: 'To-Dos',
    columns: [
      {
        id: '1',
        title: 'Soon',
        titleColor: 'grey.100',
        cards: [],
        showDragOrAdd: true,
        initialNoun: 'Task',
        subsequentNoun: 'Point',
        kanbanColumnProps: {
          slots: {
            addCardButtonProps: {
              ...standardButtonProps,
              variant: 'text',
              startIcon: <PlusIcon sx={buttonHoverStyles} />,
              label: 'Card',
              sx: {
                mt: 1,

                ...standardButtonProps.sx,
                borderRadius: (theme) => theme.borderRadius.md,
                '&:hover': {
                  backgroundColor: (theme) =>
                    `${theme.palette.grey[100]} !important`
                }
              }
            }
          }
        },
        headerAvatarAndTextProps: {
          leftIcon: <PlusIcon sx={buttonHoverStyles} />,
          leftIconGridProps: { display: 'flex' }
        },
        headerEndComp: (
          <Grid container alignItems={'center'} gap={0}>
            <Grid item>
              <Dropdown {...mockIconButtonWithIconArgs} />
            </Grid>
            <Grid item>
              <IconButton>
                <PlusIcon sx={buttonHoverStyles} />
              </IconButton>
            </Grid>
          </Grid>
        )
      },
      {
        id: '2',
        showDragOrAdd: true,
        title: 'In Progress',
        titleColor: 'cyan.500',
        initialNoun: 'Task',
        subsequentNoun: 'Point',
        headerAvatarAndTextProps: {
          leftIcon: <PlusIcon sx={buttonHoverStyles} />,
          leftIconGridProps: { display: 'flex' }
        },
        headerEndComp: (
          <Grid container alignItems={'center'} gap={0}>
            <Grid item>
              <Dropdown {...mockIconButtonWithIconArgs} />
            </Grid>
            <Grid item>
              <IconButton>
                <PlusIcon sx={buttonHoverStyles} />
              </IconButton>
            </Grid>
          </Grid>
        ),
        cards: [
          {
            id: '1',
            status: 'in_progress',
            // title: 'API Integration',
            // description: 'Integrate the new payment gateway API.',
            title: 'Some new title',
            description: 'Some description for this new task',
            type: 'Integration',
            summary: '',
            assignee: 'John Cena',
            priority: 'high',
            dueDate: new Date(),
            actionTimeline: 'Immediate',
            updated: 'June 19, 2024',
            created: 'May 30, 2024',
            team: 'Engineering Team',
            estimate: 3,
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg',
            headerActionsAvatarAndTextProps: {
              alignItems: 'center',
              leftComponent: (
                <IconButton
                  sx={{ borderRadius: (theme) => theme.borderRadius.md }}
                >
                  <CircleIcon sx={buttonHoverStyles} />
                </IconButton>
              ),
              title: 'PROJ-1',
              titleTypography: {
                variant: 'textSmMedium',
                color: 'text.secondary'
              },
              textGridItemProps: { flex: 1 },
              textContainerGridItemProps: { flex: 1 },
              children: (
                <IconButton
                  sx={{ borderRadius: (theme) => theme.borderRadius.md }}
                >
                  <Avatar
                    src={image}
                    sx={{
                      width: 20,
                      height: 20,
                      '&': {
                        fontSize: '14px !important'
                      }
                    }}
                  />
                </IconButton>
              )
            },
            footerComponent: (
              <Grid container gap={1}>
                <Grid item>
                  <Button
                    {...standardButtonProps}
                    startIcon={<DotsHorizontalIcon sx={buttonHoverStyles} />}
                    useSquareStyles={false}
                    sx={{
                      ...standardButtonProps.sx,
                      '& .MuiButton-startIcon': {
                        marginRight: 0
                      }
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    {...standardButtonProps}
                    startIcon={<NoEstimateIcon sx={buttonHoverStyles} />}
                    useSquareStyles={false}
                    sx={{
                      ...standardButtonProps.sx,
                      '& .MuiButton-startIcon': {
                        marginRight: 0
                      }
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    {...standardButtonProps}
                    label="Mar 15"
                    startIcon={<CalendarIcon sx={buttonHoverStyles} />}
                  />
                </Grid>

                <Grid item>
                  <Chip
                    label="Bug"
                    color="secondary"
                    variant="outlined"
                    icon={
                      <DotIcon
                        fill={'red'}
                        height={8}
                        width={8}
                        sx={{
                          height: '10px !important',
                          width: '10px !important'
                        }}
                      />
                    }
                    sx={{
                      borderRadius: (theme) => theme.borderRadius.md,
                      backgroundColor: 'transparent',
                      '&:hover': { backgroundColor: 'grey.100' }
                    }}
                  />
                </Grid>

                <Grid item>
                  <Chip
                    label="Improvement"
                    color="secondary"
                    variant="outlined"
                    icon={
                      <DotIcon
                        fill={'blue'}
                        height={8}
                        width={8}
                        sx={{
                          height: '10px !important',
                          width: '10px !important'
                        }}
                      />
                    }
                    sx={{
                      borderRadius: (theme) => theme.borderRadius.md,
                      backgroundColor: 'transparent',
                      '&:hover': { backgroundColor: 'grey.100' }
                    }}
                  />
                </Grid>
              </Grid>
            )
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
            estimate: 2,
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
            estimate: 1,
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
            estimate: 3,
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg'
          }
        ],
        kanbanColumnProps: {
          slots: {
            addCardButtonProps: {
              ...standardButtonProps,
              variant: 'text',
              startIcon: <PlusIcon sx={buttonHoverStyles} />,
              label: 'Card',
              sx: {
                mt: 1,

                ...standardButtonProps.sx,
                borderRadius: (theme) => theme.borderRadius.md,
                '&:hover': {
                  backgroundColor: (theme) =>
                    `${theme.palette.grey[100]} !important`
                }
              }
            }
          }
        }
      },
      {
        id: '3',
        showDragOrAdd: true,
        title: 'Blocked',
        titleColor: '#D92D20',
        initialNoun: 'Task',
        subsequentNoun: 'Point',
        headerAvatarAndTextProps: {
          leftIcon: <PlusIcon sx={buttonHoverStyles} />,
          leftIconGridProps: { display: 'flex' }
        },
        headerEndComp: (
          <Grid container alignItems={'center'} gap={0}>
            <Grid item>
              <Dropdown {...mockIconButtonWithIconArgs} />
            </Grid>
            <Grid item>
              <IconButton>
                <PlusIcon sx={buttonHoverStyles} />
              </IconButton>
            </Grid>
          </Grid>
        ),
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
            estimate: 1,
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
            estimate: 2,
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
            estimate: 2,
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg'
          }
        ],
        kanbanColumnProps: {
          slots: {
            addCardButtonProps: {
              ...standardButtonProps,
              size: 'small',
              variant: 'text',
              startIcon: <PlusIcon sx={buttonHoverStyles} />,
              label: 'Card',
              sx: {
                mt: 1,

                ...standardButtonProps.sx,
                borderRadius: (theme) => theme.borderRadius.md,
                '&:hover': {
                  backgroundColor: (theme) =>
                    `${theme.palette.grey[100]} !important`
                }
              }
            }
          }
        }
      },
      {
        id: '4',
        showDragOrAdd: true,
        title: 'Done',
        titleColor: '#079455',
        initialNoun: 'Task',
        subsequentNoun: 'Point',
        headerAvatarAndTextProps: {
          leftIcon: <PlusIcon sx={buttonHoverStyles} />,
          leftIconGridProps: { display: 'flex' }
        },
        headerEndComp: (
          <Grid container alignItems={'center'} gap={0}>
            <Grid item>
              <Dropdown {...mockIconButtonWithIconArgs} />
            </Grid>
            <Grid item>
              <IconButton>
                <PlusIcon sx={buttonHoverStyles} />
              </IconButton>
            </Grid>
          </Grid>
        ),
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
            estimate: 1,
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
            estimate: 2,
            imageUrl:
              'https://upload.wikmedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg'
          }
        ],
        kanbanColumnProps: {
          slots: {
            addCardButtonProps: {
              ...standardButtonProps,
              variant: 'text',
              startIcon: <PlusIcon sx={buttonHoverStyles} />,
              label: 'Card',
              sx: {
                mt: 1,

                ...standardButtonProps.sx,
                borderRadius: (theme) => theme.borderRadius.md,
                '&:hover': {
                  backgroundColor: (theme) =>
                    `${theme.palette.grey[100]} !important`
                }
              }
            }
          }
        }
      }
    ]
  },

  slots: {
    tablePaginationWaveProps: { offset: 0 },
    dataGridProps: testKanbanDataGridProps
  }
};

// const statuses: any = {
//   todo: 'To Do',
//   in_progress: 'In Progress',
//   blocked: 'Blocked',
//   done: 'Done'
// };

export const statusDropdownListItemsDefault: DropdownListItem[] = [
  {
    menuItemProps: {
      sx: { padding: (theme) => theme.spacing(1.375, 2) },
      children: <Typography variant="textSmRegular">Soon</Typography>
    }
  },
  {
    menuItemProps: {
      sx: { padding: (theme) => theme.spacing(1.375, 2) },
      children: <Typography variant="textSmRegular">In Progress</Typography>
    }
  },
  {
    menuItemProps: {
      sx: { padding: (theme) => theme.spacing(1.375, 2) },
      children: <Typography variant="textSmRegular">Done</Typography>
    }
  },
  {
    menuItemProps: {
      sx: { padding: (theme) => theme.spacing(1.375, 2) },
      children: <Typography variant="textSmRegular">Blocked</Typography>
    }
  }
];

export const tableHeadCellsDefault: readonly HeadCell<{
  summary: JSX.Element;
  assignee: JSX.Element;
  priority: JSX.Element;
  status: JSX.Element;
  dueDate: JSX.Element;
  updated: JSX.Element;
  created: JSX.Element;
}>[] = [
  {
    id: 'summary',
    label: 'Summary',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'assignee',
    label: 'Assignee',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'priority',
    label: 'Priority',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'status',
    label: 'Status',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'dueDate',
    label: 'Due Date',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'updated',
    label: 'Updated',
    disablePadding: false,
    alignRight: false
  },
  {
    id: 'created',
    label: 'Created',
    disablePadding: false,
    alignRight: false
  }
];

export const rowValuesDefault = [
  'summary',
  'assignee',
  'priority',
  'status',
  'dueDate',
  'updated',
  'created'
];
