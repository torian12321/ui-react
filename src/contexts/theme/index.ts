import baseLogoLight from 'src/static/images/company-logo.avif';
import baseLogoDark from 'src/static/images/company-logo-mode-dark.avif';
import rwsLogoLight from 'src/static/images/company-logo-rws.svg';
import rwsLogoDark from 'src/static/images/company-logo-rws-mode-dark.svg';

export {
  useGetIsDarkMode,
  useGetTheme,
  useGetThemeMode,
} from './theme.selectors';
export { ThemeProvider } from './ThemeProvider';
export { ThemeProviderWord } from './ThemeProvider-word';

export const DEFAULT_LOGO_MODE_LIGHT = baseLogoLight;
export const DEFAULT_LOGO_MODE_DARK = baseLogoDark;

export const DEFAULT_LOGO_MODE_RWS_LIGHT = rwsLogoLight;
export const DEFAULT_LOGO_MODE_RWS_DARK = rwsLogoDark;
