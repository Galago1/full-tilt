import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Grid,
  GridProps,
  InputLabel,
  InputLabelProps,
  SxProps,
  Theme
} from '@mui/material';
import { Orientation } from 'src/types/other';

const verticalPropDefaults = {
  constainerGridItemProps: {
    spacing: 0.5,
    sx: {
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  },
  labelGridItemProps: {
    // xs: 12,
    // sm: 3
  },
  inputGridItemProps: {
    // xs: 12,
    // sm: 9
  },
  formControlProps: {
    fullWidth: true
  }
};

const horizontalPropDefaults = {
  constainerGridItemProps: {
    sx: {
      alignItems: 'flex-start',
      flexDirection: 'row'
    }
  },
  labelGridItemProps: {
    xs: 12,
    sm: 3
  },
  inputGridItemProps: {
    xs: 12,
    sm: 9
  },
  formControlProps: {
    fullWidth: true
  }
};

export interface HorizontalInputProps {
  /**
   * The label
   */
  label?: string | React.ReactNode;
  /**
   * The label sx
   */
  labelSx?: SxProps<Theme>;

  /**
   * The label orientation
   * @default 'vertical'
   */
  orientation?: Orientation;
  /**
   * The children
   */
  children: React.ReactNode;
  slots?: {
    /**
     * container grid item props
     */
    containerGridItemProps?: GridProps;
    /**
     * label grid item props
     */
    labelGridItemProps?: GridProps;
    /**
     * input grid item props
     */
    inputGridItemProps?: GridProps;
    /**
     * label props
     */
    formLabelProps?: FormLabelProps;
    /**
     * form control props
     */
    formControlProps?: FormControlProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const HorizontalInput = ({
  children,
  label,
  labelSx,
  slots,
  orientation = Orientation.VERTICAL,
  ...props
}: HorizontalInputProps) => {
  const {
    containerGridItemProps,
    labelGridItemProps,
    inputGridItemProps,
    formLabelProps,
    formControlProps
  } = slots || {};

  const propDefaults =
    orientation === 'vertical' ? verticalPropDefaults : horizontalPropDefaults;
  return (
    <Grid
      container
      {...propDefaults.constainerGridItemProps}
      {...containerGridItemProps}
      {...props}
    >
      {label && (
        <Grid item {...propDefaults.labelGridItemProps} {...labelGridItemProps}>
          <FormLabel sx={labelSx} {...formLabelProps}>
            {label}
          </FormLabel>
        </Grid>
      )}
      <Grid item {...propDefaults.inputGridItemProps} {...inputGridItemProps}>
        <FormControl {...propDefaults.formControlProps} {...formControlProps}>
          {children}
        </FormControl>
      </Grid>
    </Grid>
  );
};
export default HorizontalInput;
