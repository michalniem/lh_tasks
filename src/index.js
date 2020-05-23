import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import OverlayProvider from "./OutsideClickHOC/WithOutsideClick/context";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <OverlayProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </OverlayProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
