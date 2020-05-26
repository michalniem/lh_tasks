import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

import WithOutsideClick from "../../OutsideClickHOC/WithOutsideClick";

function CustomDropdown({
  name,
  options,
  defaultMessage,
  toggleWaitingOnClick,
  waitingOnClickOutside,
}) {
  return (
    <div className="dropdown__container">
      <span className="dropdown__default" onClick={toggleWaitingOnClick}>
        {defaultMessage}
      </span>
      {waitingOnClickOutside && (
        <ul className="dropdown__options">
          {options.map((option, id) => (
            <li key={`${name}-option-${id}`} onClick={toggleWaitingOnClick}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

CustomDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number])
      .isRequired
  ),
  defaultMessage: PropTypes.string,
  toggleWaitingOnClick: PropTypes.func.isRequired,
  waitingOnClickOutside: PropTypes.bool.isRequired,
};

CustomDropdown.defaultProps = {
  defaultMessage: "Select something",
};

export default WithOutsideClick(CustomDropdown);
