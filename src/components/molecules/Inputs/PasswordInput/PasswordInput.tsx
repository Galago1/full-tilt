import {
  FormControlLabel,
  FormControlLabelProps,
  IconButton,
  InputAdornment,
  SxProps,
  Theme
} from '@mui/material';
import { useState } from 'react';
import type { TextInputBaseProps } from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import TextInputBase from 'src/components/atoms/InputBase/TextInputBase/TextInputBase';
import { EyeIcon } from 'src/components/particles/theme/icons/General/eye';
import { EyeOffIcon } from 'src/components/particles/theme/icons/General/eye-off';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';
import { attachmentIconSx } from 'src/constants/spacing';

export interface PasswordInputProps extends Omit<TextInputBaseProps, 'type'> {
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
const PasswordInput = ({
  orientation,
  label,
  labelSx,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const { horizontalInput, labelProps } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <TextInputBase
          {...props}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            ...props.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {showPassword ? (
                    <EyeIcon sx={attachmentIconSx} />
                  ) : (
                    <EyeOffIcon sx={attachmentIconSx} />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      control={
        <TextInputBase
          {...props}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            ...props.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {showPassword ? (
                    <EyeIcon sx={attachmentIconSx} />
                  ) : (
                    <EyeOffIcon sx={attachmentIconSx} />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
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
export default PasswordInput;
