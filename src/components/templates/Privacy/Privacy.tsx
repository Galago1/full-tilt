import { Grid, Typography } from '@mui/material';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoggedOutLayoutColumn, {
  LoggedOutLayoutColumnProps
} from '../layouts/LoggedOutLayoutColumn/LoggedOutLayoutColumn';

export interface PrivacyProps {
  /**
   * Props for LoggedOutLayoutColumn
   */
  loggedOutLayoutColumnProps: LoggedOutLayoutColumnProps;
}
const Privacy = ({ loggedOutLayoutColumnProps, ...props }: PrivacyProps) => {
  return (
    <LoggedOutLayoutColumn {...loggedOutLayoutColumnProps}>
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        sx={{
          mx: 'auto',
          height: '100%',
          flexBasis: '50%',
          pt: (theme) => theme.spacing(21),
          pb: (theme) => theme.spacing(6),
          px: (theme) => theme.spacing(2)
        }}
        {...props}
      >
        <Typography
          color={'primary'}
          variant={'textMdMedium'}
          sx={{ pb: (theme) => theme.spacing(1.5), textAlign: 'center' }}
        >
          Current as of 14 Dec 2022
        </Typography>
        <EmptyState
          avatarAndTextProps={{
            title: 'Privacy Policy',
            subtitle:
              'Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website.',
            titleTypography: {
              textAlign: 'center',
              variant: 'displayLgMedium',
              pb: (theme) => theme.spacing(3)
            },
            subtitleTypography: {
              textAlign: 'center',
              variant: 'textXlRegular',
              sx: { color: (theme) => theme.palette.grey[600] }
            }
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'textLgSemibold'} fontWeight={'light'}>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          What information do we collect?
        </Typography>
        <Typography
          variant={'textLgRegular'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
        <Typography
          variant={'textLgRegular'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </Typography>
        <Typography
          variant={'textLgRegular'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          How do we use your information?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          How do we use your information?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          Do we use cookies and other tracking technologies?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          How long do we keep your information?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          How do we keep your information safe?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          What are your privacy rights?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          mx: 'auto',
          display: 'grid',
          mt: (theme) => theme.spacing(5),
          px: (theme) => theme.spacing(2)
        }}
      >
        <Typography variant={'displaySmSemibold'}>
          How can you contact us about this policy?
        </Typography>
        <Typography
          variant={'textLgSemibold'}
          sx={{ pt: (theme) => theme.spacing(1.5) }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
      </Grid>
    </LoggedOutLayoutColumn>
  );
};

export default Privacy;
