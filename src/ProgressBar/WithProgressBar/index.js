import React from "react";

import "./idnex.css";

function WithProgressBar(Component) {
  return class extends React.Component {
    state = {
      progress: 0,
    };

    handleScroll = (e) => {
      const offsetTop = e.target.scrollTop;
      const componentHieght = e.target.scrollHeight - e.target.clientHeight;
      const scrollProgress = (offsetTop / componentHieght) * 100;

      this.setState({ progress: scrollProgress });
    };

    render() {
      return (
        <div className="progressContainer" onScroll={this.handleScroll}>
          <div className="progressBar">
            <span style={{ width: `${this.state.progress}%` }} />
          </div>
          <Component />
        </div>
      );
    }
  };
}

export default WithProgressBar;
