export const locales = ['ar', 'en'] as const;
export type Lang = (typeof locales)[number];
export type L<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'ar';

export function isLang(x: unknown): x is Lang {
  return x === 'ar' || x === 'en';
}

export function dirOf(lang: Lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function path(lang: Lang, p = '') {
  const clean = p.replace(/^\/+/, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export function other(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}

export function staticLangPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
