import React from "react";
import ReactCountryFlag from "react-country-flag";

import { defaultLang } from "../../translations/config";

function Flag({ code = defaultLang }) {
  return <ReactCountryFlag svg countryCode={code.toUpperCase()} />;
}

export default Flag;
