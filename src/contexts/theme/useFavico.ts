import { useEffect, version } from 'react';

import {
  useGetIs360BaseTheme,
  useGetIsRwsTheme,
} from 'src/contexts/theme/theme.selectors';
import faviconBase360 from 'src/static/icons/favicon_base360.ico';
import faviconRsw from 'src/static/icons/favicon_rws.ico';

export const useFavico = (): void => {
  const isRwsTheme = useGetIsRwsTheme();
  const is360BaseTheme = useGetIs360BaseTheme();

  // Detect React version
  const reactVersion = parseInt(version.split('.')[0], 10);

  // Set a custom favicon - React 19+ supports better metadata handling
  useEffect(() => {
    if (!isRwsTheme && !is360BaseTheme) return;

    const favicon = isRwsTheme ? faviconRsw : faviconBase360;

    if (reactVersion >= 19) {
      // React 19+: Use meta tag approach for better compatibility
      const existingMeta = document.querySelector("meta[name='favicon']");
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.name = 'favicon';
        meta.content = favicon;
        document.head.appendChild(meta);
      }
    }

    // Set link tag for all versions (standard approach)
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = favicon;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
  }, [reactVersion, isRwsTheme, is360BaseTheme]);
};
