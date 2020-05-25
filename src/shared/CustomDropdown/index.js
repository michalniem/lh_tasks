import React from "react";

import "./style.scss"

import WithOutsideClick from "../../OutsideClickHOC/WithOutsideClick";

function CustomDropdown({
  options = [],
  defaultMessage = "Select something",
  toggleWaitingOnClick,
  waitingOnClickOutside,
}) {
  return (
    <div className="dropdown__container">
      <span
        className="dropdown__default"
        onClick={toggleWaitingOnClick}
      >
        {defaultMessage}
      </span>
      {waitingOnClickOutside && (
        <ul className="dropdown__options">
          {options.map((option) => (
            <li key={option} onClick={toggleWaitingOnClick}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WithOutsideClick(CustomDropdown);