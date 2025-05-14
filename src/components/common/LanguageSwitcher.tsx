import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-primary-500 text-white' : 'text-inherit'}`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary-500 text-white' : 'text-inherit'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-primary-500 text-white' : 'text-inherit'}`}
      >
        ع
      </button>
    </div>
  );
};

export default LanguageSwitcher;