import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import TranslationsProvider from "./MultilangComponent/context";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider>
      <Provider store={store}>
        <App />
      </Provider>
      <div id="portal-root" />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
