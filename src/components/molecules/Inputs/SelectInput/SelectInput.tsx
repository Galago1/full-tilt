import {
  FormControlLabel,
  FormControlLabelProps,
  GridProps,
  SxProps,
  Theme
} from '@mui/material';
import {
  SelectInputBase,
  SelectInputBaseProps
} from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';

export interface SelectInputProps extends Omit<SelectInputBaseProps, 'slots'> {
  /**
   * The label
   */
  label: string;
  /**
   * The label sx
   */
  labelSx: SxProps<Theme> | SxProps | undefined;
  /**
   * The orientation
   */
  orientation?: Orientation;
  /**
   * The slots
   */
  slots?: {
    horizontalInput?: HorizontalInputProps;
    boxProps?: GridProps;
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const SelectInput = ({
  orientation,
  label,
  labelSx,
  slots,
  ...props
}: SelectInputProps) => {
  const { horizontalInput, labelProps } = slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <SelectInputBase {...props} slots={{ boxProps: slots?.boxProps! }} />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={
        <SelectInputBase {...props} slots={{ boxProps: slots?.boxProps! }} />
      }
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default SelectInput;
