import React from "react";

import WithOutsideClick from "./WithOutsideClick";

function SomeComponent() {
  return <p>SomeComponent</p>;
}

const SomeComponentWithOutsideClick = WithOutsideClick(SomeComponent);

export default function index() {
  return <SomeComponentWithOutsideClick />;
}
