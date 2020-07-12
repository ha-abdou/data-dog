import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './en/translation'
import translationFR from './fr/translation'

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
}

export type TTranslation = typeof translationEN

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export default i18n
