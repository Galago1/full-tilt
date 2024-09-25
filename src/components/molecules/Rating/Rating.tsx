import { Rating as MuiRating } from '@mui/material';
import type { RatingProps as MuiRatingProps } from '@mui/material/Rating';

export interface RatingProps extends MuiRatingProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Rating = ({ ...props }: RatingProps) => {
  return <MuiRating {...props} />;
};

export default Rating;
