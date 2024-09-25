import { Box, Container, Grid } from '@mui/material';
import type { FormikHelpers } from 'formik/dist/types';
import { useState } from 'react';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import TabPanel from 'src/components/molecules/TabPanel/TabPanel';
import Tabs from 'src/components/molecules/Tabs/Tabs';
import type { UserInfoFormFormProps } from 'src/components/organisms/Forms/UserInfoForm/UserInfoForm';
import UserInfoForm from 'src/components/organisms/Forms/UserInfoForm/UserInfoForm';
import { Tbase } from '../../organisms/Table/Table';
import LoggedInLayout, {
  LoggedInLayoutProps
} from '../layouts/LoggedInLayout/LoggedInLayout';

export interface AccountSettingsProps<T extends Tbase> {
  /**
   * the logged in layout props
   */
  loggedInLayoutProps: LoggedInLayoutProps;
  /**
   * starting field values
   */
  initialValues?: Partial<UserInfoFormFormProps>;
  /**
   * avatar url
   */
  image?: string;
  /**
   * Form loading state
   */
  isLoading: boolean;
  /**
   * Optional submit handler
   */
  onSubmit: (
    values: UserInfoFormFormProps,
    form: FormikHelpers<UserInfoFormFormProps>
  ) => void;
  /**
   * Optional tab submit handler
   */
  handleTabSubmit?: (
    values: {},
    formikHelpers: FormikHelpers<{}>
  ) => void | Promise<any>;
}
const AccountSettings = <T extends Tbase>({
  initialValues,
  image,
  isLoading,
  loggedInLayoutProps,
  onSubmit,
  handleTabSubmit,
  ...props
}: AccountSettingsProps<T>) => {
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
            title: 'Account',
            subtitle: 'Manage your settings and preferences here.',
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
        sx: {
          pt: 4
        }
      }}
    >
      <Container
        {...props}
        maxWidth="xl"
        sx={{
          // ...props.sx,
          // DON"T FORGET THE PADDING-BOTTOM
          px: { xs: 2, sm: 3, md: 4.5 },
          pb: { xs: 8, sm: 8, md: 12 }
        }}
      >
        <Grid container spacing={{ xs: 3, sm: 3, md: 0 }}>
          <Grid item xs={12} sm={12} md={2}>
            <Box sx={{ width: { xs: '100%', sm: '100%', md: 96 } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                handleSubmit={handleTabSubmit}
                aria-label="basic tabs example"
                hideIndicator={true}
                orientation={'vertical'}
                textColor={'secondary'}
                showBackground={true}
                tabs={[
                  {
                    label: 'My details',
                    sx: { textAlign: 'left', alignItems: 'flex-start' }
                  },
                  {
                    label: 'Plan',
                    sx: { textAlign: 'left', alignItems: 'flex-start' }
                  },
                  {
                    label: 'Payout',
                    sx: { textAlign: 'left', alignItems: 'flex-start' }
                  }
                ]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <TabPanel value={value} index={0}>
              <UserInfoForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                image={image}
                isLoading={isLoading}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container>
                <Grid item xs={12} sx={{ pt: 12 }}>
                  <EmptyState
                    justifyContent={'center'}
                    alignItems="center"
                    avatarAndTextProps={{
                      title: 'Account payout',
                      titleTypography: {
                        variant: 'textLgSemibold'
                      },
                      subtitle: 'The store payout feature will be coming soon.',
                      sx: { textAlign: 'center' }
                    }}
                    avatarAndTextItemProps={{
                      '&.MuiGrid-item': { pt: 1.25 }
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </LoggedInLayout>
  );
};

export default AccountSettings;
