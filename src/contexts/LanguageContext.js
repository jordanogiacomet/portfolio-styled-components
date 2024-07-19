import React, { createContext, useState, useContext } from 'react';
import P from 'prop-types';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage}}>
       {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: P.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);