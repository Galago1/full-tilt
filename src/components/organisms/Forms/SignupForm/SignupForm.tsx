import { CircularProgress, Grid, Typography } from '@mui/material';
import type { FieldAttributes, FormikHelpers, FormikProps } from 'formik';
import { Field, Form, Formik } from 'formik';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import Link, { LinkProps } from 'src/components/atoms/Link/Link';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import PhoneInput from 'src/components/molecules/Inputs/PhoneInput/PhoneInput';
import TextInput from 'src/components/molecules/Inputs/TextInput/TextInput';
import yup from 'src/lib/yupLocal';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';

export interface SignupFormFormProps {
  fullName?: string;
  email?: string;
  phone?: string;
  code?: string;
  code1?: string;
  code2?: string;
  code3?: string;
  code4?: string;
}
export interface SignupFormProps {
  /**
   * Link props
   */
  linkProps: LinkProps;
  /**
   * handle the on submit action
   */
  onSubmit: (
    value: SignupFormFormProps,
    form: FormikHelpers<SignupFormFormProps>
  ) => void;
  /**
   * Form loading state
   */
  isLoading: boolean;
  /**
   * phone field props
   */
  phoneFieldProps?: FieldAttributes<SignupFormFormProps>;
  /**
   * name field props
   */
  nameFieldProps?: FieldAttributes<SignupFormFormProps>;
  /**
   * email field props
   */
  emailFieldProps?: FieldAttributes<SignupFormFormProps>;
  /**
   * button props
   */
  buttonProps?: ButtonProps;
}

const SignupFormSchema = yup.object().shape({
  fullName: yup.string().required('Required'),
  email: yup.string().required('Required').email('Email is not valid'),
  phone: yup.string().required('Required').phone('Phone number is not valid')
});

const SignupForm = ({
  linkProps,
  onSubmit,
  isLoading,
  phoneFieldProps,
  nameFieldProps,
  emailFieldProps,
  buttonProps,
  ...props
}: SignupFormProps) => {
  return (
    <Grid container data-testid="signup-form" {...props}>
      <Grid item xs={12}>
        <AvatarAndText
          title={'Sign Up'}
          titleTypography={{
            variant: 'displaySmSemibold',
            pb: { xs: 0.5, sm: 0.5, md: 1.5 }
          }}
          subtitle={'Get started for free'}
          subtitleTypography={{ variant: 'textMdRegular' }}
          sx={{ mb: 4 }}
        />
        <Formik
          initialValues={
            { phone: '', fullName: '', email: '' } as SignupFormFormProps
          }
          onSubmit={(values, form) => {
            onSubmit(values, form);
          }}
          validationSchema={SignupFormSchema}
          validateOnChange={true}
        >
          {(formProps: FormikProps<SignupFormFormProps>) => {
            return (
              <Form>
                <Grid container flexDirection={'column'} spacing={3}>
                  <Grid item>
                    <Field
                      component={TextInput}
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your name"
                      fullWidth={true}
                      required={true}
                      {...nameFieldProps}
                    ></Field>
                  </Grid>
                  <Grid item>
                    <Field
                      component={TextInput}
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      fullWidth={true}
                      required={true}
                      {...emailFieldProps}
                    ></Field>
                  </Grid>
                  <Grid item>
                    <Field
                      component={PhoneInput}
                      label="Cell Phone Number"
                      placeholder="Mobile number"
                      fullWidth={true}
                      required={true}
                      {...phoneFieldProps}
                      name="phone"
                    ></Field>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      label="Get Started"
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
            );
          }}
        </Formik>
        <Grid container mt={4} textAlign={'center'}>
          <Grid item mx={'auto'} display={'flex'}>
            <Typography variant="textSmRegular" sx={{ mr: 1 }}>
              Already have an account?
            </Typography>
            <Link {...linkProps} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SignupForm;
