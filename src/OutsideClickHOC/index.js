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

function CustomDropdown({onStartListeningClickOutside,  waitingOnClickOutside }) {
  return (
    <div className="dropdown__container">
      <span className="dropdown__default" onClick={onStartListeningClickOutside}>Select something</span>
      {waitingOnClickOutside && <div className="dropdown__options">
        <div>Option1</div>
        <div>Option2</div>
        <div>Option3</div>
        <div>Option4</div>
        <div>Option5</div>
        <div>Option6</div>
        <div>Option7</div>
        <div>Option8</div>
      </div>}
    </div>
  );
}

const CustomDropdownWIthOutsideClick = WithOutsideClick(CustomDropdown)

const SomeComponentWithOutsideClick = WithOutsideClick(SomeComponent);

export default function index() {
  return (
    <>
      <SomeComponentWithOutsideClick />
      <CustomDropdownWIthOutsideClick />
    </>
  );
}
