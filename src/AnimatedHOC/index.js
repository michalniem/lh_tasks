import React from "react";

import "./index.css";

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent() {
  return (
    <div className="animatedElement">
      I'm created by WithAnimation Higher Order Component.
    </div>
  );
}

const fadeMotionOptions = {
  enter: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
  transition: { duration: 1 },
};

const SomeComponentWithAnimation = WithAnimation(SomeComponent)({
  animation: fadeMotionOptions
});

export default function index() {
  return (
    <>
      <div style={{ height: "100vh" }} />
      <div style={{ minHeight: "500px" }}>
        <SomeComponentWithAnimation />
        <Animated animation={fadeMotionOptions}>
          <div className="animatedElement">
            I'm wrapped into Animated component and render as children. I have
            fade in from left, fade out from right animation.
          </div>
        </Animated>
        <Animated>
          <div className="animatedElement">
            I'm wrapped into Animated component and render as children. I have
            default animation.
          </div>
        </Animated>
      </div>
      <div style={{ height: "100vh" }} />
    </>
  );
}
