import { pxToRem } from '../../../utils/getFontValue';

// ----------------------------------------------------------------------

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display2xlBold: true;
    display2xlSemibold: true;
    display2xlMedium: true;
    display2xlRegular: true;
    displayXlBold: true;
    displayXlSemibold: true;
    displayXlMedium: true;
    displayXlRegular: true;
    displayLgBold: true;
    displayLgSemibold: true;
    displayLgMedium: true;
    displayLgRegular: true;
    displayMdBold: true;
    displayMdSemibold: true;
    displayMdMedium: true;
    displayMdRegular: true;
    displaySmBold: true;
    displaySmSemibold: true;
    displaySmMedium: true;
    displaySmRegular: true;
    displayXsBold: true;
    displayXsSemibold: true;
    displayXsMedium: true;
    displayXsRegular: true;
    textXlBold: true;
    textXlSemibold: true;
    textXlMedium: true;
    textXlRegular: true;
    textLgBold: true;
    textLgSemibold: true;
    textLgMedium: true;
    textLgRegular: true;
    textMdBold: true;
    textMdSemibold: true;
    textMdMedium: true;
    textMdRegular: true;
    textSmBold: true;
    textSmSemibold: true;
    textSmMedium: true;
    textSmRegular: true;
    textXsBold: true;
    textXsSemibold: true;
    textXsMedium: true;
    textXsRegular: true;
  }
}
const FONT_PRIMARY = 'Inter, Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font
const fontWeightRegular = 400;
const fontWeightMedium = 500; // medium on design system
const fontWeightSemibold = 600; // semibold on design system
const fontWeightBold = 700;

