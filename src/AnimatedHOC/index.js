import React from "react";

import "./index.css"

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent() {
  return <div className="animatedElement">I was created by WithAnimation Higher order component</div>;
}

const SomeComponentWithAnimation = WithAnimation(SomeComponent);

export default function index() {
  return (
    <div style={{ height: "200vh" }}>
      <div style={{ height: "100vh" }} />
      <SomeComponentWithAnimation />
      <Animated>
        <div className="animatedElement">I was wrapped in Animated component and render as children</div>
      </Animated>
    </div>
  );
}
