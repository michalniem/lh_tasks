import React from "react";

import "./idnex.scss";

function WithProgressBar(Component) {
  return class extends React.Component {
    state = {
      progress: 0,
    };

    handleScroll = ({ target: { scrollTop, scrollHeight, clientHeight }}) => {
      const componentHieght = scrollHeight - clientHeight;
      const percentageScrollProgress = (scrollTop / componentHieght) * 100;

      this.setState({ progress: percentageScrollProgress });
    };

    render() {
      return (
        <div className="progress__container" onScroll={this.handleScroll}>
          <div className="progress__bar">
            <span style={{ width: `${this.state.progress}%` }} data-test-id="progressBar" />
          </div>
          <Component />
        </div>
      );
    }
  };
}

export default WithProgressBar;
