import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const createGradient = (color1: string, color2: string) => {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
};
const createGradientLte30 = (
  color1: string,
  color2: string,
  color3: string
) => {
  return `linear-gradient(to right, ${color1} 0%, ${color2} 23%, ${color3} 47%)`;
};

const createGradientLte60 = (
  color1: string,
  color2: string,
  color3: string,
  color4: string
) => {
  return `linear-gradient(to right, ${color1} 0%, ${color2} 23%, ${color3} 47%, ${color4} 73%)`;
};

const createGradientGt60 = (
  color1: string,
  color2: string,
  color3: string,
  color4: string,
  color5: string
) => {
  return `linear-gradient(to right, ${color1} 0%, ${color2} 23%, ${color3} 47%, ${color4} 73%, ${color5} 100%)`;
};

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

interface GradientsPaletteOptions {
  primary: string;
  success: string;
  warning: string;
  error: string;
  sliderLte30: string;
  sliderLte60: string;
  sliderGt60: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
    greyiron: PaletteColor;
    cyan: PaletteColor;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
    greyiron: PaletteColor;
    cyan: PaletteColor;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    25: string;
    50: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const GREYIRON_TONE = {
  25: '#FCFCFC',
  50: '#FAFAFA',
  100: '#F4F4F5',
  200: '#E4E4E7',
  300: '#D1D1D6',
  400: '#A0A0AB',
  500: '#70707B',
  600: '#51525C',
  700: '#3F3F46',
  800: '#26272B',
  900: '#1A1A1E', // '#18181B',
  950: '#131316',
  500_8: alpha('#70707B', 0.08),
  500_12: alpha('#70707B', 0.12),
  500_16: alpha('#70707B', 0.16),
  500_24: alpha('#70707B', 0.24),
  500_32: alpha('#70707B', 0.32),
  500_48: alpha('#70707B', 0.48),
  500_56: alpha('#70707B', 0.56),
  500_80: alpha('#70707B', 0.8)
};
const GREYIRON = {
  lighter: GREYIRON_TONE[300],
  light: GREYIRON_TONE[400],
  main: GREYIRON_TONE[500],
  dark: GREYIRON_TONE[600],
  darker: GREYIRON_TONE[700],
  ...GREYIRON_TONE
};

const CYAN_TONE = {
  25: '#F5FEFF',
  50: '#ECFDFF',
  100: '#CFF9FE',
  200: '#A5F0FC',
  300: '#67E3F9',
  400: '#22CCEE',
  500: '#06AED4',
  600: '#088AB2',
  700: '#0E7090',
  800: '#155B75',
  900: '#164C63',
  950: '#0D2D3A'
};

const CYAN = {
  lighter: CYAN_TONE[300],
  light: CYAN_TONE[400],
  main: CYAN_TONE[500],
  dark: CYAN_TONE[600],
  darker: CYAN_TONE[700],
  ...CYAN_TONE
};

const GREY = {
  25: '#FCFCFD',
  50: '#F9FAFB',
  100: '#F2F4F7',
  200: '#EAECF0',
  300: '#D0D5DD',
  400: '#98A2B3',
  500: '#667085',
  600: '#475467',
  700: '#344054',
  800: '#182230',
  900: '#101828',
  950: '#0C111D',
  500_8: alpha('#667085', 0.08),
  500_12: alpha('#667085', 0.12),
  500_16: alpha('#667085', 0.16),
  500_24: alpha('#667085', 0.24),
  500_32: alpha('#667085', 0.32),
  500_48: alpha('#667085', 0.48),
  500_56: alpha('#667085', 0.56),
  500_80: alpha('#667085', 0.8)
};
const PRIMARY_TONE = {
  25: '#FCFAFF',
  50: '#F9F5FF',
  100: '#F4EBFF',
  200: '#E9D7FE',
  300: '#D6BBFB',
  400: '#B692F6',
  500: '#9E77ED',
  600: '#7F56D9',
  700: '#6941C6',
  800: '#53389E',
  900: '#42307D',
  950: '#2C1C5F'
};
const PRIMARY = {
  lighter: PRIMARY_TONE[300],
  light: PRIMARY_TONE[400],
  main: PRIMARY_TONE[500],
  dark: PRIMARY_TONE[600],
  darker: PRIMARY_TONE[700],
  ...PRIMARY_TONE
};

const SECONDARY = {
  lighter: CYAN_TONE[300],
  light: CYAN_TONE[400],
  main: CYAN_TONE[500],
  dark: CYAN_TONE[600],
  darker: CYAN_TONE[700],
  ...CYAN_TONE
};

const SUCCESS_TONE = {
  25: '#F6FEF9',
  50: '#ECFDF3',
  100: '#DCFAE6',
  200: '#A6F4C5',
  300: '#75E0A7',
  400: '#47CD89',
  500: '#12B76A',
  600: '#079455',
  700: '#067647',
  800: '#085D3A',
  900: '#074D31',
  950: '#053321'
};
const SUCCESS = {
  lighter: SUCCESS_TONE[300],
  light: SUCCESS_TONE[400],
  main: SUCCESS_TONE[500],
  dark: SUCCESS_TONE[600],
  darker: SUCCESS_TONE[700],
  ...SUCCESS_TONE
};

const WARNING_TONE = {
  25: '#FFFCF5',
  50: '#FFFAEB',
  100: '#FEF0C7',
  200: '#FEDF89',
  300: '#FEC84B',
  400: '#FDB022',
  500: '#F79009',
  600: '#DC6803',
  700: '#B54708',
  800: '#93370D',
  900: '#7A2E0E',
  950: '#4E1D09'
};
const WARNING = {
  lighter: WARNING_TONE[300],
  light: WARNING_TONE[400],
  main: WARNING_TONE[500],
  dark: WARNING_TONE[600],
  darker: WARNING_TONE[700],
  ...WARNING_TONE
};
const ERROR_TONE = {
  25: '#FFFBFA',
  50: '#FEF3F2',
  100: '#FEE4E2',
  200: '#FECDCA',
  300: '#FDA29B',
  400: '#F97066',
  500: '#F04438',
  600: '#D92D20',
  700: '#B42318',
  800: '#912018',
  900: '#7A271A',
  950: '#55160C'
};
const ERROR = {
  lighter: ERROR_TONE[300],
  light: ERROR_TONE[400],
  main: ERROR_TONE[500],
  dark: ERROR_TONE[600],
  darker: ERROR_TONE[700],
  ...ERROR_TONE
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  sliderLte30: createGradientLte30(PRIMARY[400], PRIMARY[300], SECONDARY[400]),
  sliderLte60: createGradientLte60(
    PRIMARY[400],
    PRIMARY[300],
    PRIMARY[300],
    SECONDARY[300]
  ),
  sliderGt60: createGradientGt60(
    PRIMARY[400],
    PRIMARY[300],
    PRIMARY[300],
    SECONDARY[300],
    SECONDARY[400]
  )
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const WHITE = '#fff';
const BLACK = '#000';

const COMMON = {
  common: {
    black: BLACK,
    white: WHITE
    // whiteTransparent: 'rgba(255, 255, 255, 0.8)'
  },
  primary: { ...PRIMARY, contrastText: WHITE },
  secondary: { ...SECONDARY, contrastText: WHITE },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: WHITE },
  cyan: { ...CYAN, contrastText: WHITE },
  grey: GREY,

  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  greyiron: { ...GREYIRON, contrastText: WHITE },
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: WHITE, default: WHITE, neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action }
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: WHITE, secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action }
  }
} as const;

export default palette;
