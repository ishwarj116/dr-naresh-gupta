'use client';

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

const LangContext = createContext({ lang: 'hi', setLang: () => {} });

// SSR पर useLayoutEffect चेतावनी देता है, इसलिए सर्वर पर useEffect
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('hi');

  // useLayoutEffect: hydration के तुरंत बाद, paint से पहले भाषा बदल जाती है,
  // जिससे English उपयोगकर्ताओं को हिन्दी की झलक (flash) कम-से-कम दिखे
  useIsoLayoutEffect(() => {
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
