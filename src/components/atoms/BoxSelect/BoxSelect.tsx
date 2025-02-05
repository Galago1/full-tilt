import { Grid, GridProps, SxProps, Theme } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import Button from '../Button';
import { ButtonProps } from '../Button/Button';
import { useBoxSelect } from './hooks';

export interface BoxSelectProps extends FieldProps {
  labels: ButtonProps[];
  selectedColor?: string;
  unselectedColor?: string;
  onChange: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any
  ) => void;
  slots?: {
    containerGridProps?: GridProps;
    itemGridProps?: GridProps;
  };
}

const BoxSelect = ({
  labels,
  selectedColor = 'primary.50',
  unselectedColor = 'transparent',
  form,
  field,
  slots,
  onChange
}: BoxSelectProps) => {
  const key = field.name;
  const { selected, handleSelect, containerGridProps, itemGridProps } =
    useBoxSelect({ form, field, slots, onChange });

  return (
    <Grid
      container
      display="flex"
      gap={3}
      flexWrap="wrap"
      {...containerGridProps}
    >
      {labels.map((button, index) => (
        <Grid
          item
          key={`box-select-index-[${index}]-key-[${key}]`}
          flex={'1 1 auto'}
          {...itemGridProps}
        >
          <Button
            variant={selected === index ? 'contained' : 'outlined'}
            onClick={() => handleSelect(index)}
            {...button}
            sx={
              {
                width: '100%',
                buttonProps: {
                  color: selected === index ? selectedColor : unselectedColor
                },
                ...button.sx
              } as SxProps<Theme>
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxSelect;
