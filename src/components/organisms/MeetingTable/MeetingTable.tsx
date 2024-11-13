import {
  Avatar,
  Badge,
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Divider } from 'src/components/atoms';
import { useIsSize } from 'src/hooks';
import Card from '../Card';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

interface Meeting {
  title: string;
  date: string;
  presenter: string;
  imagePath: string;
  type: string;
}

const useMeetingTable = (data: Data) => {
  const teams = Object.keys(data);
  const [selectedTeam, setSelectedTeam] = useState<string>(teams[0]);
  const [selectedTab, setSelectedTab] = useState<string>('weekly');

  const handleTeamChange = (event: SelectChangeEvent<string>) => {
    setSelectedTeam(event.target.value as string);
    setSelectedTab('weekly');
  };

  const handleTabChange = (event: ChangeEvent<{}>, newValue: string) => {
    setSelectedTab(newValue.toLowerCase());
  };

  const handleSelectTabChange = (event: SelectChangeEvent<string>) => {
    setSelectedTab(event.target.value as string);
  };

  const filteredData = data[selectedTeam] || [];
  const tabData: { [key: string]: Meeting[] } = {
    active: filteredData,
    weekly: filteredData.filter(
      (meeting) => meeting.type.toLowerCase() === 'weekly'
    ),
    quarterly: filteredData.filter(
      (meeting) => meeting.type.toLowerCase() === 'quarterly'
    ),
    annual: filteredData.filter(
      (meeting) => meeting.type.toLowerCase() === 'annual'
    ),
    other: filteredData.filter(
      (meeting) => meeting.type.toLowerCase() === 'other'
    )
  };

  const tabLabels = {
    active: `Active`,
    weekly: `Weekly`,
    quarterly: `Quarterly`,
    annual: `Annual`,
    other: `Other`
  };

  const { isXSmall } = useIsSize();

  return {
    teams,
    selectedTeam,
    selectedTab,
    handleTeamChange,
    handleTabChange,
    handleSelectTabChange,
    tabData,
    tabLabels,
    isXSmall
  };
};

interface TableBodyContentProps {
  tabData: { [key: string]: Meeting[] };
  selectedTab: string;
}
const TableBodyContent = ({ tabData, selectedTab }: TableBodyContentProps) => {
  const theme = useTheme();
  const content: Meeting[] = tabData[selectedTab];
  if (content.length === 0)
    return (
      <TableRow sx={{}}>
        <TableCell
          colSpan={4}
          sx={{ textAlign: 'center', borderBottom: 'unset', pb: 0 }}
        >
          No Meetings
        </TableCell>
      </TableRow>
    );
  return (
    <>
      {content.map((meeting, index) => (
        <TableRow key={index}>
          <TableCell>{meeting.title}</TableCell>
          <TableCell>{meeting.date}</TableCell>
          <TableCell>
            <Box display="flex" alignItems="center">
              <Avatar
                src={meeting.imagePath}
                alt={meeting.presenter}
                sx={{
                  width: 32,
                  height: 32,
                  border: theme.border.userProfileAvatarTiny,
                  borderRadius: theme.borderRadius['2xl'],
                  marginRight: 1.5
                }}
              />
              {meeting.presenter}
            </Box>
          </TableCell>
          <TableCell>{meeting.type}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

interface Content {
  data: Data;
}
const Content = ({ data }: Content) => {
  const theme = useTheme();
  const {
    teams,
    selectedTeam,
    selectedTab,
    handleTeamChange,
    handleTabChange,
    handleSelectTabChange,
    tabData,
    tabLabels,
    isXSmall
  } = useMeetingTable(data);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={responsiveSpacing}
      >
        <Typography variant="textLgSemibold">All Meetings</Typography>
        <Select
          sx={{
            borderRadius: theme.borderRadius.md,
            '& .MuiSelect-select': {
              padding: theme.spacing(10 / 8, 14 / 8)
            }
          }}
          data-testid="select"
          role="button"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          {teams.map((team, index) => (
            <MenuItem
              key={`meeting-table-item-[${index}]`}
              value={team}
              sx={{
                ...theme.typography.body2
              }}
            >
              {team}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          backgroundColor: 'grey.50',
          borderRadius: 1
        }}
      >
        {isXSmall ? (
          <Select
            value={selectedTab}
            onChange={handleSelectTabChange}
            sx={{
              width: '100%',
              padding: 0,
              borderRadius: theme.borderRadius.sm,
              backgroundColor: theme.palette.common.white
            }}
          >
            {Object.entries(tabLabels).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                <Grid container gap={2} alignItems="center">
                  <Grid item>{label}</Grid>
                  <Grid item>
                    <Badge
                      sx={{
                        marginRight: 1,
                        '& .MuiBadge-badge': {
                          backgroundColor: 'grey.50',
                          border: theme.border.outlinedButton,
                          borderRadius: theme.borderRadius.lg
                        }
                      }}
                      badgeContent={tabData[key].length}
                    />
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        ) : (
          <Tabs
            value={selectedTab.toLowerCase()}
            onChange={handleTabChange}
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none'
              },
              border: theme.border.outlinedButton,
              borderRadius: theme.borderRadius.md
            }}
          >
            {Object.entries(tabLabels).map(([key, label]) => (
              <Tab
                key={key}
                value={key}
                sx={{
                  '&': {
                    padding: 0.125
                  },
                  '& .MuiButtonBase-root': {
                    padding: 0.125
                  }
                }}
                label={
                  <Grid
                    container
                    sx={{
                      width: 'auto',
                      gap: 2,
                      p: 1,
                      backgroundColor:
                        selectedTab.toLowerCase() === key
                          ? theme.palette.common.white
                          : 'transparent',
                      borderRadius: theme.borderRadius.lg,
                      transition: 'all 0.3s',

                      boxShadow:
                        selectedTab.toLowerCase() === key
                          ? theme.customShadows.sm
                          : 'none',
                      ':hover': {
                        backgroundColor:
                          selectedTab.toLowerCase() === key
                            ? 'transparent'
                            : '#d6dde3'
                      }
                    }}
                  >
                    <Grid item>{label}</Grid>
                    {tabData[key].length > 0 && (
                      <Grid item>
                        <Badge
                          sx={{
                            marginRight: 1,
                            '& .MuiBadge-badge': {
                              backgroundColor: 'grey.50',
                              border: theme.border.outlinedButton,
                              borderRadius: theme.borderRadius.lg
                            }
                          }}
                          badgeContent={tabData[key].length}
                        />
                      </Grid>
                    )}
                  </Grid>
                }
              />
            ))}
          </Tabs>
        )}
      </Box>
      <Divider sx={{ margin: theme.spacing(20 / 8, 0) }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Presenter</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableBodyContent tabData={tabData} selectedTab={selectedTab} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
interface Data {
  [key: string]: Meeting[];
}

export interface MeetingTableProps {
  data: Data;
}

const MeetingTable = ({ data }: MeetingTableProps) => {
  return (
    <Card showActions={false}>
      <Content data={data} />
    </Card>
  );
};

export default MeetingTable;
