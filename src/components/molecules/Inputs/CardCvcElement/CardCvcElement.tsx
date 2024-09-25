import {
  Box,
  BoxProps,
  FormControlLabel,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import { CardCvcElement as CVC } from '@stripe/react-stripe-js';
import { StripeCardNumberElementOptions } from '@stripe/stripe-js';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { Orientation } from 'src/types/other';
import HorizontalInput from '../HorizontalInput';
import { HorizontalInputProps } from '../HorizontalInput/HorizontalInput';

interface ContentProps {
  horizontalInput: HorizontalInputProps;
  orientation: Orientation;
  form: any;
  label: string;
  labelSx: SxProps<Theme>;
  options: StripeCardNumberElementOptions['style'];
}
const Content = ({
  orientation,
  horizontalInput,
  form,
  label,
  labelSx,
  options
}: ContentProps) => {
  if (orientation === 'horizontal')
    return (
      <HorizontalInput
        label={label}
        labelSx={labelSx}
        orientation={orientation}
        {...horizontalInput}
      >
        <CVC
          onBlur={async (event: any) => {
            await form.setTouched({
              ...form.touched,
              securityCode: true
            });
            if (form.errors.securityCode)
              await form.setErrors({
                ...form.errors,
                securityCode: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('securityCode', event.complete);
          }}
          options={{ style: options }}
          className={
            form.touched.securityCode && form.errors.securityCode
              ? 'error StripeElement'
              : 'StripeElement'
          }
        />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      label={label}
      control={
        <CVC
          onBlur={async (event: any) => {
            await form.setTouched({
              ...form.touched,
              securityCode: true
            });
            if (form.errors.securityCode)
              await form.setErrors({
                ...form.errors,
                securityCode: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('securityCode', event.complete);
          }}
          options={{ style: options }}
          className={
            form.touched.securityCode && form.errors.securityCode
              ? 'error StripeElement'
              : 'StripeElement'
          }
        />
      }
      labelPlacement="top"
    />
  );
};

export interface CardCvcElementProps extends BoxProps {
  orientation: Orientation;
  options: StripeCardNumberElementOptions['style'];
  errorSx?: SxProps<Theme>;
  label?: string;
  labelSx?: SxProps<Theme>;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CardCvcElement = ({
  orientation,
  options,
  errorSx,
  labelSx,
  label = 'CVC',
  ...props
}: CardCvcElementProps) => {
  const { horizontalInput } = props.slots || {};
  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex' }} {...props}>
        <Field name="securityCode">
          {({ field, form, meta }: FieldAttributes<any>) => {
            return (
              <Content
                horizontalInput={horizontalInput!}
                orientation={orientation}
                form={form}
                label={label}
                labelSx={labelSx!}
                options={options}
              />
            );
          }}
        </Field>

        <ErrorMessage name="securityCode">
          {(msg: any) => (
            <Typography
              variant="textXsRegular"
              sx={{
                color: (theme: Theme) => theme.palette.error[500],
                position: 'absolute',
                bottom: -8,
                ...errorSx
              }}
            >
              {msg}
            </Typography>
          )}
        </ErrorMessage>
      </Box>
    </>
  );
};
export default CardCvcElement;
