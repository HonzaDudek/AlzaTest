import i18n from 'i18next';
import ICU from 'i18next-icu';
import en from 'i18next-icu/locale-data/en';
import cs from 'i18next-icu/locale-data/cs';
import sk from 'i18next-icu/locale-data/sk';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLanguage = 'cs';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .use(ICU)
  .init({
    detection: {
      // TODO: We can write our own detection, but htmlTag and its attribute lang should be good in most cases
      order: [
        'querystring',
        'htmlTag',
        'subdomain',
        'localStorage',
        'cookie',
        'navigator',
        'path',
      ],
      caches: ['localStorage', 'cookie'],
    },
    ns: 'common',
    defaultNS: 'common',
    i18nFormat: {
      localeData: [en, cs, sk],
    },
    fallbackLng: fallbackLanguage,
    debug: true,
    backend: {
      loadPath: '/React/translations/web/{{lng}}/{{ns}}.json',
      crossDomain: false,
      withCredentials: false,
      overrideMimeType: false,
    },
    react: {
      wait: false,
      useSuspense: true,
    },
    load: 'languageOnly',
  });

export default i18n;
