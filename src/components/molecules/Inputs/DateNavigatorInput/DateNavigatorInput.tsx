import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import DateNavigator, {
  DateNavigatorProps
} from 'src/components/atoms/DateNavigator/DateNavigator';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';

export interface DateNavigatorInputProps extends DateNavigatorProps {
  label?: string;
  labelSx?: SxProps<Theme>;
  orientation?: Orientation;

  slots?: {
    horizontalInput?: HorizontalInputProps;
    labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
  };
}

/**
 * Primary UI component for user interaction
 */
const DateNavigatorInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: DateNavigatorInputProps) => {
  const { horizontalInput, labelProps } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <DateNavigator {...props} />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={<DateNavigator {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default DateNavigatorInput;
