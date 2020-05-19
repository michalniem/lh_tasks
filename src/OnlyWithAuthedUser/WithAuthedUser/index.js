import React from "react";

function WithProgressBar(ComposedComponent) {
  return () => {
    return <ComposedComponent />;
  };
}

export default WithProgressBar;
