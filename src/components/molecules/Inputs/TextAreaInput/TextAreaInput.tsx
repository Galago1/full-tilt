import {
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import TextAreaInputBase, {
  TextAreaInputBaseProps
} from 'src/components/atoms/InputBase/TextAreaInputBase/TextAreaInputBase';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';

export interface TextAreaInputProps extends TextAreaInputBaseProps {
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
const TextAreaInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: TextAreaInputProps) => {
  const { horizontalInput, labelProps } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <TextAreaInputBase {...props} />
      </HorizontalInput>
    );

  return (
    <FormControlLabel
      control={<TextAreaInputBase {...props} />}
      label={label}
      labelPlacement={'top'}
      sx={{
        ...labelSx
      }}
      {...labelProps}
    />
  );
};
export default TextAreaInput;
