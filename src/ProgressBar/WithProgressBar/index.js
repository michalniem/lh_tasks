import React from "react";

import "./idnex.css";

function WithProgressBar(Component) {
  return class extends React.Component {
    state = {
      progress: 0,
    };

    handleScroll = (event) => {
      const { target: { scrollTop, scrollHeight, clientHeight }} = event;
      const componentHieght = scrollHeight - clientHeight;
      const percentageScrollProgress = (scrollTop / componentHieght) * 100;

      this.setState({ progress: percentageScrollProgress });
    };

    render() {
      return (
        <div className="progressContainer" onScroll={this.handleScroll}>
          <div className="progressBar">
            <span style={{ width: `${this.state.progress}%` }} data-test-id="progress_bar" />
          </div>
          <Component />
        </div>
      );
    }
  };
}

export default WithProgressBar;
