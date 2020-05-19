import React from "react";

import { findHighestZIndex } from "../helpers"
import "./idnex.scss";

function WithOutsideClick(Component) {
  return class extends React.Component {
    onStartListeningClickOutside = () => {

    }

    render() {
      findHighestZIndex()
      return <Component />;
    }
  };
}

export default WithOutsideClick;
