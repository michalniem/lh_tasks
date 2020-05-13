import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import useVisibilitySensor from "../hooks/useVisibilitySensor";

function Animated({
  children,
  animation: { enter, exit, transition },
  intersection,
}) {
  const rootRef = useRef(null);
  const isIntersecting = useVisibilitySensor(rootRef, intersection);

  return (
    <div ref={rootRef}>
      <motion.div
        animate={isIntersecting ? "enter" : "exit"}
        variants={{ enter, exit }}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}

Animated.defaultProps = {
  animation: {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, delay: 0.5 },
  },
};

Animated.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.shape({
    enter: PropTypes.object,
    exit: PropTypes.object,
    transition: PropTypes.object,
  }),
  intersection: PropTypes.shape({
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
  }),
};

export default Animated;
