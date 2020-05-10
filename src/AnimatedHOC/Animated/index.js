import React, { useRef } from "react";

import "./style.css";
import getAnimationPropeprty from "./helpers/getAnimationProperty";
import useVisibilitySensor from "./hooks/useVisibilitySensor";

export function Animated({
  children,
  options = {
    animation: {
      name: "fade",
      duration: "1s",
      delay: "0.2s",
      timingFunction: "ease-in-out",
    },
  },
}) {
  const containerRef = useRef(null);
  const isIntersecting = useVisibilitySensor(containerRef);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: 0,
        animation: isIntersecting
          ? getAnimationPropeprty(options.animation)
          : "none",
      }}
    >
      {children}
    </div>
  );
}

export function WithAnimation(Component, options, propsToPass) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isIntersecting: false,
      };
      this.containerRef = React.createRef();
      this.observer = new IntersectionObserver(([entry]) => {
        this.setState({ isIntersecting: entry.isIntersecting });
      }, options);
    }

    componentDidMount() {
      if (this.containerRef.current)
        this.observer.observe(this.containerRef.current);
    }

    componentWillUnmount() {
      if (this.containerRef.current)
        this.observer.unobserve(this.containerRef.current);
    }

    render() {
      return (
        <div ref={this.containerRef}>
          <Component {...propsToPass} isVisible={this.state.isVisible}>
            {this.props.children}
          </Component>
        </div>
      );
    }
  };
}

export default Animated;
