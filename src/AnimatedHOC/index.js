import React from "react";

import "./style.scss";

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent() {
  return (
    <div className="animatedElement">
      I'm created by WithAnimation Higher Order Component. I have fade X
      animation.
    </div>
  );
}

function SomeAnotherComponent() {
  return (
    <div className="animatedElement">
      I'm created by WithAnimation Higher Order Component. I have default
      animation.
    </div>
  );
}

const fadeXMotionOptions = {
  enter: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
  transition: { duration: 1 },
};

const fadeYMotionOptions = {
  enter: { y: 0, opacity: 1 },
  exit: { y: -30, opacity: 0 },
  transition: { duration: 1 },
};

const SomeComponentWithFadeAnimation = WithAnimation(SomeComponent)(
  fadeXMotionOptions
);

const SomeComponentWithDefaultAnimation = WithAnimation(SomeAnotherComponent)();

export default function index() {
  return (
    <>
      <div style={{ height: "100vh" }} />
      <SomeComponentWithFadeAnimation />
      <SomeComponentWithDefaultAnimation />
      <Animated animation={fadeXMotionOptions}>
        <div className="animatedElement">
          I'm wrapped into Animated component and render as children. I have
          fade X animation.
        </div>
      </Animated>
      <Animated>
        <div className="animatedElement">
          I'm wrapped into Animated component and render as children. I have
          default animation.
        </div>
      </Animated>
      <Animated animation={fadeYMotionOptions}>
        <div className="animatedElement">
          I'm wrapped into Animated component and render as children. I have
          fade Y animation.
        </div>
      </Animated>
      <div style={{ height: "100vh" }} />
    </>
  );
}
