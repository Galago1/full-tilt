import { Box, Fade } from '@mui/material';
import type {
  SignupFormFormProps,
  SignupFormProps
} from 'src/components/organisms/Forms/SignupForm/SignupForm';
import SignupForm from 'src/components/organisms/Forms/SignupForm/SignupForm';
import VerifyForm from 'src/components/organisms/Forms/VerifyForm/VerifyForm';
import { FormikHelpers, FormikProps } from 'formik';
// import { StaticImageData } from 'next/image';
import LoggedOutLayout, {
  LoggedOutLayoutProps
} from '../layouts/LoggedOutLayout/LoggedOutLayout';
import { LinkProps } from 'src/components/atoms/Link/Link';

export interface SignupProps {
  /**
   * Toggle the fade transition
   */
  fadeToggle: boolean;
  /**
   * Show the login form
   */
  showSignup: boolean;
  /**
   * Background image
   */
  image: any;
  /**
   * Signup loading state
   */
  signupIsLoading: boolean;
  /**
   * Verify loading state
   */
  verifyIsLoading: boolean;
  /**
   * Phone number
   */
  phone: string;
  /**
   * Link props
   */
  linkProps: LinkProps;
  /**
   * Logged out layout props
   */
  loggedOutLayoutProps: LoggedOutLayoutProps;
  /**
   * Handle login submit
   */
  submitSignup: (
    value: SignupFormFormProps,
    form: FormikHelpers<SignupFormFormProps>
  ) => void;
  /**
   * Handle verify submit
   */
  submitVerify: (
    value: { code: string },
    form: FormikHelpers<SignupFormFormProps>
  ) => void;
  /**
   * handle go back
   */
  onGoBack: () => void;
  /**
   * Handle resend the code
   */
  onResend: (
    values: SignupFormFormProps,
    formik: FormikProps<SignupFormFormProps>
  ) => void;
  /**
   * Signup form props
   */
  signupFormProps?: SignupFormProps;
}
const Signup = ({
  fadeToggle,
  showSignup,
  image,
  signupIsLoading,
  verifyIsLoading,
  phone,
  linkProps,
  loggedOutLayoutProps,
  signupFormProps,
  submitSignup,
  submitVerify,
  onGoBack,
  onResend,
  ...props
}: SignupProps) => {
  return (
    <LoggedOutLayout {...loggedOutLayoutProps} image={image}>
      <Fade in={fadeToggle}>
        <Box sx={{ pb: { xs: 8, sm: 8, md: 12 } }}>
          {showSignup ? (
            <SignupForm
              {...signupFormProps}
              onSubmit={submitSignup}
              isLoading={signupIsLoading}
              linkProps={linkProps}
            />
          ) : (
            <VerifyForm
              onSubmit={submitVerify}
              onGoBack={onGoBack}
              onResend={onResend}
              isLoading={verifyIsLoading}
              previousPageText={'sign up'}
              phone={phone}
            />
          )}
        </Box>
      </Fade>
    </LoggedOutLayout>
  );
};

export default Signup;