// const h1 = {
//   fontWeight: fontWeightRegular,
//   lineHeight: '5.625rem',
//   fontSize: pxToRem(45),
//   letterSpacing: -1.5
// };
// const h2 = {
//   // fontWeight: fontWeightRegular,
//   lineHeight: '4.5rem',
//   fontSize: pxToRem(40),
//   letterSpacing: -1
// };
// const h3 = {
//   // fontWeight: fontWeightRegular,
//   lineHeight: '3rem',
//   fontSize: pxToRem(36),
//   letterSpacing: -0.5
// };
// const h4 = {
//   // fontWeight: fontWeightRegular,
//   lineHeight: '2.75rem',
//   fontSize: pxToRem(30)
// };
// const h5 = {
//   // fontWeight: fontWeightRegular,
//   lineHeight: '2.375rem',
//   fontSize: pxToRem(27)
// };
// const h6 = {
//   // fontWeight: fontWeightRegular,
//   lineHeight: '1.5rem',
//   fontSize: pxToRem(22.7)
// };

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemibold,
  fontWeightBold,
  // h1: {
  //   // Display 2xl
  //   ...h1
  // },
  // h2: {
  //   // Display xl
  //   ...h2
  // },
  // h3: {
  //   // Display lg
  //   ...h3
  // },
  // h4: {
  //   // Display md
  //   ...h4
  // },
  // h5: {
  //   // Display sm
  //   ...h5
  // },
  // h6: {
  //   // Display xs
  //   ...h6
  // },
  //   // overline: {
  //   //   // Text xs
  //   //   fontWeight: fontWeightLight,
  //   //   lineHeight: '1.125rem',
  //   //   fontSize: pxToRem(12),
  //   //   textTransform: 'uppercase'
  //   // },
  //   // overline2: {
  //   //   fontWeight: fontWeightRegular,
  //   //   lineHeight: '1.125rem',
  //   //   fontSize: pxToRem(12)
  //   // },
  //   // subtitle6: {
  //   //   // Text xs
  //   //   fontWeight: fontWeightLight,
  //   //   lineHeight: '1.125rem',
  //   //   fontSize: pxToRem(12)
  //   // },
  //   // subtitle5: {
  //   //   fontWeight: fontWeightLight,
  //   //   lineHeight: '1.25rem',
  //   //   fontSize: pxToRem(14)
  //   // },
  //   // body4: {
  //   //   fontWeight: fontWeightMedium,
  //   //   lineHeight: '1.25rem',
  //   //   fontSize: pxToRem(14)
  //   // }
  subtitle1: {
    // Text xl,
    //
    fontWeight: fontWeightMedium,
    lineHeight: '1.875rem',
    fontSize: pxToRem(20)
  },
  button: {
    // Text lg
    fontWeight: fontWeightMedium,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18),
    textTransform: 'inherit'
  },
  buttonRegular: {
    // Text lg
    fontWeight: fontWeightRegular,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18),
    textTransform: 'inherit'
  },
  body1: {
    // Text md
    fontWeight: fontWeightRegular,
    lineHeight: '1.5rem',
    fontSize: pxToRem(16)
  },
  subtitle2: {
    // Text sm
    fontWeight: fontWeightRegular,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  body2: {
    // Text sm
    fontWeight: fontWeightRegular,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  caption: {
    // Text xs
    fontWeight: fontWeightRegular,
    lineHeight: '1.125rem',
    fontSize: pxToRem(12)
  },
  display2xlBold: {
    fontWeight: fontWeightBold,
    lineHeight: '5.625rem',
    fontSize: pxToRem(72)
  },
  display2xlSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '5.625rem',
    fontSize: pxToRem(72)
  },
  display2xlMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '5.625rem',
    fontSize: pxToRem(72)
  },
  display2xlRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '5.625rem',
    fontSize: pxToRem(72)
  },
  displayXlBold: {
    fontWeight: fontWeightBold,
    lineHeight: '4.5rem',
    fontSize: pxToRem(60)
  },
  displayXlSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '4.5rem',
    fontSize: pxToRem(60)
  },
  displayXlMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '4.5rem',
    fontSize: pxToRem(60)
  },
  displayXlRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '4.5rem',
    fontSize: pxToRem(60)
  },
  displayLgBold: {
    fontWeight: fontWeightBold,
    lineHeight: '3rem',
    fontSize: pxToRem(48)
  },
  displayLgSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '3rem',
    fontSize: pxToRem(48)
  },
  displayLgMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '3rem',
    fontSize: pxToRem(48)
  },
  displayLgRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '3rem',
    fontSize: pxToRem(48)
  },
  displayMdBold: {
    fontWeight: fontWeightBold,
    lineHeight: '2.75rem',
    fontSize: pxToRem(36)
  },
  displayMdSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '2.75rem',
    fontSize: pxToRem(36)
  },
  displayMdMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '2.75rem',
    fontSize: pxToRem(36)
  },
  displayMdRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '2.75rem',
    fontSize: pxToRem(36)
  },
  displaySmBold: {
    fontWeight: fontWeightBold,
    lineHeight: '2.375rem',
    fontSize: pxToRem(30)
  },
  displaySmSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '2.375rem',
    fontSize: pxToRem(30)
  },
  displaySmMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '2.375rem',
    fontSize: pxToRem(30)
  },
  displaySmRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '2.375rem',
    fontSize: pxToRem(30)
  },
  displayXsBold: {
    fontWeight: fontWeightBold,
    lineHeight: '2rem',
    fontSize: pxToRem(24)
  },
  displayXsSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '2rem',
    fontSize: pxToRem(24)
  },
  displayXsMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '2rem',
    fontSize: pxToRem(24)
  },
  displayXsRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '2rem',
    fontSize: pxToRem(24)
  },
  textXlBold: {
    fontWeight: fontWeightBold,
    lineHeight: '1.875rem',
    fontSize: pxToRem(20)
  },
  textXlSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '1.875rem',
    fontSize: pxToRem(20)
  },
  textXlMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '1.875rem',
    fontSize: pxToRem(20)
  },
  textXlRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '1.875rem',
    fontSize: pxToRem(20)
  },
  textLgBold: {
    fontWeight: fontWeightBold,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18)
  },
  textLgSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18)
  },
  textLgMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18)
  },
  textLgRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '1.75rem',
    fontSize: pxToRem(18)
  },
  textMdBold: {
    fontWeight: fontWeightBold,
    lineHeight: '1.5rem',
    fontSize: pxToRem(16)
  },
  textMdSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '1.5rem',
    fontSize: pxToRem(16)
  },
  textMdMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '1.5rem',
    fontSize: pxToRem(16)
  },
  textMdRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '1.5rem',
    fontSize: pxToRem(16)
  },
  textSmBold: {
    fontWeight: fontWeightBold,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  textSmSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  textSmMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  textSmRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '1.25rem',
    fontSize: pxToRem(14)
  },
  textXsBold: {
    fontWeight: fontWeightBold,
    lineHeight: '1.125rem',
    fontSize: pxToRem(12)
  },
  textXsSemibold: {
    fontWeight: fontWeightSemibold,
    lineHeight: '1.125rem',
    fontSize: pxToRem(12)
  },
  textXsMedium: {
    fontWeight: fontWeightMedium,
    lineHeight: '1.125rem',
    fontSize: pxToRem(12)
  },
  textXsRegular: {
    fontWeight: fontWeightRegular,
    lineHeight: '1.125rem',
    fontSize: pxToRem(12)
  }
} as const;

export default typography;
