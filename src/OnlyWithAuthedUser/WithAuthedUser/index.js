import React from "react";

function WithProgressBar(Component) {
  return () => {
    return <Component />;
  };
}

export default WithProgressBar;
