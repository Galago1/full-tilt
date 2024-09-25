import { GridProps } from '@mui/material';
import { FieldInputProps, FormikProps } from 'formik';

interface UseBoxSelect {
  selected: any;

  handleSelect: (index: number) => void;
  containerGridProps: GridProps | undefined;
  itemGridProps: GridProps | undefined;
}

interface UseBoxSelectProps {
  form: FormikProps<any>;
  field: FieldInputProps<any>;
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
export const useBoxSelect = ({
  form,
  field,
  slots,
  onChange
}: UseBoxSelectProps): UseBoxSelect => {
  const { containerGridProps, itemGridProps } = slots ?? {};
  const selected = field.value;
  const handleSelect = (index: number) => {
    form.setFieldValue(field.name, index);
    onChange?.(form, field, index);
  };
  return { selected, handleSelect, containerGridProps, itemGridProps };
};
