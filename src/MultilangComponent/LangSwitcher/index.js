import React, { useContext } from "react";

import "./style.scss";

import { LangContext } from "../context";
import langs from "../../translations/config";

function LangSwitcher() {
  const { setLanguage } = useContext(LangContext);

  return (
    <ul className="langSwitcher__list">
      {Object.keys(langs).map((lang) => (
        <li key={lang}>
          <button
            className="langSwitcher__button"
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LangSwitcher;
