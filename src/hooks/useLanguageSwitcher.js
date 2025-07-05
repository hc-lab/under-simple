import { useTranslation } from 'react-i18next';

/**
 * Hook personalizado para manejar el cambio de idioma
 * @returns {object} Funciones y estado del idioma
 */
export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  const currentLanguage = i18n.language;
  const isSpanish = currentLanguage === 'es';
  const isEnglish = currentLanguage === 'en';
  
  return {
    changeLanguage,
    currentLanguage,
    isSpanish,
    isEnglish,
    availableLanguages: ['es', 'en']
  };
}; 