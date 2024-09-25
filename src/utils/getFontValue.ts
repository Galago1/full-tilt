// ----------------------------------------------------------------------

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

// export const responsiveTypography = ({
//   sm,
//   md,
//   lg
// }: {
//   sm: number;
//   md: number;
//   lg: number;
// }) => {
//   return {
//     '@media (min-width:600px)': {
//       fontSize: pxToRem(sm)
//     },
//     '@media (min-width:900px)': {
//       fontSize: pxToRem(md)
//     },
//     '@media (min-width:1200px)': {
//       fontSize: pxToRem(lg)
//     }
//   };
// };
