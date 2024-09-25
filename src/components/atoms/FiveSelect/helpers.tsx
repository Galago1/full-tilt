import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { keyframes, styled } from '@mui/system';

// TODO: Add types for these styled components
export const FiveSelectContainer: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}));

export const FiveSelectCircleContainer: any = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  position: 'relative'
});

export const FiveSelectLine: any = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: 2,
  backgroundColor: '#e0e0e0',
  zIndex: 0,
  transform: 'translateY(-50%)'
}));

export const FiveSelectCircleWrapper: any = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 1
});

export const FiveSelectCircle: any = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '2px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(40px, 10vw, 80px)',
  height: 'clamp(40px, 10vw, 80px)'
}));

export const FiveSelectSelectedOuterCircle: any = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '2px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  width: 'clamp(40px, 10vw, 80px)',
  height: 'clamp(40px, 10vw, 80px)'
}));

const expandAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const FiveSelectSelectedInnerCircle: any = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(5px, 1vw, 10px)',
  width: 'clamp(30px, 7vw, 60px)',
  height: 'clamp(30px, 7vw, 60px)',
  animation: `${expandAnimation} 0.3s ease-out`
}));

export const FiveSelectLabelContainer: any = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 8
});

export const FiveSelectLabel: any = styled(Typography)(({ theme }) => ({
  width: 'clamp(40px, 10vw, 80px)',
  textAlign: 'center'
}));
