import { Grid, Typography } from '@mui/material';
import type { FieldAttributes, FormikHelpers, FormikProps } from 'formik';
import { Field, Form, Formik } from 'formik';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import CircularProgress from 'src/components/atoms/CircularProgress/CircularProgress';
import Link, { LinkProps } from 'src/components/atoms/Link/Link';
import AvatarAndText, {
  AvatarAndTextProps
} from 'src/components/molecules/AvatarAndText/AvatarAndText';
import PhoneInput from 'src/components/molecules/Inputs/PhoneInput/PhoneInput';
import yup from 'src/lib/yupLocal';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';
import { unMaskPhoneNumber } from 'src/utils/phoneString';

const DefaultProps: AvatarAndTextProps = {
  title: 'Log In',
  titleTypography: {
    variant: 'displaySmMedium',
    pb: { xs: 0.5, sm: 0.5, md: 1.5 }
  },
  subtitle: 'Welcome back! Please enter your details.',
  subtitleTypography: { variant: 'textMdRegular' },
  sx: { mb: 3 }
};

export interface LoginFormFormProps {
  phone?: string;
  code?: string;
  code1?: string;
  code2?: string;
  code3?: string;
  code4?: string;
}

export interface LoginFormProps {
  linkProps: LinkProps;
  /**
   * handle the on submit action
   */
  onSubmit: (
    value: LoginFormFormProps,
    form: FormikHelpers<LoginFormFormProps>
  ) => void;
  /**
   * Form loading state
   */
  isLoading: boolean;
  /**
   * phone field props
   */
  phoneFieldProps?: FieldAttributes<LoginFormFormProps>;
  /**
   * button props
   */
  buttonProps?: ButtonProps;
  /**
   *
   */
  avatarAndTextProps?: AvatarAndTextProps;
}

const LoginFormSchema = yup.object().shape({
  phone: yup.string().required('Required').phone('Phone number is not valid')
});
const LoginForm = ({
  onSubmit,
  isLoading,
  linkProps,
  phoneFieldProps,
  buttonProps,
  avatarAndTextProps = DefaultProps,
  ...props
}: LoginFormProps) => {
  return (
    <Grid container data-testid="login-form" {...props}>
      <Grid item xs={12}>
        <AvatarAndText {...avatarAndTextProps} />
        <Formik
          initialValues={{ phone: '' }}
          onSubmit={(values, form) => {
            onSubmit({ phone: unMaskPhoneNumber(values.phone) }, form);
          }}
          validationSchema={LoginFormSchema}
        >
          {(formProps: FormikProps<LoginFormFormProps>) => {
            return (
              <>
                <Form>
                  <Grid container flexDirection={'column'} spacing={3}>
                    <Grid item>
                      <Field
                        component={PhoneInput}
                        label="Cell phone number"
                        placeholder="Mobile number"
                        fullWidth={true}
                        required={true}
                        {...phoneFieldProps}
                        name="phone"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        label="Verify Number"
                        size="large"
                        variant="contained"
                        fullWidth={true}
                        endIcon={
                          (isLoading || formProps.isSubmitting) && (
                            <CircularProgress color="inherit" size={20} />
                          )
                        }
                        disabled={isSubmitDisabled(formProps)}
                        {...buttonProps}
                      />
                    </Grid>
                  </Grid>
                </Form>
                {linkProps && (
                  <Grid container mt={4} textAlign={'center'}>
                    <Grid item mx={'auto'} display={'flex'}>
                      <Typography variant="textSmRegular" sx={{ mr: 1 }}>
                        Don't have an account?
                      </Typography>
                      <Link {...linkProps} />
                    </Grid>
                  </Grid>
                )}
              </>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
};
export default LoginForm;
