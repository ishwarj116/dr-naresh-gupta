'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'hi', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('hi');

  useEffect(() => {
    try {
      if (localStorage.getItem('lang') === 'en') setLang('en');
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
