import React from "react";
import cn from "classnames";

import "./style.scss";

// import { OverlayContext } from "./context"

function WithOutsideClick(Component) {
  return class extends React.Component {
    state = {
      waitingOnClickOutside: false,
    };

    onStartListeningClickOutside = () => {
      this.setState({
        waitingOnClickOutside: true,
      });
    };

    onClickOutside = () => {
      this.setState({
        waitingOnClickOutside: false,
      });
    };

    render() {
      const { waitingOnClickOutside } = this.state;
      return (
        <div
          className={cn("outsideClick__container", {
            "outsideClick__container--active": waitingOnClickOutside,
          })}
        >
          {waitingOnClickOutside && (
            <div
              onClick={this.onClickOutside}
              className="outsideClick__overlay"
            />
          )}
          <Component
            onStartListeningClickOutside={this.onStartListeningClickOutside}
            waitingOnClickOutside={waitingOnClickOutside}
          />
        </div>
      );
    }
  };
}

export default WithOutsideClick;
