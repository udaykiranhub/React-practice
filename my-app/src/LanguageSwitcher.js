import React from 'react';
import { useTranslation } from 'react-i18next';
const LanguageSwitcher = ({ i18n, onLanguageChange }) => {
  const { t } = useTranslation();

  const handleChangeLanguage = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    onLanguageChange(newLang); // Optional callback for parent component
  };
  return (
    <select onChange={handleChangeLanguage} value={i18n.language}>
      <option value="en">{t('languages.en')}</option>
      <option value="hi">{t('languages.hi')}</option>
      <option value="te">Telugu (Placeholder)</option>
    </select>
  );
};
export default LanguageSwitcher;
