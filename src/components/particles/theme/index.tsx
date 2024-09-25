import type { ReactNode } from 'react';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import customShadows from './shadows';
import blurs from './blurs';
import inputGlobalStyles from '../globalStyles';
import border from './border';
import customBorderRadius from './borderRadius';

type ThemeProviderProps = {
  children: ReactNode;
  isDarkMode?: boolean;
  customThemeOptions?: ThemeOptions;
};
const ThemeProvider = ({
  children,
  isDarkMode,
  customThemeOptions
}: ThemeProviderProps) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isDarkMode ? palette.dark : palette.light,
      typography,
      breakpoints,
      border,
      shape: { borderRadius: 0 },
      customShadows: isDarkMode ? customShadows.dark : customShadows.light,
      borderRadius: customBorderRadius(),
      blurs: isDarkMode ? blurs.dark : blurs.light,

      // borderRadius: customBorderRadius(),
      ...customThemeOptions
    }),
    [isDarkMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
export default ThemeProvider;
