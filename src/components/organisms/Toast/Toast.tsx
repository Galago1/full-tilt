import { useState, useEffect, forwardRef, SyntheticEvent } from 'react';

// Material UI
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  Box,
  SnackbarCloseReason,
  Theme
} from '@mui/material';
import { XCloseIcon } from '../../particles/theme/overrides/CustomIcons';
import LinearProgressBar from 'src/components/atoms/LinearProgressBar/LinearProgressBar';
import useToast from 'src/hooks/useToast';

// Icons

const FRAME_INTERVAL = 100;

export interface ToastrProps {}
const Toast = forwardRef(({ ...props }: ToastrProps, ref) => {
  const [startTime, setStartTime] = useState(0);
  const [curTime, setCurTime] = useState(0);

  const { toast, hideToast } = useToast();

  const { text, type, position, visible, duration } = toast;

  useEffect(() => {
    if (visible && duration) {
      setStartTime(Date.now());
      setCurTime(Date.now());
    }
  }, [toast, duration, visible]);

  useEffect(() => {
    let interval: any;
    if (visible && duration) {
      interval = setInterval(() => {
        if (curTime < startTime + duration) {
          setCurTime(Date.now());
        } else {
          clearInterval(interval);
          setStartTime(Date.now());
          setCurTime(Date.now());
          hideToast();
        }
      }, FRAME_INTERVAL);
    }
    return () => {
      clearInterval(interval);
    };
  }, [curTime, startTime, duration, hideToast, visible]);

  const handleClose = (
    _: Event | SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') return;
    hideToast();
    setStartTime(Date.now());
    setCurTime(Date.now());
  };

  return (
    <Snackbar anchorOrigin={position} open={visible} onClose={handleClose}>
      <Box
        sx={{
          borderRadius: 0,
          overflow: 'hidden',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'common.white',
          boxShadow: (theme: Theme) => theme.customShadows['2xl']
        }}
      >
        <LinearProgressBar
          variant="determinate"
          value={duration ? ((curTime - startTime) / duration) * 100 : 50}
          color={type}
          sx={{
            height: 3,
            width: '100%'
          }}
        />
        <SnackbarContent
          sx={{
            color: 'text.primary',
            backgroundColor: 'common.white',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            paddingTop: (theme: Theme) => theme.spacing(0.625)
          }}
          message={text}
          action={
            <IconButton
              aria-label="close"
              onClick={handleClose as any}
              size="small"
              sx={{ marginTop: (theme: Theme) => theme.spacing(-0.375) }}
            >
              <XCloseIcon key="close" />
            </IconButton>
          }
        />
      </Box>
    </Snackbar>
  );
});

Toast.displayName = 'Toast';
export default Toast;
