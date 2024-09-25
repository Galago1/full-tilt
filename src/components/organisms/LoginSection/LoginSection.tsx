import { Box, Fade, SxProps, Theme } from '@mui/material';
import { FormikHelpers } from 'formik';
import { LinkProps } from 'src/components/atoms/Link/Link';
import LoginForm from '../Forms/LoginForm';
import {
  LoginFormFormProps,
  LoginFormProps
} from '../Forms/LoginForm/LoginForm';
import VerifyForm from '../Forms/VerifyForm';

export interface LoginSectionProps {
  /**
   * Toggle the fade transition
   */
  fadeToggle: boolean;
  /**
   * Link props
   */
  linkProps: LinkProps;
  /**
   * Show the login form
   */
  showLogin: boolean;
  /**
   * Login form props
   */
  loginFormProps?: LoginFormProps;
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
   * Box props
   */
  boxSx?: SxProps<Theme>;
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
}

const LoginSection = ({
  fadeToggle,
  linkProps,
  showLogin,
  loginFormProps,
  loginIsLoading,
  verifyIsLoading,
  phone,
  boxSx,
  submitLogin,
  submitVerify,
  onGoBack,
  onResend,
  ...props
}: LoginSectionProps) => {
  return (
    <Fade in={fadeToggle} {...props}>
      <Box sx={{ pb: { xs: 8, sm: 8, md: 12 }, ...boxSx }}>
        {showLogin ? (
          <LoginForm
            isLoading={loginIsLoading}
            onSubmit={submitLogin}
            linkProps={linkProps}
            {...loginFormProps}
          />
        ) : (
          <VerifyForm
            onSubmit={submitVerify}
            onGoBack={onGoBack}
            onResend={onResend}
            isLoading={verifyIsLoading}
            phone={phone}
          />
        )}
      </Box>
    </Fade>
  );
};
export default LoginSection;
