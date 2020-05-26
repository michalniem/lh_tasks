import React from "react";
import { mount } from "enzyme";

import * as LangContext from "../context/LangContext";
import LangSwitcher from "./index";
import translations, { defaultLang } from "../../translations/config";

describe("LangSwitcher", () => {
  const setLanguageSpy = jest.fn();
  const contextValue = {
    setLanguage: setLanguageSpy,
    lang: defaultLang,
  };
  jest
    .spyOn(LangContext, "useTranslations")
    .mockImplementation(() => contextValue);
  const wrapper = mount(<LangSwitcher />);

  test("should render the same amount of li tag as the number of available languages after dropdown click", () => {
    const numberOfavailableLanguages = Object.keys(translations).length;

    wrapper.find(".dropdown__default").simulate("click");
    expect(wrapper.find(".dropdown__options li")).toHaveLength(
      numberOfavailableLanguages
    );
  });

  test("should invoke setLanguage function with first available language after click on first option", () => {
    wrapper.find(".langSwitcher__button").at(0).simulate("click");
    const firstAvailableLanguage = Object.keys(translations)[0];
    expect(
      setLanguageSpy
    ).toHaveBeenCalledWith(firstAvailableLanguage);
  });
});
