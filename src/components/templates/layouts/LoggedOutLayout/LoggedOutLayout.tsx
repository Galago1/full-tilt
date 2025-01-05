import { Grid, GridProps, useTheme } from '@mui/material';
import { Image, ImageProps } from 'src/components/atoms/Image/Image';
import TransparentCard, {
  TransparentCardProps
} from 'src/components/molecules/Cards/TransparentCard/TransparentCard';
import TopNav, { TopNavProps } from 'src/components/organisms/TopNav/TopNav';

export interface LoggedOutLayoutProps extends GridProps {
  'data-testid'?: string;
  /**
   * Background image
   */
  image?: any;
  /**
   * Transparent card props
   */
  transparentCardProps?: TransparentCardProps;
  /**
   * Top nav props
   */
  topNavProps?: TopNavProps;
  /**
   * Nav grid container props
   */
  navGridContainerProps?: GridProps;
  /**
   * Image component props
   */
  imageProps?: ImageProps;
  /**
   * Image grid item props
   */
  imageItemGridProps?: GridProps;
  /**
   * Left grid item props
   */
  leftGridItemProps?: GridProps;
  /**
   * Children grid item props
   */
  childrenGridItemProps?: GridProps;
  /**
   * Children
   */
  secondaryChildren?: React.ReactNode;
}
const LoggedOutLayout = ({
  children,
  secondaryChildren,
  transparentCardProps,
  image,
  topNavProps,
  navGridContainerProps,
  imageProps,
  imageItemGridProps,
  leftGridItemProps,
  childrenGridItemProps,
  ...props
}: LoggedOutLayoutProps) => {
  const backgroundImageProps = image
    ? {
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    : {};
  const theme = useTheme();
  return (
    <Grid container sx={{ height: '100%' }} {...props}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          height: '100%'
        }}
        {...leftGridItemProps}
      >
        <Grid
          container
          flexDirection={'column'}
          sx={{
            height: '100%',
            gap: {
              xs: theme.spacing(14.25),
              sm: theme.spacing(14.25),
              md: theme.spacing(21.5)
            }
          }}
          flexWrap={'nowrap'}
          {...navGridContainerProps}
        >
          <Grid item sx={{ position: 'relative' }}>
            <TopNav {...topNavProps} />
          </Grid>
          <Grid item sx={{ height: '100%' }}>
            <Grid container sx={{ height: '100%' }}>
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={6}
                sx={{ mx: 'auto', px: (theme) => theme.spacing(2) }}
                {...childrenGridItemProps}
              >
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          height: '100%',
          p: 5,
          display: { xs: 'none', sm: 'none', md: 'block' },
          ...backgroundImageProps
        }}
        {...imageItemGridProps}
      >
        {secondaryChildren}
        {imageProps && <Image {...imageProps} />}
        {transparentCardProps && (
          <Grid
            container
            flexDirection={'column'}
            justifyContent={'flex-end'}
            sx={{ height: '100%' }}
          >
            <Grid item>
              <TransparentCard {...transparentCardProps} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default LoggedOutLayout;
