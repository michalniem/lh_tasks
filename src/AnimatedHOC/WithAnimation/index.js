import React from "react";
import { motion } from "framer-motion";

const defaultAnimationOptions = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, delay: 0.5 },
};

const defaultIntersectionOptions = {
  threshold: [1],
  rootMargin: "-100px 0px -100px 0px",
};

function WithAnimation(Component, propsToPass) {
  return (
    animation = defaultAnimationOptions,
    intersection = defaultIntersectionOptions
  ) =>
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isIntersecting: false,
        };
        this.rootRef = React.createRef();
        this.observer = new IntersectionObserver(
          ([entry]) => this.observerCallback(entry),
          intersection
        );
      }

      observerCallback = (entry) => {
        this.setState({ isIntersecting: entry.isIntersecting });
      };

      componentDidMount() {
        if (this.rootRef.current) this.observer.observe(this.rootRef.current);
      }

      componentWillUnmount() {
        if (this.rootRef.current) this.observer.unobserve(this.rootRef.current);
      }

      render() {
        return (
          <div ref={this.rootRef}>
            <motion.div
              data-test-id="animated_element"
              animate={this.state.isIntersecting ? "enter" : "exit"}
              variants={{ enter: animation.enter, exit: animation.exit }}
              transition={animation.transition}
            >
              <Component {...propsToPass} />
            </motion.div>
          </div>
        );
      }
    };
}

export default WithAnimation;
