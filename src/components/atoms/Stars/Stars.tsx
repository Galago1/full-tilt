import { Grid, GridProps, SvgIconProps } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import { Star } from './helpers';
import { useStar } from './hooks';

export interface StarsProps extends FieldProps {
  totalStars: number;
  activeColor?: string;
  inactiveColor?: string;
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

const Stars = ({
  totalStars,
  // TODO: Fix this
  // activeColor = 'primary.500',
  // inactiveColor = 'gray.300',
  activeColor = '#FFA500',
  inactiveColor = '#E0E0E0',
  field,
  form,
  slots,
  onChange
}: StarsProps) => {
  const {
    starGridContainerProps,
    starGridItemProps,
    iconProps,
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

  return (
    <Grid
      display="flex"
      justifyContent="center"
      width="100%"
      height="100%"
      onMouseLeave={handleMouseLeave}
      {...starGridContainerProps}
    >
      {[...Array(totalStars)].map((_, index) => (
        <Grid
          key={index}
          role="button"
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index + 1)}
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: `${100 / totalStars}%`
          }}
          {...starGridItemProps}
        >
          <Star
            active={index < rating}
            hovered={index < hoveredRating}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            {...iconProps}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Stars;
