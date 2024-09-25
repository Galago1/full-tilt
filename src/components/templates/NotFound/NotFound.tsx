import { Grid, GridProps, Typography } from '@mui/material';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { ArrowLeftIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import Image from 'src/components/atoms/Image/Image';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface NotFoundProps extends GridProps {
  onGoBack: () => void;
  onGoHome: () => void;
  image: any;
}
const NotFound = ({ onGoBack, onGoHome, image, ...props }: NotFoundProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 0, sm: 3 }}
      gap={{ xs: 3, sm: 0 }}
      {...props}
    >
      <Grid item xs={12} sm={12} md={6} order={{ xs: 2, sm: 2, md: 1 }}>
        <>
          <Typography color={'primary'} variant={'textMdMedium'}>
            404 Error
          </Typography>
          <EmptyState
            avatarAndTextProps={{
              title: 'Page not found',
              subtitle:
                "Sorry, the page you are looking for doesn't exist. Here are some helpful links:",
              titleTypography: {
                variant: 'displayXlMedium',
                sx: { pb: responsiveSpacing }
              },
              subtitleTypography: {
                variant: 'textXlSemibold',
                fontWeight: 'light',
                sx: { color: (theme) => theme.palette.grey[600] }
              }
            }}
            buttonListProps={{
              buttons: [
                {
                  label: 'Go back',
                  color: 'secondary',
                  variant: 'outlined',
                  startIcon: <ArrowLeftIcon />,
                  size: 'xl',
                  onClick: onGoBack
                },
                {
                  label: 'Take me home',
                  color: 'primary',
                  variant: 'contained',
                  size: 'xl',
                  onClick: onGoHome
                }
              ]
            }}
          />
        </>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        order={{ xs: 1, sm: 1, md: 2 }}
        sx={{
          textAlign: { xs: 'left', sm: 'left', md: '-webkit-right' },
          position: 'relative'
        }}
      >
        <Image
          // width={500}
          // height={500}
          // layout="fill"
          src={image}
          alt="404 illustration"
        />
      </Grid>
    </Grid>
  );
};

export default NotFound;
