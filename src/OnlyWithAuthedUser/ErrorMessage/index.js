import React from "react";
import PropTypes from "prop-types";

export function ErrorMessage({ target, customMessage }) {
  return <span>{customMessage || `Component ${target} was crashed`}</span>;
}

ErrorMessage.propTypes = {
  customMessage: PropTypes.string,
  target: PropTypes.string,
};

export default ErrorMessage;
