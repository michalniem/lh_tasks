import React from "react";

function WithAnimation(Component, propsToPass, options) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isIntersecting: false,
      };
      this.rootRef = React.createRef();
      this.observer = new IntersectionObserver(
        ([entry]) => this.intersectionCallback(entry),
        options
      );
    }

    intersectionCallback = (entry) => {
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
          <Component {...propsToPass} isVisible={this.state.isIntersecting} />
        </div>
      );
    }
  };
}

export default WithAnimation;
