export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  currentUser: any;
  loginIsLoading: boolean;
  loginError: string | null;
  signupIsLoading: boolean;
  signupError: string | null;
  logoutIsLoading: boolean;
  logoutError: string | null;
  verifyIsLoading: boolean;
  verifyError: string | null;
};

export interface SignupParams {
  first_name: string;
  last_name: string;
  phone: string;
  code: string;
  push?: RouterPush;
  mixpanel?: any;
}
export type RouterPush = (
  url: any,
  as?: any | undefined,
  options?: any
) => Promise<boolean>;

export interface LoginParams {
  phone: string;
  code: string;
  push?: RouterPush;
  mixpanel?: any;
}

export interface VerifyParams {
  phone: string;
  login?: boolean;
  signup?: boolean;
}

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: (params: LoginParams) => Promise<void>;
  signup: (params: SignupParams) => Promise<void>;
  logout: () => Promise<void>;
  setAdminAsUser: (params: {
    userId: string;
    push: RouterPush;
  }) => Promise<void>;
  revertAdmin: (params: { push: RouterPush; token: string }) => Promise<void>;
};
