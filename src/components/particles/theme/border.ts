import palette from './palette';

// ----------------------------------------------------------------------

interface CustomBorderOptions {
  outlinedButton: string;
  userProfile: string;
  userProfileAvatar: string;
  userProfileAvatarTiny: string;
  uploadCard: string;
  filterButton: string;
  basicBox: string;
  filterButtonHover: string;
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
  uploadCard: `1px dashed ${palette.light.grey[200]}`,
  filterButton: `1px solid ${palette.light.primary[50]}`,
  filterButtonHover: `1px solid ${palette.light.primary[100]}`,
  appearanceCardSelectedHover: `2px solid ${palette.light.primary[600]}`,
  appearanceCardHover: `1px solid ${palette.light.grey[100]}`,
  colorPicker: `3px solid ${palette.light.primary[600]}`,
  standUpContent: `1.5px solid #FFFFFF`,
  offWhiteBorder: `1px solid rgba(255, 255, 255, 0.30)`,
  divider: `1px solid ${palette.light.grey[500_24]}`,
  orange200: `1px solid #F9DBAF`,
  blue200: `1px solid #B2DDFF`,
  green200: `1px solid #ABEFC6`,
  grey900: `2px solid ${palette.light.grey[900]}`
};

export default border;
