import React, { useState, useCallback, useContext } from "react";

import allTranslations, { defaultLang } from "../../../translations/config";
import { isMatchedObject } from "../../../OnlyWithAuthedUser/helpers";

export const LangContext = React.createContext(allTranslations);

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

  const hasAllTranslations = isMatchedObject(
    allTranslations[lang],
    allTranslations[defaultLang]
  );

  return (
    <LangContext.Provider
      value={{
        translations: allTranslations[hasAllTranslations ? lang : defaultLang],
        setLanguage,
        lang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export default TranslationsProvider;
