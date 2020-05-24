import React from "react";

import WithOutsideClick from "./WithOutsideClick";

import "./style.scss";

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

function CustomDropdown({
  options,
  onStartListeningClickOutside,
  waitingOnClickOutside,
}) {
  return (
    <div className="dropdown__container">
      <span
        className="dropdown__default"
        onClick={onStartListeningClickOutside}
      >
        Select something
      </span>
      {waitingOnClickOutside && (
        <ul className="dropdown__options">
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const CustomDropdownWIthOutsideClick = WithOutsideClick(CustomDropdown, { options: dropdownOptions });

const SomeComponentWithOutsideClick = WithOutsideClick(SomeComponent);

export default function index() {
  return (
    <>
      <SomeComponentWithOutsideClick />
      <CustomDropdownWIthOutsideClick />
    </>
  );
}
