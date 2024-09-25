import { Box, Grid, GridProps, Paper, SxProps, Theme } from '@mui/material';
import AvatarAndText, {
  AvatarAndTextProps
} from '../AvatarAndText/AvatarAndText';
import LoadingIndicator from '../LoadingIndicator';
import { LoadingIndicatorProps } from '../LoadingIndicator/LoadingIndicator';
export interface ProgressBlockProps extends GridProps {
  /**
   * Optional Paper styles
   */
  paperSx?: SxProps<Theme>;
  /**
   * Avatar and Text Props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * Circular progress props
   */
  loadingIndicatorProps?: LoadingIndicatorProps;
  /**
   * Icon props
   */
  iconProps?: JSX.Element;
}
/**
 * Primary UI component for user interaction
 */

const ProgressBlock = ({
  sx,
  children,
  avatarAndTextProps,
  iconProps,
  loadingIndicatorProps,
  paperSx,
  ...props
}: ProgressBlockProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 0,
        ...paperSx
      }}
    >
      <Grid {...props} container flexWrap={'nowrap'}>
        <Grid item flexGrow={1}>
          <AvatarAndText {...avatarAndTextProps} />
        </Grid>
        <Grid item>
          {iconProps
            ? iconProps
            : loadingIndicatorProps && (
                <LoadingIndicator {...loadingIndicatorProps} />
              )}
        </Grid>
      </Grid>

      <Box sx={{ p: 3, ...sx }}>{children}</Box>
    </Paper>
  );
};
export default ProgressBlock;
