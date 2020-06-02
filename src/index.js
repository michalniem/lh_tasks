import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import TranslationsProvider from "./MultilangComponent/context/LangContext";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </TranslationsProvider>
    <div id="portal-root" />
  </React.StrictMode>,
  document.getElementById("root")
);
