import { Box, Container, ContainerProps, Grid } from '@mui/material';
import type { TabProps } from '@mui/material';
import TabPanel from 'src/components/molecules/TabPanel/TabPanel';
import Tabs from 'src/components/molecules/Tabs/Tabs';
import type { TableProps, Tbase } from 'src/components/organisms/Table/Table';
import Table from 'src/components/organisms/Table/Table';
import type { FormikHelpers } from 'formik';
import { useState } from 'react';
import LoggedInLayout, {
  LoggedInLayoutProps
} from '../layouts/LoggedInLayout/LoggedInLayout';

export interface AdminPanelProps<T extends Tbase, U extends Tbase>
  extends ContainerProps {
  /**
   * the logged in layout props
   */
  loggedInLayoutProps: LoggedInLayoutProps;
  /**
   * User Table Props
   */
  userTableProps: TableProps<T>;
  /**
   * Collection Table Props
   */
  collectionTableProps: TableProps<U>;
  /**
   * Optional submit handler
   */
  handleTabSubmit: (
    values: {},
    formikHelpers: FormikHelpers<{}>
  ) => void | Promise<any>;
  tabList?: TabProps[];
}
const AdminPanel = <T extends Tbase, U extends Tbase>({
  userTableProps,
  collectionTableProps,
  loggedInLayoutProps,
  handleTabSubmit,
  tabList,
  ...props
}: AdminPanelProps<T, U>) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LoggedInLayout
      {...loggedInLayoutProps}
      pageHeaderProps={{
        slots: {
          showDivider: false,
          avatarAndTextProps: {
            title: 'Admin panel',
            subtitle: 'View your application information.',
            titleTypography: {
              variant: 'displaySmSemibold'
            },
            subtitleTypography: {
              variant: 'textMdRegular'
            }
          }
        }
      }}
      childGridItemProps={{
        xs: 12,
        sx: { pt: 4 }
      }}
    >
      <Container
        {...props}
        maxWidth="xl"
        sx={{
          ...props.sx,
          px: { xs: 0, sm: 0, md: 2 },
          // DONT FORGET THE BOTTOM PADDING
          pb: { xs: 8, sm: 8, md: 12 }
        }}
      >
        <Grid
          container
          sx={{ px: { xs: 2, sm: 3, md: 3 } }}
          spacing={{ xs: 3, sm: 3, md: 3 }}
        >
          <Grid item xs={12} sm={12} md={2}>
            <Tabs
              value={value}
              onChange={handleChange}
              handleSubmit={handleTabSubmit}
              aria-label="basic tabs example"
              hideIndicator={true}
              orientation={'vertical'}
              textColor={'secondary'}
              showBackground={true}
              tabs={
                tabList || [
                  {
                    label: 'All users',
                    sx: { textAlign: 'left', alignItems: 'flex-start' }
                  },
                  {
                    label: 'All collections',
                    sx: {
                      textAlign: 'left',
                      alignItems: 'flex-start',
                      whiteSpace: 'nowrap'
                    }
                  }
                ]
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <TabPanel value={value} index={0}>
              <Table {...userTableProps} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Table {...collectionTableProps} />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </LoggedInLayout>
  );
};

export default AdminPanel;
