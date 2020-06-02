import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

import { LocalStorage } from "../helpers";

export const RefLinkContext = React.createContext();

function RefLinkProvider({ children }) {
  const [refLink, setRefLink] = useState(() => LocalStorage.getItem("refLink"));
  const { pathname, search } = useLocation();

  const isPathConnectedWithRefLink =
    pathname.startsWith("/*") && search.startsWith("?ref=");

  useEffect(() => {
    const refLinkValue = search.replace("?ref=", "");
    const hasNewRefLink = refLinkValue !== refLink;

    if (isPathConnectedWithRefLink && hasNewRefLink) {
      console.log("zapisuje w LS");
      const refLinkValue = search.replace("?ref=", "");

      LocalStorage.setItem("refLink", refLinkValue);
      setRefLink(refLinkValue);
    }
  }, [isPathConnectedWithRefLink, refLink]);

  return (
    <RefLinkContext.Provider value={refLink}>
      {isPathConnectedWithRefLink ? <Redirect to="/" /> : children}
    </RefLinkContext.Provider>
  );
}

export default RefLinkProvider;
