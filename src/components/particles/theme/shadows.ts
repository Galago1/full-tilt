// @mui
import { alpha } from '@mui/material/styles';
// import type { Shadows } from '@mui/material/styles/shadows';
//
import palette from './palette';
import { AppearanceSettingsCard } from 'src/components/organisms/Card/Card.stories';

// ----------------------------------------------------------------------

interface CustomShadowOptions {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  appearanceCardSelected: string;
  //
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

const LIGHT_MODE = palette.light.grey[500];
const DARK_MODE = '#000000';

export const fullBoxShadow = (hexColor: string) => {
  return `0px 1px 2px rgba(16, 24, 40, 0.05), ${elementBoxShadow(hexColor)}`;
};
export const elementBoxShadow = (hexColor: string) => {
  return `0px 0px 0px 4px ${hexColor}`;
};

const createCustomShadow = (color: string) => {
  // color ~ rgba(16, 24, 40, 0.05)
  // const transparent = alpha(color, 0.16);
  const base = {
    //   x   y  spread
    xs: `0px 1px 2px ${alpha(color, 0.05)}`,
    sm: `0px 1px 3px ${alpha(color, 0.1)}, 0px 1px 2px ${alpha(color, 0.06)}`,
    md: `0px 4px 8px -2px ${alpha(color, 0.1)}, 0px 2px 4px -2px ${alpha(
      color,
      0.06
    )}`,
    lg: `0px 12px 16px -4px ${alpha(color, 0.08)}, 0px 4px 6px -2px ${alpha(
      color,
      0.03
    )}`,
    xl: `0px 20px 24px -4px ${alpha(color, 0.08)}, 0px 8px 8px -4px ${alpha(
      color,
      0.03
    )}`,
    '2xl': `0px 24px 48px -12px ${alpha(color, 0.18)}`,
    '3xl': `0px 32px 64px -12px ${alpha(color, 0.14)}`,
    appearanceCardSelected: `0px 0px 0px 4px ${alpha(color, 0.24)}`
  };
  return {
    primary: base.xs,
    secondary: base.xs,
    success: base.xs,
    warning: base.xs,
    error: base.xs,
    ...base
  };
};

const customShadows = {
  light: createCustomShadow(LIGHT_MODE),
  dark: createCustomShadow(DARK_MODE)
};

export default customShadows;
