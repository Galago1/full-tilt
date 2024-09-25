import {
  Grid,
  GridProps,
  Card as MuiCard,
  CardProps as MuiCardProps
} from '@mui/material';
import { JSXElementConstructor, ReactElement } from 'react';
import CardActions from 'src/components/molecules/Card/CardActions';
import { CardActionsProps } from 'src/components/molecules/Card/CardActions/CardActions';
import CardContent, {
  CardContentProps
} from 'src/components/molecules/Card/CardContent/CardContent';
import CardHeader, {
  CardHeaderProps
} from 'src/components/molecules/Card/CardHeader/CardHeader';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface CardProps extends MuiCardProps {
  /**
   * Option to show or hide the Card header
   */
  showCardHeader?: boolean;
  /**
   * Show the Card actions
   */
  showActions?: boolean;
  /**
   * Component to display
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
  slots?: {
    /**
     * The container styles
     */
    cardHeaderProps?: CardHeaderProps;
    /**
     * The container styles
     */
    boxProps?: GridProps;
    /**
     * The Card content props
     */
    cardContentProps?: CardContentProps;
    /**
     * The Card actions props
     */
    cardActionsProps?: CardActionsProps;
    /**
     * The hide actions box props
     */
    hideActionsBoxProps?: GridProps;
    /**
     * The hide header box props
     */
    hideHeaderBoxProps?: GridProps;
  };
}
const Card = ({
  children,
  showCardHeader = true,
  showActions = true,
  slots,
  ...props
}: CardProps) => {
  const {
    cardHeaderProps,
    cardContentProps,
    cardActionsProps,
    hideActionsBoxProps,
    hideHeaderBoxProps,
    boxProps
  } = slots || {};

  const finalCardContentProps = {
    ...cardContentProps,
    children
  };
  return (
    <MuiCard {...props}>
      <Grid {...boxProps}>
        {showCardHeader ? (
          <CardHeader {...cardHeaderProps} />
        ) : (
          <Grid sx={{ pt: responsiveSpacing }} {...hideHeaderBoxProps} />
        )}
        <CardContent {...finalCardContentProps} />

        {showActions ? (
          <CardActions {...cardActionsProps} />
        ) : (
          <Grid
            sx={{ pt: children ? responsiveSpacing : null }}
            {...hideActionsBoxProps}
          />
        )}
      </Grid>
    </MuiCard>
  );
};
export default Card;
