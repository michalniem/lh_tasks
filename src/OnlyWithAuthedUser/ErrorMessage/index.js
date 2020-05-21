import React from "react";

export function ErrorMessage({ message }) {
  return (
    <span>{message}</span>
  );
}

ErrorMessage.defaultProps = {
  message: "Component was crashed"
}

export default ErrorMessage
