import {
  LoginFormFormProps,
  LoginFormProps
} from 'src/components/organisms/Forms/LoginForm/LoginForm';
import { FormikHelpers } from 'formik';
import LoggedOutLayout, {
  LoggedOutLayoutProps
} from '../layouts/LoggedOutLayout/LoggedOutLayout';
import { LinkProps } from 'src/components/atoms/Link/Link';
import LoginSection from 'src/components/organisms/LoginSection';

export interface LoginProps {
  /**
   * Toggle the fade transition
   */
  fadeToggle: boolean;
  /**
   * Show the login form
   */
  showLogin: boolean;
  /**
   * Background image
   */
  image: any;
  /**
   * Login loading state
   */
  loginIsLoading: boolean;
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
  submitLogin: (
    value: LoginFormFormProps,
    form: FormikHelpers<LoginFormFormProps>
  ) => void;
  /**
   * Handle verify submit
   */
  submitVerify: (
    value: { code: string },
    form: FormikHelpers<LoginFormFormProps>
  ) => void;
  /**
   * handle go back
   */
  onGoBack: () => void;
  /**
   * Handle resend the code
   */
  onResend: (
    value: LoginFormFormProps,
    formik: FormikHelpers<LoginFormFormProps>
  ) => void;
  /**
   * Login form props
   */
  loginFormProps?: LoginFormProps;
}
const Login = ({
  fadeToggle,
  showLogin,
  image,
  loginIsLoading,
  verifyIsLoading,
  phone,
  linkProps,
  loggedOutLayoutProps,
  submitLogin,
  submitVerify,
  onGoBack,
  onResend,
  loginFormProps,
  ...props
}: LoginProps) => {
  return (
    <LoggedOutLayout {...loggedOutLayoutProps} image={image}>
      <LoginSection
        fadeToggle={fadeToggle}
        linkProps={linkProps}
        showLogin={showLogin}
        loginFormProps={loginFormProps}
        loginIsLoading={loginIsLoading}
        verifyIsLoading={verifyIsLoading}
        phone={phone}
        submitLogin={submitLogin}
        submitVerify={submitVerify}
        onGoBack={onGoBack}
        onResend={onResend}
      />
    </LoggedOutLayout>
  );
};

export default Login;
