import palette from './palette';

// ----------------------------------------------------------------------

interface CustomBorderOptions {
  outlinedButton: string;
  userProfile: string;
  userProfileAvatar: string;
  userProfileAvatarTiny: string;
  black2PxSolid: string;
  cyan5004PxSolid: string;
  uploadCard: string;
  filterButton: string;
  basicBox: string;
  filterButtonHover: string;
  cyan200: string;
  cyan300: string;
  cyan400: string;
  primaryBox: string;
  primary200: string;
  primary1Px: string;
  appearanceCardSelectedHover: string;
  appearanceCardHover: string;
  colorPicker: string;
  standUpContent: string;
  offWhiteBorder: string;
  divider: string;
  orange200: string;
  blue200: string;
  green200: string;
  grey900: string;
  grey400: string;
  grey300: string;
  cyan600: string;
  error300: string;
  success300: string;
  white: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    border: CustomBorderOptions;
  }
  interface ThemeOptions {
    border?: CustomBorderOptions;
  }
}

const border: CustomBorderOptions = {
  outlinedButton: `1px solid ${palette.light.grey[200]}`,
  basicBox: `1px solid rgba(0, 0, 0, 0.23)`,
  userProfile: `1px solid ${palette.light.grey[300]}`,
  userProfileAvatar: `3px solid ${palette.light.common.white}`,
  userProfileAvatarTiny: '0.75px solid rgba(0, 0, 0, 0.08)',
  black2PxSolid: `2px solid ${palette.light.common.black}`,
  primaryBox: `2px solid ${palette.light.primary[600]}`,
  primary200: `1px solid ${palette.light.primary[200]}`,
  uploadCard: `1px dashed ${palette.light.grey[200]}`,
  filterButton: `1px solid ${palette.light.primary[50]}`,
  filterButtonHover: `1px solid ${palette.light.primary[100]}`,
  primary1Px: `1px solid ${palette.light.primary[600]}`,
  appearanceCardSelectedHover: `2px solid ${palette.light.primary[600]}`,
  appearanceCardHover: `1px solid ${palette.light.grey[100]}`,
  colorPicker: `3px solid ${palette.light.primary[600]}`,
  cyan5004PxSolid: `4px solid ${palette.light.cyan[500]}`,
  // EAECF0 grey[200]
  standUpContent: `1.5px solid #FFFFFF`,
  offWhiteBorder: `1px solid rgba(255, 255, 255, 0.30)`,
  cyan200: `1px solid ${palette.light.cyan[200]}`,
  cyan300: `1px solid ${palette.light.cyan[300]}`,
  cyan400: `1px solid ${palette.light.cyan[400]}`,
  grey300: `1px solid ${palette.light.grey[300]}`,
  grey400: `1px solid ${palette.light.grey[400]}`,
  white: `1px solid ${palette.light.common.white}`,
  divider: `1px solid ${palette.light.grey[500_24]}`,
  orange200: `1px solid #F9DBAF`,
  blue200: `1px solid #B2DDFF`,
  green200: `1px solid #ABEFC6`,
  grey900: `2px solid ${palette.light.grey[900]}`,
  cyan600: `1px solid ${palette.light.cyan[500]}`,
  error300: `1px solid ${palette.light.error[300]}`,
  success300: `1px solid ${palette.light.success[300]}`
};

export default border;
