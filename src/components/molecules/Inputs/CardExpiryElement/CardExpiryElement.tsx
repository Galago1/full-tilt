import {
  Box,
  BoxProps,
  FormControlLabel,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import { CardExpiryElement as CNE } from '@stripe/react-stripe-js';
import { StripeCardNumberElementOptions } from '@stripe/stripe-js';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { Orientation } from 'src/types/other';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';

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
        <CNE
          onBlur={async (event: any) => {
            await form.setTouched({ ...form.touched, expiry: true });
            if (form.errors.expiry)
              await form.setErrors({
                ...form.errors,
                expiry: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('expiry', event.complete);
          }}
          options={{ style: options }}
          className={
            form.touched.expiry && form.errors.expiry
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
        <CNE
          onBlur={async (event: any) => {
            await form.setTouched({ ...form.touched, expiry: true });
            if (form.errors.expiry)
              await form.setErrors({
                ...form.errors,
                expiry: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('expiry', event.complete);
          }}
          options={{ style: options }}
          className={
            form.touched.expiry && form.errors.expiry
              ? 'error StripeElement'
              : 'StripeElement'
          }
        />
      }
      labelPlacement="top"
    />
  );
};

export interface CardExpiryElementProps extends BoxProps {
  orientation: Orientation;
  label: string;
  options: StripeCardNumberElementOptions['style'];
  errorSx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  slots?: {
    horizontalInput?: HorizontalInputProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CardExpiryElement = ({
  orientation,
  options,
  errorSx,
  labelSx,
  label = 'Expiration',
  ...props
}: CardExpiryElementProps) => {
  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex' }} {...props}>
        <Field name="expiry">
          {({ field, form, meta }: FieldAttributes<any>) => {
            return (
              <Content
                orientation={orientation}
                horizontalInput={props.slots?.horizontalInput!}
                form={form}
                label={label}
                labelSx={labelSx!}
                options={options}
              />
            );
          }}
        </Field>

        <ErrorMessage name="expiry">
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
export default CardExpiryElement;
