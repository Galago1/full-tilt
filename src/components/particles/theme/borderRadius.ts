interface CustomBorderRadiusOptions {
  none: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  full: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    borderRadius: CustomBorderRadiusOptions;
  }
  interface ThemeOptions {
    borderRadius?: CustomBorderRadiusOptions;
  }
}

const createBorderRadius = (): CustomBorderRadiusOptions => {
  return {
    none: '',
    xxs: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '32px',
    full: '50%'
  };
};

export default createBorderRadius;
