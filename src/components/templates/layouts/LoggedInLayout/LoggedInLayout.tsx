import { Container, Grid, GridProps } from '@mui/material';
import Footer, { FooterProps } from 'src/components/organisms/Footer/Footer';
import PageHeader, {
  PageHeaderProps
} from 'src/components/organisms/PageHeader/PageHeader';
import TopNav, { TopNavProps } from 'src/components/organisms/TopNav/TopNav';

export interface LoggedInLayoutProps extends GridProps {
  'data-testid'?: string;
  /**
   * Page Header Props
   */
  pageHeaderProps?: PageHeaderProps;
  /**
   * Child Grid Item Props
   */
  childGridItemProps?: GridProps;
  /**
   * Footer Grid Item Props
   */
  footerGridItemProps?: GridProps;
  /**
   * Top nav props
   */
  topNavProps?: TopNavProps;
  /**
   * Footer props
   */
  footerProps?: FooterProps;
  /**
   * Banner props
   */
  bannerProps?: PageHeaderProps;
}
const LoggedInLayout = ({
  pageHeaderProps,
  childGridItemProps,
  footerGridItemProps,
  children,
  topNavProps,
  footerProps,
  bannerProps,
  ...props
}: LoggedInLayoutProps) => {
  return (
    <Grid container {...props} flexDirection={'column'}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={{ xs: 12, sm: 12, md: 16 }}
          flexDirection={'column'}
        >
          {bannerProps ? (
            <Grid item>
              <PageHeader {...bannerProps} />
            </Grid>
          ) : null}
          <Grid item>
            <TopNav {...topNavProps} />
          </Grid>
          {pageHeaderProps ? (
            <Grid item>
              <Container
                maxWidth="xl"
                sx={{
                  px: { xs: 0, sm: 0, md: 2 }
                }}
              >
                <PageHeader {...pageHeaderProps} />
              </Container>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Grid item {...childGridItemProps}>
        {children}
      </Grid>
      {footerProps && (
        <Grid item {...footerGridItemProps}>
          <Footer {...footerProps} />
        </Grid>
      )}
    </Grid>
  );
};

export default LoggedInLayout;
