import { GridProps, SvgIconProps } from '@mui/material';
import { FieldAttributes, FieldInputProps, FormikProps } from 'formik';
import { useState } from 'react';

interface UseStarProps {
  slots?: {
    starGridContainerProps: GridProps;
    starGridItemProps: GridProps;
    iconProps: SvgIconProps & { fillColor?: string };
  };
  field: FieldAttributes<any>;
  form: FormikProps<any>;
  onChange: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any
  ) => void;
}

export const useStar = ({ field, form, slots, onChange }: UseStarProps) => {
  const { starGridContainerProps, starGridItemProps, iconProps } = slots ?? {};
  const rating = field.value;
  const handleClick = (value: number) => {
    form.setFieldValue(field.name, value);
    onChange?.(form, field, value);
  };
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return {
    starGridContainerProps,
    starGridItemProps,
    iconProps,
    rating,
    handleClick,
    hoveredRating,
    handleMouseEnter,
    handleMouseLeave
  };
};
