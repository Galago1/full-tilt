import { Grid, GridProps, SvgIconProps, useTheme } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import { Star01Icon } from 'src/components/particles/theme/icons/Shapes/star-01';
import { useStar } from './hooks';

export interface StarsProps extends FieldProps {
  totalStars: number;

  slots?: {
    starGridContainerProps: GridProps;
    starGridItemProps: GridProps;
    iconProps: SvgIconProps;
  };
  onChange: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any
  ) => void;
}

const Stars = ({ totalStars, field, form, slots, onChange }: StarsProps) => {
  const {
    rating,
    handleClick,
    hoveredRating,
    handleMouseEnter,
    handleMouseLeave
  } = useStar({
    field,
    form,
    slots,
    onChange
  });
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(totalStars)].map((_, index) => (
        <Grid
          key={index}
          item
          role="button"
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index + 1)}
          sx={{
            '& .MuiSvgIcon-root': {
              transition: 'transform 0.2s ease', // Optional: smooth hover effect
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }
          }}
        >
          <Star01Icon
            sx={{
              fontSize: 56,
              '& path:first-of-type': {
                stroke:
                  hoveredRating === index + 1
                    ? theme.palette.cyan[300]
                    : 'transparent',
                strokeWidth: 4
              },
              '& path:last-child': {
                // Inner star
                stroke: theme.palette.cyan[500],
                strokeWidth: 0.75,
                fill:
                  index < rating || index < hoveredRating
                    ? theme.palette.cyan[100]
                    : 'transparent'
              }
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Stars;
