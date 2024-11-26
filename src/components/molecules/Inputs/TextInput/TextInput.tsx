import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import type { TextInputBaseProps } from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import { Orientation } from 'src/types/other';
import HorizontalInput from '../HorizontalInput';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface TextInputProps extends TextInputBaseProps {
  labelSx?: SxProps<Theme>;
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const TextInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: TextInputProps) => {
  const { horizontalInput, labelProps } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <TextInputBase {...props} />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={<TextInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default TextInput;
