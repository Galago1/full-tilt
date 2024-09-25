import { Container, ContainerTypeMap, SxProps, Theme } from '@mui/material';
import TopNav, { TopNavProps } from 'src/components/organisms/TopNav/TopNav';

export interface LogoLayoutProps extends ContainerTypeMap<{}, 'div'> {
  'data-testid'?: string;
  /**
   * Top nav props
   */
  topNavProps?: TopNavProps;
  /**
   * Child Grid Item Props
   */
  children?: React.ReactNode;
  /**
   * Sx Props
   */
  sx?: SxProps<Theme>;
}
const LogoLayout = ({ children, topNavProps, ...props }: LogoLayoutProps) => {
  return (
    <>
      <TopNav {...topNavProps} />
      <Container
        maxWidth="xl"
        sx={{
          ...props?.sx,
          px: { xs: 2, sm: 2, md: 2 },
          pb: { xs: 8, sm: 8, md: 12 },
          pt: { xs: 16, sm: 16, md: 20 }
        }}
        {...props}
      >
        {children}
      </Container>
    </>
  );
};

export default LogoLayout;
