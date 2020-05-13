import React from "react";

import WithProgressBar from "./WithProgressBar";

import { generateLoremIpsumText } from "./helpers";

function SomeComponent() {
  return <p>{generateLoremIpsumText(70)}</p>;
}

const SomeComponentWithProgressBar = WithProgressBar(SomeComponent);

export default function index() {
  return <SomeComponentWithProgressBar />;
}
