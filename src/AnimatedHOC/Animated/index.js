import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import "./style.css";
import useVisibilitySensor from "../hooks/useVisibilitySensor";

function Animated({ children, options }) {
  const rootRef = useRef(null);
  const isIntersecting = useVisibilitySensor(rootRef, options.intersection);

  return (
    <div ref={rootRef}>
      <AnimatePresence>
        {isIntersecting && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Animated.defaultProps = {
  options: {
    animation: {
      name: "fade",
      duration: "1s",
      delay: "0.2s",
      timingFunction: "ease-in-out",
    },
  },
};

Animated.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    animation: PropTypes.shape({}),
    intersection: PropTypes.shape({}),
  }),
};

export default Animated;
