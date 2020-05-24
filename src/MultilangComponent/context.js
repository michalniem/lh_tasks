import React, { useState, useCallback } from "react";

import translations, { defaultLang } from "../translations/config";

export const LangContext = React.createContext(translations);

function TranslationsProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  const setLanguage = useCallback((code) => setLang(code), []);

  return (
    <LangContext.Provider
      value={{ translations: translations[lang], setLanguage }}
    >
      {children}
    </LangContext.Provider>
  );
}

export default TranslationsProvider;
