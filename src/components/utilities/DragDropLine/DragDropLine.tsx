import { Grow, useTheme } from '@mui/material';

export interface DragDropLineProps {
  /**
   * Whether to show the drop line
   */
  show: boolean;
  /**
   * Position of the drop line
   */
  position: 'top' | 'bottom';
  /**
   * Animation timeout in milliseconds
   */
  timeout?: number;
}

/**
 * A standardized drop line indicator for drag and drop operations
 */
const DragDropLine = ({ show, position, timeout = 200 }: DragDropLineProps) => {
  const theme = useTheme();

  if (!show) return null;

  return (
    <Grow in={true} timeout={timeout}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: theme.palette.primary.main,
          zIndex: 100,
          borderRadius: '2px',
          ...(position === 'top' ? { top: '-1px' } : { bottom: '-1px' })
        }}
      />
    </Grow>
  );
};

export default DragDropLine;
