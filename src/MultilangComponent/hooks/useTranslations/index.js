import { useContext } from "react";

import { LangContext } from "../../context";

const useTranslations = (sectionName) => {
  const { translations } = useContext(LangContext);
  return sectionName ? translations[sectionName] : translations;
};

export default useTranslations;
