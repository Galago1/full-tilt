// @mui
import { alpha } from '@mui/material/styles';
import type { CSSProperties } from '@mui/styled-engine';
//
import palette from './palette';

// ----------------------------------------------------------------------

interface CustomBlurOptions {
  sm: CSSProperties;
  md: CSSProperties;
  lg: CSSProperties;
  xl: CSSProperties;
  xxl: CSSProperties;
}

declare module '@mui/material/styles' {
  interface Theme {
    blurs: CustomBlurOptions;
  }
}

const LIGHT_MODE = palette.light.common.white;
const DARK_MODE = palette.dark.grey[700];

const createCustomShadow = (color: string) => {
  // color ~ rgba(16, 24, 40, 0.05)
  // const transparent = alpha(color, 0.16);
  const base = {
    sm: {
      backgroundColor: alpha(color, 0.6),
      backdropFilter: 'blur(4px)'
    },
    md: {
      backgroundColor: alpha(color, 0.6),
      backdropFilter: 'blur(8px)'
    },
    lg: {
      backgroundColor: alpha(color, 0.6),
      backdropFilter: 'blur(12px)'
    },
    xl: {
      backgroundColor: alpha(color, 0.6),
      backdropFilter: 'blur(20px)'
    },
    xxl: {
      backgroundColor: alpha(color, 0.6),
      backdropFilter: 'blur(64px)'
    }
  };
  return {
    ...base
  };
};

export const blurs = {
  light: createCustomShadow(LIGHT_MODE),
  dark: createCustomShadow(DARK_MODE)
};

// const shadows: {
//   light: Shadows;
//   dark: Shadows;
// } = {
//   light: createShadow(LIGHT_MODE),
//   dark: createShadow(DARK_MODE)
// };

export default blurs;
