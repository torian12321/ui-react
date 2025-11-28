import baseLogoLight from 'src/static/images/company-logo.avif';
import baseLogoDark from 'src/static/images/company-logo-mode-dark.avif';

export {
  useGetIsDarkMode,
  useGetTheme,
  useGetThemeMode,
} from './theme.selectors';
export { ThemeProvider } from './ThemeProvider';

export const DEFAULT_LOGO_MODE_LIGHT = baseLogoLight;
export const DEFAULT_LOGO_MODE_DARK = baseLogoDark;
