import { Grid, InputLabel, Theme, Typography } from '@mui/material';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps
} from 'formik';
import { PatternFormat } from 'react-number-format';
import Button from 'src/components/atoms/Button/Button';
import CircularProgress from 'src/components/atoms/CircularProgress/CircularProgress';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import VerificationInput from 'src/components/molecules/Inputs/VerificationInput/VerificationInput';
import { ArrowLeftIcon } from 'src/components/particles/theme/icons/Arrows/arrow-left';
import yup from 'src/lib/yupLocal';
import isSubmitDisabled from 'src/utils/form/isSubmitDisabled';
import { LoginFormFormProps } from '../LoginForm/LoginForm';
import { SignupFormFormProps } from '../SignupForm/SignupForm';

export interface VerifyFormProps {
  /**
   * Prev page text
   * default
   * log in
   */
  previousPageText?: string;
  /**
   * Loading state
   */
  isLoading: boolean;
  /**
   * The phone number
   */
  phone: string;
  /**
   * handle Submit action
   */
  onSubmit: (
    value: { code: string },
    form: FormikHelpers<SignupFormFormProps>
  ) => void;
  /**
   * handle back action
   */
  onGoBack: () => void;
  /**
   * Handle resend the code
   */
  onResend: (
    values: SignupFormFormProps | LoginFormFormProps,
    formik: FormikProps<SignupFormFormProps | LoginFormFormProps>
  ) => void;
}

const VerifyFormSchema = yup.object().shape({
  code: yup.string().optional(),
  code1: yup.string().required('required'),
  code2: yup.string().required('required'),
  code3: yup.string().required('required'),
  code4: yup.string().required('required')
});
const VerifyForm = ({
  previousPageText = 'log in',
  isLoading,
  phone,
  onSubmit,
  onGoBack,
  onResend,
  ...props
}: VerifyFormProps) => {
  const names = ['code1', 'code2', 'code3', 'code4'];
  return (
    <Grid container data-testid="verify-form" {...props}>
      <Grid item xs={12}>
        <AvatarAndText
          title={'Verify Number'}
          titleTypography={{
            variant: 'displaySmSemibold',
            pb: { xs: 0.5, sm: 0.5, md: 1.5 }
          }}
          subtitle={
            <Typography>
              <>
                We sent a verification code to{' '}
                <PatternFormat
                  value={phone}
                  displayType={'text'}
                  mask={'_'}
                  format={'###-###-####'}
                  allowEmptyFormatting
                />
                .
              </>
            </Typography>
          }
          subtitleTypography={
            { variant: 'textMdRegular', component: 'span' } as any
          }
          sx={{ mb: 3 }}
        />
        <Formik
          initialValues={
            {
              code: '',
              code1: '',
              code2: '',
              code3: '',
              code4: ''
            } as SignupFormFormProps
          }
          onSubmit={(values, form) => {
            const { code1, code2, code3, code4 } = values;
            const code = [code1, code2, code3, code4].join('');
            onSubmit({ code }, form);
          }}
          validationSchema={VerifyFormSchema}
          validateOnMount={true}
        >
          {(
            formProps: FormikProps<SignupFormFormProps | LoginFormFormProps>
          ) => {
            return (
              <>
                <Form>
                  <Grid container flexDirection={'column'} spacing={3}>
                    <Grid item>
                      <Grid
                        container
                        flexDirection={'column'}
                        position={'relative'}
                      >
                        <InputLabel>
                          <Typography
                            variant="textSmRegular"
                            color="text.primary"
                          >
                            Secure code*
                          </Typography>
                        </InputLabel>
                        <Grid
                          container
                          flexDirection={'row'}
                          justifyContent={'flex-start'}
                          alignItems={'flex-end'}
                          flexWrap={'nowrap'}
                        >
                          {names.map((name) => (
                            <Grid item key={`verification-input-key-[${name}]`}>
                              <Field
                                component={VerificationInput}
                                type={'number'}
                                name={name}
                                label={''}
                                size={'small'}
                                labelSx={{
                                  '& .MuiInputLabel-label': {
                                    whiteSpace: 'nowrap'
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>

                        <ErrorMessage name="code">
                          {(msg: any) => (
                            <Typography
                              sx={{
                                color: (theme: Theme) =>
                                  theme.palette.error[500],
                                position: 'absolute',
                                bottom: (theme: Theme) => theme.spacing(-3)
                              }}
                            >
                              {msg}
                            </Typography>
                          )}
                        </ErrorMessage>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        label="Verify Code"
                        size="large"
                        variant="contained"
                        fullWidth={true}
                        endIcon={
                          (isLoading || formProps.isSubmitting) && (
                            <CircularProgress color="inherit" size={20} />
                          )
                        }
                        disabled={isSubmitDisabled(formProps)}
                      />
                    </Grid>
                  </Grid>
                </Form>

                <Grid container mt={4} textAlign={'center'}>
                  <Grid item mx={'auto'} display={'flex'}>
                    <Typography variant="textSmRegular" sx={{ mr: 1 }}>
                      {"Didn't recieve a text?"}
                    </Typography>
                    <Typography
                      variant="textSmRegular"
                      fontWeight={'medium'}
                      onClick={() => onResend(formProps.values, formProps)}
                      sx={{ '&:hover': { cursor: 'pointer' } }}
                      data-testid="verify-form-resend"
                    >
                      Click to resend
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container mt={4} textAlign={'center'}>
                  <Grid item mx={'auto'} display={'flex'}>
                    <Button
                      startIcon={<ArrowLeftIcon color={'secondary'} />}
                      label={`Back to ${previousPageText}`}
                      sx={{ fontWeight: 'medium' }}
                      variant={'text'}
                      color={'secondary'}
                      onClick={onGoBack}
                    />
                  </Grid>
                </Grid>
              </>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
};
export default VerifyForm;
