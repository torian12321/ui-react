import { useEffect, version } from 'react';

import { useGetIsRwsTheme } from 'src/contexts/theme/theme.selectors';
import faviconRsw from 'src/static/icons/favicon_rws.ico';

export const useFavico = (): void => {
  const isRwsTheme = useGetIsRwsTheme();

  // Detect React version
  const reactVersion = parseInt(version.split('.')[0], 10);

  // Set a custom favicon - React 19+ supports better metadata handling
  useEffect(() => {
    if (!isRwsTheme) return;

    if (reactVersion >= 19) {
      // React 19+: Use meta tag approach for better compatibility
      const existingMeta = document.querySelector("meta[name='favicon']");
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.name = 'favicon';
        meta.content = faviconRsw;
        document.head.appendChild(meta);
      }
    }

    // Set link tag for all versions (standard approach)
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = faviconRsw;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = faviconRsw;
      document.head.appendChild(newLink);
    }
  }, [reactVersion, isRwsTheme]);
};
