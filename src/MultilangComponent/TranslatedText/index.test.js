import React from "react";
import { mount } from "enzyme";

import TranslationsProvider from "../context/LangContext";
import TranslatedText from "./index";
import translations, { defaultLang } from "../../translations/config";

describe("TranslatedText", () => {
  const setupWrapper = (props) => {
    return mount(
      <TranslationsProvider>
        <span data-test-id="translatedText_container">
          <TranslatedText {...props} />
        </span>
      </TranslationsProvider>
    );
  };

  test("should return empty span if default text and id is not defined", () => {
    const wrapper = setupWrapper();
    expect(
      wrapper.find("[data-test-id='translatedText_container'] span").text()
    ).toEqual("");
  });

  test("should return span with default text if id is not defined", () => {
    const wrapper = setupWrapper({ defaultText: "DefaultText" });
    expect(
      wrapper.find("[data-test-id='translatedText_container'] span").text()
    ).toEqual("DefaultText");
  });

  test("should return span with proper translation in default language", () => {
    const wrapper = setupWrapper({
      id: "attention.title",
      defaultText: "DefaultText",
    });
    expect(
      wrapper.find("[data-test-id='translatedText_container'] span").text()
    ).toEqual(translations[defaultLang].attention.title);
  });

  test("should return proper translation as plain text if component is rendered as render children", () => {
    const wrapper = setupWrapper({
      id: "attention.title",
      defaultText: "DefaultText",
      children: (text) => `Translated text as render child: ${text}`,
    });
    expect(
      wrapper.find("[data-test-id='translatedText_container']").text()
    ).toEqual(
      `Translated text as render child: ${translations[defaultLang].attention.title}`
    );
  });
});
