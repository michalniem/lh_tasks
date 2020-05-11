import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import useVisibilitySensor from "../hooks/useVisibilitySensor";

const defaultAnimationOptions = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, delay: 0.5 },
};

const defaultIntersectionOptions = {
  rootMargin: "0px 0px -100px 0px",
};
function Animated({
  children,
  options: {
    animation = defaultAnimationOptions,
    intersection = defaultIntersectionOptions,
  },
}) {
  const rootRef = useRef(null);
  const isIntersecting = useVisibilitySensor(rootRef, intersection);

  return (
    <div ref={rootRef}>
      <AnimatePresence>
        {isIntersecting && <motion.div {...animation}>{children}</motion.div>}
      </AnimatePresence>
    </div>
  );
}

Animated.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    animation: PropTypes.shape({
      initial: PropTypes.object,
      animate: PropTypes.object,
      exit: PropTypes.object,
      transition: PropTypes.object,
    }),
    intersection: PropTypes.shape({
      rootMargin: PropTypes.string,
      threshold: PropTypes.number,
    }),
  }),
};

export default Animated;
