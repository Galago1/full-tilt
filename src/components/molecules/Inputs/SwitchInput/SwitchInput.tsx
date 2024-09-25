import { FormControlLabel, SxProps, Theme } from '@mui/material';
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
}

/**
 * Primary UI component for user interaction
 */
const SwitchInput = ({
  label,
  labelSx,
  labelPlacement = 'top',
  ...props
}: SwitchInputProps) => {
  return (
    <FormControlLabel
      control={<Switch {...props} />}
      label={label}
      labelPlacement={labelPlacement}
      sx={{
        ...labelSx
      }}
    />
  );
};
export default SwitchInput;
