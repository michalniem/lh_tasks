import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import useVisibilitySensor from "../hooks/useVisibilitySensor";

function Animated({ children, options }) {
  const rootRef = useRef(null);
  const isIntersecting = useVisibilitySensor(rootRef, options.intersection);

  return (
    <div ref={rootRef}>
      <AnimatePresence>
        {isIntersecting && (
          <motion.div {...options.motion}>{children}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Animated.defaultProps = {
  options: {
    motion: {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, delay: 0.5 },
    },
  },
};

Animated.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    motion: PropTypes.shape({
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
