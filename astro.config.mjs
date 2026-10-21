import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qiadah.sa',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  build: { inlineStylesheets: 'auto' },
});
