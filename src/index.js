import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import TranslationsProvider from "./MultilangComponent/context/LangContext";
import GeolocalizationProvider from "./GeolocalizationCustomHook/context/GeolocalizationContext";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider>
      <GeolocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </GeolocalizationProvider>
    </TranslationsProvider>
    <div id="portal-root" />
  </React.StrictMode>,
  document.getElementById("root")
);
