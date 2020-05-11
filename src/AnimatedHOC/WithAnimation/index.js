import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function WithAnimation(Component, propsToPass) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isIntersecting: false,
      };
      this.rootRef = React.createRef();
      this.observer = new IntersectionObserver(
        ([entry]) => this.obeserverCallback(entry),
        this.props.options.intersection
      );
    }

    static defaultProps = {
      options: {
        motion: {
          initial: { y: -30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3, delay: 0.5 },
        },
        intersection: {},
      },
    };

    static propTypes = {
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

    obeserverCallback = (entry) => {
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
          <AnimatePresence>
            {this.state.isIntersecting && (
              <motion.div {...this.props.options.motion}>
                <Component {...propsToPass} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  };
}

export default WithAnimation;
