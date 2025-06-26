import { Grid, styled } from '@mui/material';

// TODO: Add types
export const FooterContainer: any = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#f8f9fa',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const FooterProgressContainer: any = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '20%',
  margin: '0 auto',
  position: 'relative',
  maxWidth: '200px',

  [theme.breakpoints.down('xl')]: {
    width: '25%'
  },
  [theme.breakpoints.down('lg')]: {
    width: '30%'
  },
  [theme.breakpoints.down('md')]: {
    width: '35%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '50%'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
}));

interface FooterProgressCircleProps {
  active: boolean;
}

export const FooterProgressCircle = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'active'
})<FooterProgressCircleProps>(({ theme, active }) => ({
  width: '24px',
  height: '24px',
  maxWidth: '24px',
  maxHeight: '24px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.greyiron[900] : '#e9ecef',
  zIndex: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 1.7s ease',

  '@media (max-width: 600px)': {
    width: '16px',
    height: '16px'
  }
})) as any;

interface FooterProgressLineProps {
  width: number;
}

export const FooterProgressLine: any = styled('div')<FooterProgressLineProps>(
  ({ theme, width }) => ({
    position: 'absolute',
    top: '50%',
    left: 0,
    height: '3px',
    width: '100%',
    backgroundColor: '#e9ecef',
    transform: 'translateY(-50%)',
    zIndex: 0,

    '&::before': {
      content: '""',
      position: 'absolute',
      height: '3px',
      backgroundColor: theme.palette.greyiron[900],
      width: `${width}%`,
      transition: 'width 0.7s ease',
      top: 0,
      left: 0
    }
  })
);

export const FooterInnerCircle: any = styled('div')(({ theme }) => ({
  width: theme.spacing(1),
  height: theme.spacing(1),
  maxWidth: '12px',
  maxHeight: '12px',
  backgroundColor: 'white',
  borderRadius: '50%',

  '@media (max-width: 600px)': {
    width: '8px',
    height: '8px'
  }
}));
