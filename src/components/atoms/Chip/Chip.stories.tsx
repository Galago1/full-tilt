import { Avatar, Box, IconButton, styled, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { CheckIcon } from 'src/components/particles/theme/icons/General/check';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { XCloseIcon } from 'src/components/particles/theme/icons/General/x-close';
import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';
import type { ChipProps } from './Chip';
import Chip from './Chip';

// Custom styled components
const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

const TaskRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

const DragHandle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#aaa',
  marginRight: 8
});

const TaskInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1
});

const DateInfo = styled(Typography)({
  fontSize: '0.875rem',
  color: '#888'
});

const TaskChip = styled(Chip)({
  marginLeft: 8,
  height: 24,
  fontSize: '0.75rem'
});

function TaskList() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {/* Todo Section */}
      <SectionHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlusIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="subtitle1" component="div">
            Todo
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ ml: 1, color: 'text.secondary' }}
          >
            1
          </Typography>
        </Box>
        <IconButton size="small">
          <PlusIcon />
        </IconButton>
      </SectionHeader>

      <TaskRow>
        <TaskInfo>
          <DragHandle>
            <PlusIcon fontSize="small" />
          </DragHandle>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            NL-5
          </Typography>
          <PlusIcon sx={{ mx: 1, fontSize: 20, color: 'text.secondary' }} />
          <Typography>trsdgf</Typography>
        </TaskInfo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TaskChip label="Test" size="small" variant="outlined" />
          <DateInfo sx={{ ml: 1 }}>Feb 25</DateInfo>
          <IconButton size="small" sx={{ ml: 1 }}>
            <PlusIcon fontSize="small" />
          </IconButton>
        </Box>
      </TaskRow>

      {/* Canceled Section */}
      <SectionHeader sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlusIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="subtitle1" component="div">
            Canceled
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ ml: 1, color: 'text.secondary' }}
          >
            4
          </Typography>
        </Box>
        <IconButton size="small">
          <PlusIcon />
        </IconButton>
      </SectionHeader>

      <TaskRow>
        <TaskInfo>
          <DragHandle>
            <PlusIcon fontSize="small" />
          </DragHandle>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            NL-4
          </Typography>
          <PlusIcon sx={{ mx: 1, fontSize: 20, color: 'text.secondary' }} />
          <Typography>tes</Typography>
        </TaskInfo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DateInfo>Feb 20</DateInfo>
          <IconButton size="small" sx={{ ml: 1 }}>
            <PlusIcon fontSize="small" />
          </IconButton>
        </Box>
      </TaskRow>

      <TaskRow>
        <TaskInfo>
          <DragHandle>
            <PlusIcon fontSize="small" />
          </DragHandle>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            NL-3
          </Typography>
          <PlusIcon sx={{ mx: 1, fontSize: 20, color: 'text.secondary' }} />
          <Typography>medium</Typography>
        </TaskInfo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DateInfo>Feb 17</DateInfo>
          <IconButton size="small" sx={{ ml: 1 }}>
            <PlusIcon fontSize="small" />
          </IconButton>
        </Box>
      </TaskRow>

      <TaskRow>
        <TaskInfo>
          <DragHandle>
            <PlusIcon fontSize="small" />
          </DragHandle>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            NL-2
          </Typography>
          <PlusIcon sx={{ mx: 1, fontSize: 20, color: 'text.secondary' }} />
          <Typography>high</Typography>
        </TaskInfo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TaskChip label="Test" size="small" variant="outlined" />
          <DateInfo sx={{ ml: 1 }}>Feb 11</DateInfo>
          <Avatar
            sx={{
              ml: 1,
              width: 24,
              height: 24,
              fontSize: '0.75rem',
              bgcolor: 'orange'
            }}
          >
            MK
          </Avatar>
        </Box>
      </TaskRow>

      <TaskRow>
        <TaskInfo>
          <DragHandle>
            <PlusIcon fontSize="small" />
          </DragHandle>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            NL-1
          </Typography>
          <PlusIcon sx={{ mx: 1, fontSize: 20, color: 'text.secondary' }} />
          <Typography>New issue</Typography>
        </TaskInfo>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DateInfo>Feb 10</DateInfo>
          <IconButton size="small" sx={{ ml: 1 }}>
            <PlusIcon fontSize="small" />
          </IconButton>
        </Box>
      </TaskRow>
    </Box>
  );
}

// export default TaskList;
// export default MultiSectionDataGrid;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Chip',
  component: Chip
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChipProps> = (args) => {
  // return <Chip {...args} />;
  return <TaskList />;
};

// Filled Base
export const BaseFilledBasic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseFilledBasic.args = {
  label: 'basic',
  onDelete: undefined
};

