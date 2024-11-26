import {
  Box,
  BoxProps,
  FormControlLabel,
  FormControlLabelProps,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import { StripeCardNumberElementOptions } from '@stripe/stripe-js';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { CardNumberElement as CNE } from '@stripe/react-stripe-js';
import HorizontalInput, {
  HorizontalInputProps
} from '../HorizontalInput/HorizontalInput';
import { Orientation } from 'src/types/other';

interface ContentProps {
  horizontalInput: HorizontalInputProps;
  orientation: Orientation;
  form: any;
  label: string;
  labelSx: SxProps<Theme>;
  options: StripeCardNumberElementOptions['style'];
  labelProps: FormControlLabelProps;
}
const Content = ({
  orientation,
  horizontalInput,
  form,
  label,
  labelSx,
  options,
  labelProps
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
            await form.setTouched({
              ...form.touched,
              cardNumber: true
            });
            if (form.errors.cardNumber)
              await form.setErrors({
                ...form.errors,
                cardNumber: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('cardNumber', event.complete);
          }}
          options={{ showIcon: true, style: options }}
          className={
            form.touched.cardNumber && form.errors.cardNumber
              ? 'error StripeElement'
              : 'StripeElement'
          }
        />
      </HorizontalInput>
    );
  return (
    <FormControlLabel
      {...labelProps}
      label={label}
      control={
        <CNE
          onBlur={async (event: any) => {
            await form.setTouched({
              ...form.touched,
              cardNumber: true
            });
            if (form.errors.cardNumber)
              await form.setErrors({
                ...form.errors,
                cardNumber: 'Required'
              });
          }}
          onChange={(event: any) => {
            form.setFieldValue('cardNumber', event.complete);
          }}
          options={{ showIcon: true, style: options }}
          className={
            form.touched.cardNumber && form.errors.cardNumber
              ? 'error StripeElement'
              : 'StripeElement'
          }
        />
      }
      labelPlacement="top"
    />
  );
};

export interface CardNumberElementProps extends BoxProps {
  orientation: Orientation;
  options: StripeCardNumberElementOptions['style'];
  errorSx?: SxProps<Theme>;
  label?: string;
  labelSx?: SxProps<Theme>;
  slots?: {
    horizontalInput?: HorizontalInputProps;
    labelProps?: FormControlLabelProps;
  };
}

/**
 * Primary UI component for user interaction
 */
const CardNumberElement = ({
  orientation,
  options,
  errorSx,
  labelSx,
  label = 'Card Number',
  ...props
}: CardNumberElementProps) => {
  const { horizontalInput, labelProps } = props.slots || {};
  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex' }} {...props}>
        <Field name="cardNumber" data-testid="card-number-element">
          {({ field, form, meta }: FieldAttributes<any>) => {
            return (
              <Content
                orientation={orientation}
                horizontalInput={horizontalInput!}
                form={form}
                label={label}
                labelSx={labelSx!}
                options={options}
                labelProps={labelProps!}
              />
            );
          }}
        </Field>

        <ErrorMessage name="cardNumber">
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
export default CardNumberElement;
