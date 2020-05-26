import React, { useMemo } from "react";

import "./style.scss";

import translations from "../../translations/config";
import { useTranslations } from "../context/LangContext";

import Flag from "../Flag/index";
import CustomDropdown from "../../shared/CustomDropdown";

function LangSwitcher() {
  const { setLanguage } = useTranslations();

  const dropdownOptions = useMemo(
    () =>
      Object.keys(translations).map((lang) => (
        <div
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
      name="langSwitcher"
      defaultMessage="Select language"
      options={dropdownOptions}
    />
  );
}

export default LangSwitcher;