export const BaseFilledDisabled = Template.bind({});
BaseFilledDisabled.args = {
  label: 'disabled',
  disabled: true,
  onDelete: undefined
};

export const BaseFilledClickable = Template.bind({});
BaseFilledClickable.args = {
  label: 'clickable',
  clickable: true,
  onDelete: undefined,
  avatar: <Avatar>B</Avatar>
};

export const BaseFilledDeletable = Template.bind({});
BaseFilledDeletable.args = {
  label: 'Deletable',
  clickable: true,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  avatar: <Avatar src="assets/icons/Users/face-smile.svg"></Avatar>
};

export const BaseFilledCustomDeleteIcon = Template.bind({});
BaseFilledCustomDeleteIcon.args = {
  label: 'Custom delete icon',
  onDelete: () => {},
  deleteIcon: <CheckIcon />
};

export const BaseFilledClickableLink = Template.bind({});
BaseFilledClickableLink.args = {
  label: 'Clickable Link',
  component: 'a',
  // href: '#basic-chip',
  onDelete: undefined,
  clickable: true
};

// Filled Size
export const SizeFilledNormal = Template.bind({});
SizeFilledNormal.args = {
  label: 'Normal',
  size: 'medium',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const SizeFilledSmall = Template.bind({});
SizeFilledSmall.args = {
  label: 'Small',
  size: 'small',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const SizeFilledLarge = Template.bind({});
SizeFilledLarge.args = {
  label: 'Large',
  size: 'large',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />
};

export const FilledAvatarOnly = Template.bind({});
FilledAvatarOnly.args = {
  avatar: <Avatar>M</Avatar>,
  onDelete: undefined
};

export const FilledIconOnly = Template.bind({});
FilledIconOnly.args = {
  icon: <FaceSmileIcon />,
  onDelete: undefined
};

// Outlined Base
export const BaseOutlinedBasic = Template.bind({});
BaseOutlinedBasic.args = {
  label: 'basic',
  onDelete: undefined,
  variant: 'outlined'
};

export const BaseOutlinedDisabled = Template.bind({});
BaseOutlinedDisabled.args = {
  label: 'disabled',
  disabled: true,
  onDelete: undefined,
  variant: 'outlined'
};

export const BaseOutlinedClickable = Template.bind({});
BaseOutlinedClickable.args = {
  label: 'clickable',
  clickable: true,
  onDelete: undefined,
  avatar: <Avatar>B</Avatar>,
  variant: 'outlined'
};

export const BaseOutlinedDeletable = Template.bind({});
BaseOutlinedDeletable.args = {
  label: 'Deletable',
  clickable: true,
  onDelete: () => {},
  avatar: <Avatar src="assets/icons/Users/face-smile.svg"></Avatar>,
  variant: 'outlined'
};

export const BaseOutlinedCustomDeleteIcon = Template.bind({});
BaseOutlinedCustomDeleteIcon.args = {
  label: 'Custom delete icon',
  onDelete: () => {},
  deleteIcon: <CheckIcon />,
  variant: 'outlined'
};

export const BaseOutlinedClickableLink = Template.bind({});
BaseOutlinedClickableLink.args = {
  label: 'Clickable Link',
  component: 'a',
  // href: '#basic-chip',
  onDelete: undefined,
  clickable: true,
  variant: 'outlined'
};

// Outlined Size
export const SizeOutlinedNormal = Template.bind({});
SizeOutlinedNormal.args = {
  label: 'Normal',
  size: 'medium',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const SizeOutlinedSmall = Template.bind({});
SizeOutlinedSmall.args = {
  label: 'Small',
  size: 'small',
  avatar: <Avatar>M</Avatar>,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const SizeOutlinedIconSmall = Template.bind({});
SizeOutlinedSmall.args = {
  label: 'Small',
  size: 'small',
  icon: <FaceSmileIcon />,
  onDelete: () => {},
  deleteIcon: <XCloseIcon />,
  variant: 'outlined'
};

export const OutlinedAvatarOnly = Template.bind({});
OutlinedAvatarOnly.args = {
  avatar: <Avatar>M</Avatar>,
  variant: 'outlined',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedIconOnly = Template.bind({});
OutlinedIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedLargeIconOnly = Template.bind({});
OutlinedLargeIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  size: 'large',
  onDelete: undefined,
  deleteIcon: null as any
};

export const OutlinedSmallIconOnly = Template.bind({});
OutlinedSmallIconOnly.args = {
  icon: <FaceSmileIcon />,
  variant: 'outlined',
  size: 'small',
  onDelete: undefined,
  deleteIcon: null as any
};
