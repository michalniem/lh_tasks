import { useEffect } from "react";
import { createPortal } from "react-dom";

function Portal({ children, targetSelector = "portal-root" }) {
  const root = document.getElementById(targetSelector);
  const element = document.createElement("div");

  useEffect(() => {
    root.appendChild(element);
    return () => root.removeChild(element);
  }, [element, root]);

  return createPortal(children, element);
};

export default Portal