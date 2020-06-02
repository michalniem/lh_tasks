import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

import {
  LocalStorage,
  getRefLinkConntectionStatus,
  getRefLinkCode,
} from "../helpers";

export const RefLinkContext = React.createContext();

function RefLinkProvider({ children }) {
  const [refLink, setRefLink] = useState(() => LocalStorage.getItem("refLink"));
  const { pathname, search } = useLocation();

  const isPathConnectedWithRefLink = getRefLinkConntectionStatus(
    pathname,
    search
  );

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
