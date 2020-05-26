import React from "react";
import { mount } from "enzyme";

import translations, { defaultLang } from "../../../translations/config";

import TranslationsProvider from ".";
import { useTranslations } from "./index";

const ComponentForHookTest = ({ sectionName }) => {
  const { translations } = useTranslations(sectionName);
  return (
    <div data-test-id="translations_container">
      {JSON.stringify(translations)}
    </div>
  );
};

describe("useTranslations", () => {
  const setupWrapper = (sectionName) =>
    mount(
      <TranslationsProvider>
        <ComponentForHookTest sectionName={sectionName} />
      </TranslationsProvider>
    );

  test("should return all translations in default language if sestionName is not defined", () => {
    const wrapper = setupWrapper();
    const expectedTranslations = JSON.stringify(translations[defaultLang])
    expect(wrapper.find("[data-test-id='translations_container']").text()).toEqual(expectedTranslations);
  });

  test("should return all translations for specific section in default language", () => {
    const wrapper = setupWrapper("newsletter");
    const expectedTranslations = JSON.stringify(translations[defaultLang].newsletter)
    expect(wrapper.find("[data-test-id='translations_container']").text()).toEqual(expectedTranslations);
  });
});
