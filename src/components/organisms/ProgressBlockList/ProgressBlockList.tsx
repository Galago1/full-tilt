import { Grid, GridProps } from '@mui/material';
import ProgressBlock, {
  ProgressBlockProps
} from '../../molecules/ProgressBlock/ProgressBlock';

export interface ProgressBlockListProps extends GridProps {
  /**
   * Progress block props list
   */
  progressBlockProps: ProgressBlockProps[];
}
/**
 * Primary UI component for user interaction
 */

const ProgressBlockList = ({
  progressBlockProps,
  ...props
}: ProgressBlockListProps) => {
  return (
    <Grid
      {...props}
      container
      flexDirection={'column'}
      flexWrap={'nowrap'}
      gap={1.5}
    >
      {progressBlockProps.map(
        (progressblockProp: ProgressBlockProps, index: number) => {
          return (
            <Grid item key={`progress-block-index-[${index}]`}>
              <ProgressBlock {...progressblockProp} />
            </Grid>
          );
        }
      )}
    </Grid>
  );
};
export default ProgressBlockList;
