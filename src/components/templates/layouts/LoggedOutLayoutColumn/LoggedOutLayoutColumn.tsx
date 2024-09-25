import { Container, Grid, GridProps } from '@mui/material';
import TopNav, { TopNavProps } from 'src/components/organisms/TopNav/TopNav';

export interface LoggedOutLayoutColumnProps extends GridProps {
  'data-testid'?: string;
  /**
   * Top nav props
   */
  topNavProps?: TopNavProps;
}
const LoggedOutLayoutColumn = ({
  children,
  topNavProps,
  ...props
}: LoggedOutLayoutColumnProps) => {
  return (
    <Grid container {...props} flexDirection={'column'}>
      <Grid item xs={12}>
        <TopNav {...topNavProps} />
      </Grid>
      <Container
        maxWidth="xl"
        sx={{
          ...props.sx,
          px: { xs: 0, sm: 0, md: 2 },
          pb: { xs: 8, sm: 8, md: 12 },
          pt: { xs: 0, sm: 0, md: 20 }
        }}
      >
        {children}
      </Container>
    </Grid>
  );
};

export default LoggedOutLayoutColumn;
