import React from "react";

import WithOutsideClick from "./WithOutsideClick";
import CustomDropdown from "../shared/CustomDropdown";

function SomeComponent({ onStartListeningClickOutside }) {
  return (
    <div style={{ background: "red" }} onClick={onStartListeningClickOutside}>
      SomeComponent
    </div>
  );
}

const dropdownOptions = [
  "Option1",
  "Option2",
  "Option3",
  "Option4",
  "Option5",
  "Option6",
  "Option7",
  "Option8",
];

const SomeComponentWithOutsideClick = WithOutsideClick(SomeComponent);

export default function index() {
  return (
    <>
      <SomeComponentWithOutsideClick />
      <CustomDropdown name="outsideClickSelect" options={dropdownOptions} />
    </>
  );
}
