import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import { Switch } from 'src/components/atoms';
import { SwitchProps } from 'src/components/atoms/Switch/Switch';

export interface SwitchInputProps extends Omit<SwitchProps, 'labelSx'> {
  /**
   * The label
   */
  label?: string;
  /**
   * The label sx
   */
  labelSx?: SxProps<Theme> | SxProps | undefined;
  /**
   * The label placement
   */
  labelPlacement?: 'top' | 'bottom' | 'start' | 'end';
  slots?: {
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const SwitchInput = ({
  label,
  labelSx,
  labelPlacement = 'top',
  slots,
  ...props
}: SwitchInputProps) => {
  const { labelProps } = slots || {};
  return (
    <FormControlLabel
      control={<Switch {...props} />}
      label={label}
      labelPlacement={labelPlacement}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default SwitchInput;
