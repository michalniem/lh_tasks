import React from "react";

import { useTranslations } from "../context/LangContext";

import { getObjectKeyByPath } from "../helpers";

function TranslatedText({ id, defaultText, children }) {
  const { translations } = useTranslations();
  const translatedText = id ? getObjectKeyByPath(id, translations) : defaultText;

  // const ModifiedChildren = React.Children.map(children, (child, key) => {
  //   return React.cloneElement(child, {
  //     translatedText
  //   })
  // })

  return children ? children(translatedText) : <span>{translatedText}</span>;
}

export default TranslatedText;
