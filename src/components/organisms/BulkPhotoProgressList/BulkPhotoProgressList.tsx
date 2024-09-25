import { Grid, GridProps } from '@mui/material';
import Divider from '../../atoms/Divider/Divider';
import AvatarAndText, {
  AvatarAndTextProps
} from '../../molecules/AvatarAndText/AvatarAndText';
import ButtonList from '../../molecules/ButtonList/ButtonList';
import { ProgressBlockProps } from '../../molecules/ProgressBlock/ProgressBlock';
import ProgressBlockList from '../ProgressBlockList/ProgressBlockList';

export interface BulkPhotoProgressListProps extends GridProps {
  /**
   * Avatar And Text Props
   */
  avatarAndTextProps: AvatarAndTextProps;
  /**
   * Progress block props list
   */
  progressBlockProps: ProgressBlockProps[];
  /**
   * Close action
   */
  onClose: () => void;
}
/**
 * Primary UI component for user interaction
 */

const BulkPhotoProgressList = ({
  avatarAndTextProps,
  progressBlockProps,
  onClose,
  ...props
}: BulkPhotoProgressListProps) => {
  return (
    <Grid
      {...props}
      container
      flexDirection={'column'}
      flexWrap={'nowrap'}
      gap={2}
    >
      <Grid item>
        <AvatarAndText {...avatarAndTextProps} />
      </Grid>
      <Grid item flexGrow={1}>
        <ProgressBlockList progressBlockProps={progressBlockProps} />
      </Grid>
      <Grid item container flexDirection={'column'}>
        <Grid item sx={{ py: 0, px: 0 }}>
          <Divider sx={{ mb: 0 }} />
        </Grid>
        <Grid item sx={{ py: 2, px: 0 }}>
          <ButtonList
            justifyContent={'flex-end'}
            buttons={[
              {
                label: 'Close',
                color: 'primary',
                variant: 'contained',
                onClick: onClose
              }
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BulkPhotoProgressList;
