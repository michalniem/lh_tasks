import React, { useState, useCallback, useContext } from "react";

import translations, { defaultLang } from "../../../translations/config";

export const LangContext = React.createContext(translations);

export const useTranslations = (sectionName) => {
  const { translations, ...restContext } = useContext(LangContext);
  return {
    translations: sectionName ? translations[sectionName] : translations,
    ...restContext,
  };
};

function TranslationsProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  const setLanguage = useCallback((code) => setLang(code), []);

  return (
    <LangContext.Provider
      value={{ translations: translations[lang], setLanguage, lang }}
    >
      {children}
    </LangContext.Provider>
  );
}

export default TranslationsProvider;
