import React, { useState } from 'react';
import i18n from './i18n'; // Import your i18n instance
import LanguageSwitcher from './LanguageSwitcher';

function Lang() {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <div className="App">
      <h1>{i18n.t('welcome_message')}</h1> 
      <h1>{i18n.t('contact')}</h1>{/* Use t for translation */}
      <LanguageSwitcher i18n={i18n} onLanguageChange={handleLanguageChange} />
      {/* Rest of your app content, use t('key') for translations */}
    </div>
  );
}

export default Lang;
