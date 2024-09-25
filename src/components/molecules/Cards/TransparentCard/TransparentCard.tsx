import type { SxProps, Theme, TypographyProps } from '@mui/material';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import type { RatingProps } from 'src/components/molecules/Rating/Rating';
import Rating from 'src/components/molecules/Rating/Rating';

export interface TransparentCardProps {
  /**
   * Card styles
   */
  sx?: SxProps<Theme>;
  /**
   * Card Content styles
   */
  cardContentSx?: SxProps<Theme>;
  /**
   * Card Content title
   */
  title?: string;
  /**
   * Card Content title typography
   */
  titleTypographyProps?: TypographyProps;
  /**
   * Card Content description
   */
  description?: string;
  /**
   * Card Content description typography
   */
  descriptionTypographyProps?: TypographyProps;
  /**
   * Card Content subdescription
   */
  subdescription?: string;
  /**
   * Card Content subdescription typography
   */
  subdescriptionTypographyProps?: TypographyProps;
  /**
   * Card Content quote
   */
  quote?: string;
  /**
   * Card Content quote typography
   */
  quoteTypographyProps?: TypographyProps;
  /**
   * Card Contentrating typography
   */
  ratingProps?: RatingProps;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const TransparentCard = ({
  cardContentSx,
  title,
  description,
  subdescription,
  titleTypographyProps = { variant: 'displaySmMedium' },
  descriptionTypographyProps = {
    variant: 'textMdSemibold',
    color: 'text.secondary'
  },
  subdescriptionTypographyProps = {
    variant: 'textMdRegular',
    color: 'text.secondary'
  },
  sx,
  ratingProps,
  quote,
  quoteTypographyProps = {
    variant: 'textXlSemibold',
    color: 'text.secondary'
  },
  ...props
}: TransparentCardProps) => {
  return (
    <Card sx={{ ...sx }} {...props}>
      <CardContent
        sx={{ ...cardContentSx, padding: (theme: Theme) => theme.spacing(2) }}
      >
        <Grid container flexDirection={'column'}>
          <Grid item>
            {quote && (
              <Typography
                sx={{ ...quoteTypographyProps.sx, mb: 3 }}
                {...quoteTypographyProps}
              >
                {quote}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}
            >
              <Grid item sx={{ order: { xs: 0, sm: 0, md: 1 } }}>
                {ratingProps && <Rating {...ratingProps} />}
              </Grid>
              <Grid item sx={{ flexGrow: 1 }}>
                <Typography {...titleTypographyProps}>{title}</Typography>
                {description && (
                  <Typography {...descriptionTypographyProps}>
                    {description}
                  </Typography>
                )}
                {subdescription && (
                  <Typography {...subdescriptionTypographyProps}>
                    {subdescription}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default TransparentCard;
