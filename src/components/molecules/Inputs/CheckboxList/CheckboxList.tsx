import {
  Box,
  Grid,
  GridProps,
  Typography,
  TypographyProps
} from '@mui/material';
import CheckboxInputBase from '../CheckboxInputBase/CheckboxInputBase';
import { Field, FieldAttributes } from 'formik';
import HorizontalInput from '../HorizontalInput';
import { Orientation } from 'src/types/other';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

export interface CheckboxListProps {
  /**
   * The label props
   */
  labelProps?: TypographyProps;
  /**
   * The checkbox list props
   */
  checkboxInputs: FieldAttributes<any>[];
  /**
   * The container props
   */
  containerProps?: GridProps;

  TheField?: any;
  orientation?: Orientation;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CheckboxList = ({
  orientation,
  labelProps,
  checkboxInputs,
  containerProps,
  TheField = Field,
  ...props
}: CheckboxListProps) => {
  const { horizontalInput } = props.slots || {};
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={labelProps?.title}
        labelSx={labelProps?.sx}
        orientation={orientation}
        {...horizontalInput}
      >
        <Grid container gap={2} sx={{ width: '100%' }} {...containerProps}>
          {checkboxInputs.map((checkboxInput, index) => (
            <Grid item key={index} flexGrow={1}>
              <TheField component={CheckboxInputBase} {...checkboxInput} />
            </Grid>
          ))}
        </Grid>
      </HorizontalInput>
    );
  return (
    <Box {...props}>
      {labelProps && <Typography {...labelProps} />}
      <Grid container gap={2} sx={{ width: '100%' }} {...containerProps}>
        {checkboxInputs.map((checkboxInput, index) => (
          <Grid item key={index} flexGrow={1}>
            <TheField component={CheckboxInputBase} {...checkboxInput} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CheckboxList;
