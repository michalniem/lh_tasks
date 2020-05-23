import React, { createContext, useState } from "react";

import "./style.scss"

export const OverlayContext = createContext();

function OverlayProvider({ children }) {
  const [isOverlaying, setOverlaying] = useState(false);

  const toggleOverlaying = () => setOverlaying(prevState => !prevState);

  return (
    <OverlayContext.Provider value={{
      isOverlaying,
      toggleOverlaying,
    }}>
      {children}
      {isOverlaying && <div onClick={toggleOverlaying} className="overlay"/>}
    </OverlayContext.Provider>
  )
}

export default OverlayProvider;