import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

import { LocalStorage, getRefLinkCode, getRefLinkMatch } from "../helpers";

export const RefLinkContext = createContext();

export const useRefLink = () => useContext(RefLinkContext);

function RefLinkProvider({ children }) {
  const [refLink, setRefLink] = useState(() => LocalStorage.getItem("refLink"));
  const { search } = useLocation();
  const isPathConnectedWithRefLink = getRefLinkMatch(search);

  useEffect(() => {
    if (isPathConnectedWithRefLink) {
      const refLinkValue = getRefLinkCode(search);
      const hasNewRefLink = refLinkValue !== refLink;

      if (hasNewRefLink) {
        LocalStorage.setItem("refLink", refLinkValue);
        setRefLink(refLinkValue);
      }
    }
  }, [isPathConnectedWithRefLink, refLink]);

  return (
    <RefLinkContext.Provider value={refLink}>
      {isPathConnectedWithRefLink ? <Redirect to="/" /> : children}
    </RefLinkContext.Provider>
  );
}

export default RefLinkProvider;
