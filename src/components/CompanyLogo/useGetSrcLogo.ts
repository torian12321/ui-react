import {
  DEFAULT_LOGO_MODE_DARK,
  DEFAULT_LOGO_MODE_LIGHT,
  DEFAULT_LOGO_MODE_RWS_DARK,
  DEFAULT_LOGO_MODE_RWS_LIGHT,
  useGetIsDarkMode,
} from 'src/contexts/theme';
import { useGetIsRwsTheme } from 'src/contexts/theme/theme.selectors';

const LOGOS = {
  '360Base': { light: DEFAULT_LOGO_MODE_LIGHT, dark: DEFAULT_LOGO_MODE_DARK },
  RWS: { light: DEFAULT_LOGO_MODE_RWS_LIGHT, dark: DEFAULT_LOGO_MODE_RWS_DARK },
};

export const useGetSrcLogo = (): string => {
  const isRwsTheme = useGetIsRwsTheme();
  const isDarkMode = useGetIsDarkMode();

  const logoCompany = isRwsTheme ? 'RWS' : '360Base';
  const logoMode = isDarkMode ? 'dark' : 'light';

  return LOGOS[logoCompany][logoMode];
};
