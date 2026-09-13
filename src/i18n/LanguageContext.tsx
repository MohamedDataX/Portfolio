import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { ui, type Lang, type Localized, type UiStrings } from './ui';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Interface strings for the current language. */
  t: UiStrings;
  /** Picks the current-language value of a `Localized` content field. */
  pick: <T>(value: Localized<T>) => T;
}

const STORAGE_KEY = 'lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const readSavedLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // English by default; a saved choice wins.
  const [lang, setLang] = useState<Lang>(readSavedLang);

  // Persist + keep <html lang> in sync (SEO, screen readers, hyphenation).
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage blocked: choice just won't persist */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: ui[lang],
    pick: (v) => v[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
