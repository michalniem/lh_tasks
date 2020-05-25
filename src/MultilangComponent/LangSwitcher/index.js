import React, { useContext, useMemo } from "react";

import "./style.scss";

import { LangContext } from "../context";
import langs from "../../translations/config";

import Flag from "../Flag/index";
import CustomDropdown from "../../shared/CustomDropdown";

function LangSwitcher() {
  const { setLanguage } = useContext(LangContext);

  const dropdownOptions = useMemo(
    () =>
      Object.keys(langs).map((lang) => (
        <div
          key={lang}
          className="langSwitcher__button"
          onClick={() => setLanguage(lang)}
        >
          <Flag code={lang} />
          {lang}
        </div>
      )),
    []
  );

  return (
    <CustomDropdown
      defaultMessage="Select language"
      options={dropdownOptions}
    />
  );
}

export default LangSwitcher;
