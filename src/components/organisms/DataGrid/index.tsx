import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {
  renderEditProgress,
  renderEditRating,
  renderEditStatus,
  renderProgress,
  renderRating,
  renderStatus
} from '@mui/x-data-grid-generator';
import type { DataGridProps } from './DataGrid';

import { Box } from '@mui/material';
import { GridCellParams, GridToolbar } from '@mui/x-data-grid-premium';
import LinearProgressIndicator from '../../molecules/LinearProgressIndicator';
import { LinearProgressIndicatorProps } from '../../molecules/LinearProgressIndicator/LinearProgressIndicator';
import { ChevronRightIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface RenderLinearProgressProps {
  value: number;
  linearProgressIndicatorProps?: LinearProgressIndicatorProps;
}

const STATUS_OPTIONS = ['Open', 'PartiallyFilled', 'Filled', 'Rejected'];

export { default } from './DataGrid';

const renderLinearProgress = ({
  value,
  linearProgressIndicatorProps
}: RenderLinearProgressProps): JSX.Element => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressIndicator
        value={value}
        displayValue={`${value}%`}
        {...linearProgressIndicatorProps}
      />
    </Box>
  );
};

const renderIconButton = (params: GridCellParams): JSX.Element => {
  return (
    <IconButton>
      <ChevronRightIcon />
    </IconButton>
  );
};
const renderAvatarAndText = (params: GridCellParams): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Avatar />
      <Box>{params.value}</Box>
    </Box>
  );
};

export const STATE_OF_DATA = {
  columns: [
    {
      editable: true,
      field: 'name',
      headerName: 'Name',
      width: 180
    },
    {
      editable: false,
      field: 'score',
      headerName: 'Score',
      width: 75
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      editable: true,
      field: 'lastQaDate',
      headerName: 'Last Qa Date',
      type: 'date',
      width: 160
    },
    {
      field: 'userImpact',
      headerName: 'User Impact',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'usage',
      headerName: 'Usage',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'complexity',
      headerName: 'Complexity',
      width: 180,
      type: 'number',
      editable: true,
      availableAggregationFunctions: ['avg', 'min', 'max', 'size'],
      renderCell: renderRating,
      renderEditCell: renderEditRating
    },
    {
      field: 'ux',
      headerName: 'UX',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'responsive',
      headerName: 'Responsive',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'ui',
      headerName: 'UI',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'accessibility',
      headerName: 'Accessibility',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      field: 'code',
      headerName: 'Code',
      type: 'singleSelect',
      valueOptions: STATUS_OPTIONS,
      width: 150,
      editable: true,
      renderCell: renderStatus,
      renderEditCell: renderEditStatus
    },
    {
      availableAggregationFunctions: ['min', 'max', 'avg', 'size'],
      editable: true,
      field: 'coverage',
      headerName: 'Coverage',
      renderCell: renderProgress,
      renderEditCell: renderEditProgress,
      type: 'number',
      width: 120
    },
    {
      availableAggregationFunctions: ['min', 'max', 'avg', 'size'],
      editable: true,
      field: 'performance',
      headerName: 'Performance',
      renderCell: renderProgress,
      renderEditCell: renderEditProgress,
      type: 'number',
      width: 120
    }
  ],
  rows: [
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d2',
      name: 'Login',
      score: 'F-',
      complexity: 4,
      status: 'PartiallyFilled',
      userImpact: 'PartiallyFilled',
      usage: 'PartiallyFilled',
      ux: 'PartiallyFilled',
      responsive: 'PartiallyFilled',
      ui: 'PartiallyFilled',
      accessibility: 'PartiallyFilled',
      code: 'PartiallyFilled',
      lastQaDate: '2022-08-18T12:36:45.939Z', //'2022-08-18T07:43:28.000Z'
      coverage: 0.0235,
      performance: 0.0235
    }
  ],
  components: {
    Toolbar: GridToolbar
  },
  initialState: {
    columns: {
      columnVisibilityModel: {
        id: false
      }
    }
  }
};

export const MEMBERS_DATA: DataGridProps = {
  columns: [
    {
      editable: false,
      field: 'atAGlance',
      headerName: '6Rs At-a-glance',
      headerAlign: 'left',
      align: 'left',
      width: 180
    },
    {
      editable: false,
      field: 'progress',
      headerName: 'Progress',
      width: 300,
      headerAlign: 'left',
      align: 'left',
      renderCell: (params: GridCellParams) =>
        renderLinearProgress({ value: params.value as number }),
      renderEditCell: renderEditStatus
    },
    {
      editable: false,
      field: 'champion',
      headerName: 'Champion',
      width: 300,
      headerAlign: 'left',
      align: 'left',
      renderCell: renderAvatarAndText,
      renderEditCell: renderEditStatus
    },
    {
      field: 'myWork',
      headerName: 'My Work',
      width: 180,
      type: 'number',
      editable: false,
      headerAlign: 'left',
      align: 'left',
      availableAggregationFunctions: ['avg', 'min', 'max', 'size'],
      renderCell: renderRating,
      renderEditCell: renderEditRating
    },
    {
      field: 'action',
      headerName: '',
      flex: 1,
      editable: false,
      align: 'right',
      renderCell: renderIconButton,
      renderEditCell: renderEditStatus
    }
  ],
  rows: [
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d2',
      atAGlance: 'Recognition',
      progress: 40,
      champion: 'Olivia Rhye',
      myWork: 4
    },
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d3',
      atAGlance: 'Relationships',
      progress: 40,
      champion: 'Wade Warren',
      myWork: 4
    },
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d3',
      atAGlance: 'Reputation',
      progress: 60,
      champion: 'Leslie Alexander',
      myWork: 4
    },
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d4',
      atAGlance: 'Recruitment',
      progress: 100,
      champion: 'Brooklyn Simmons',
      myWork: 4
    },
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d5',
      atAGlance: 'Retention',
      progress: 60,
      champion: 'Jacob Jones',
      myWork: 4
    },
    {
      id: 'bb4f2c84-b624-5896-927f-8865d55198d6',
      atAGlance: 'Revenue',
      progress: 60,
      champion: 'Olivia Rhye',
      myWork: 4
    }
  ],
  initialState: {
    columns: {
      columnVisibilityModel: {
        id: false
      }
    }
  }
};
