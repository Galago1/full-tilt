import { Box, Theme, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import { Avatar, Chip } from 'src/components/atoms';
import Dropdown from 'src/components/molecules/Dropdown/Dropdown';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { HeadCell } from 'src/components/molecules/Table/TableHeader/TableHeader';
import { DotsVerticalIcon } from 'src/components/particles/theme/icons/General/dots-vertical';
import { BatteryFullIcon } from 'src/components/particles/theme/icons/MediaAndDevices/battery-full';
import { BatteryLowIcon } from 'src/components/particles/theme/icons/MediaAndDevices/battery-low';
import { BatteryMidIcon } from 'src/components/particles/theme/icons/MediaAndDevices/battery-mid';
import { rowInitials } from 'src/utils/users/initials';

const statuses: any = {
  todo: 'To Do',
  in_progress: 'In Progress',
  blocked: 'Blocked',
  done: 'Done'
};

export const tableRowsFnDefault = (
  card: any,
  theme: Theme,
  isTruncated: boolean,
  setIsTruncated: Dispatch<SetStateAction<boolean>>,
  statusDropdownListItems: DropdownListItem[],
  handleEditCard: (card: any) => void
) => {
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncateText = (text: string, length: number) => {
    return isTruncated && text.length > length
      ? text.substring(0, length) + '...'
      : text;
  };

  const formatDate = (date: Date) => {
    return format(date, 'MMM dd, yyyy');
  };

  return {
    summary: (
      <Typography
        variant="textSmRegular"
        color="text.secondary"
        onClick={() => toggleTruncate()}
      >
        {truncateText(card.summary, 40)}
      </Typography>
    ),
    assignee: (
      <Box display={'flex'} alignItems={'center'}>
        <Avatar src={card.imageUrl}>
          {rowInitials({ name: card.assignee || '' })}
        </Avatar>
        <Typography
          variant="textSmRegular"
          color="text.secondary"
          marginLeft={12 / 8}
        >
          {card.assignee}
        </Typography>
      </Box>
    ),
    priority: (
      <Box display={'flex'} alignItems={'center'}>
        <Box
          sx={{
            border: theme.border.userProfile,
            borderRadius: theme.borderRadius.md,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {card.priority === 'high' && (
            <BatteryFullIcon sx={{ width: 20, height: 20 }} />
          )}
          {card.priority === 'medium' && (
            <BatteryMidIcon sx={{ width: 20, height: 20 }} />
          )}
          {card.priority === 'low' && (
            <BatteryLowIcon sx={{ width: 20, height: 20 }} />
          )}
        </Box>
      </Box>
    ),
    status: (
      <Chip
        label={
          // <Box display={'flex'} alignItems={'center'}>
          //   <Dropdown
          //     label={card.status}
          //     buttonProps={{
          //       endIcon: <ChevronDownIcon sx={{ width: 12, height: 12 }} />,
          //       variant: 'text'
          //     }}
          //     dropdownListItems={statusDropdownListItems}
          //     dropdownMenuProps={{}}
          //   />
          // </Box>
          statuses[card.status]
        }
        clickable={false}
        sx={{
          backgroundColor:
            card.status === 'todo'
              ? 'grey.100'
              : card.status === 'in_progress'
              ? 'cyan.50'
              : card.status === 'done'
              ? 'success.50'
              : card.status === 'blocked'
              ? 'warning.50'
              : 'grey.100',
          '& .MuiButton-text': {
            color:
              card.status === 'todo'
                ? 'grey.700'
                : card.status === 'in_progress'
                ? 'cyan.700'
                : card.status === 'done'
                ? 'success.700'
                : card.status === 'blocked'
                ? 'error.700'
                : 'grey.100'
          }
        }}
      />
    ),
    dueDate: (
      <Typography variant="textSmRegular" color="text.secondary">
        {formatDate(card.dueDate)}
      </Typography>
    ),
    updated: (
      <Typography variant="textSmRegular" color="text.secondary">
        {card.updated}
      </Typography>
    ),
    created: (
      <Typography variant="textSmRegular" color="text.secondary">
        {card.created}
      </Typography>
    ),
    options: (
      <Dropdown
        label=""
        buttonProps={{
          startIcon: <DotsVerticalIcon sx={{ width: 20, height: 20 }} />
        }}
        dropdownListItems={[
          {
            menuItemProps: {
              sx: { padding: (theme) => theme.spacing(1.375, 2) },
              onClick: () => {
                handleEditCard(card);
              },
              children: (
                <Typography variant="textSmRegular">
                  Edit {card.noun ?? 'Card'}
                </Typography>
              )
            }
          },

          {
            menuItemProps: {
              sx: { padding: (theme) => theme.spacing(1.375, 2) },
              onClick: () => {
                handleEditCard(card);
              },
              children: (
                <Typography variant="textSmRegular">
                  Delete {card.noun ?? 'Card'}
                </Typography>
              )
            }
          }
        ]}
        dropdownMenuProps={{}}
      />
    )
  };
};

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
  options: JSX.Element;
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
  },
  {
    id: 'options',
    label: '',
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
  'created',
  'options'
];
